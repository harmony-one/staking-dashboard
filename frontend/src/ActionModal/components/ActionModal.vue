<template>
  <transition v-if="openModalId === transactionData.type" name="slide-fade">
    <div>
      <div class="action-modal-overlay" @click="close"></div>
      <div v-focus-last class="action-modal" tabindex="0" @keyup.esc="close">
        <div
          v-if="(step === feeStep || step === signStep) && !sending"
          id="prevBtn"
          class="action-modal-icon action-modal-prev"
          @click="previousStep"
        >
          <i class="material-icons">arrow_back</i>
        </div>
        <div
          id="closeBtn"
          class="action-modal-icon action-modal-close"
          @click="close"
        >
          <i class="material-icons">close</i>
        </div>
        <div class="action-modal-header">
          <span class="action-modal-title">
            {{ requiresSignIn ? `Sign in required` : title }}
          </span>
          <Steps
            v-if="
              [defaultStep, feeStep, signStep].includes(step) &&
                featureAvailable
            "
            :steps="['Details', 'Fees']"
            :active-step="step"
          />
          <p
            v-if="
              extension.enabled &&
                !modalContext.isExtensionAccount &&
                step === signStep &&
                selectedSignMethod === SIGN_METHODS.EXTENSION
            "
            class="form-message notice extension-address"
          >
            The address you are trying to send with is not available in the
            extension.
          </p>
        </div>
        <template v-if="!featureAvailable">
          <FeatureNotAvailable :feature="title" />
        </template>
        <template v-else>
          <div v-if="requiresSignIn" class="action-modal-form">
            <p class="form-message notice">
              You need to sign in to submit a transaction.
            </p>
          </div>
          <div v-else-if="step === defaultStep" class="action-modal-form">
            <slot />
          </div>
          <div v-else-if="step === feeStep" class="action-modal-form">
            <TmFormGroup
              v-if="session.experimentalMode"
              :error="$v.gasPrice.$error && $v.gasPrice.$invalid"
              class="action-modal-group"
              field-id="gasPrice"
              field-label="Gas Price"
            >
              <span class="input-suffix">{{ bondDenom | viewDenom }}</span>
              <TmField
                id="gas-price"
                v-model="gasPrice"
                step="0.000000001"
                type="number"
                min="0"
              />
              <TmFormMsg
                v-if="balanceInAtoms === 0"
                :msg="`doesn't have any ${bondDenom}s`"
                name="Wallet"
                type="custom"
              />
              <TmFormMsg
                v-else-if="$v.gasPrice.$error && !$v.gasPrice.required"
                name="Gas price"
                type="required"
              />
              <TmFormMsg
                v-else-if="$v.gasPrice.$error && !$v.gasPrice.between"
                :max="$v.gasPrice.$params.between.max"
                :min="0"
                name="Gas price"
                type="between"
              />
            </TmFormGroup>
            <TableInvoice
              :amount="Number(amount)"
              :estimated-fee="estimatedFee"
              :bond-denom="bondDenom"
            />
            <TmFormMsg
              v-if="$v.invoiceTotal.$invalid"
              name="Total"
              type="between"
              min="0"
              :max="balanceInAtoms"
            />

            <div style="margin: 50px 0;">
              <TmFormGroup
                v-if="signMethods.length > 1"
                class="action-modal-form-group"
                field-id="sign-method"
                field-label="Signing Method"
              >
                <TmField
                  id="sign-method"
                  v-model="selectedSignMethod"
                  :options="signMethods"
                  type="select"
                />
              </TmFormGroup>
              <HardwareState
                v-if="selectedSignMethod === SIGN_METHODS.LEDGER"
                :icon="session.browserWithLedgerSupport ? 'usb' : 'info'"
                :loading="!!sending"
              >
                <div v-if="session.browserWithLedgerSupport">
                  {{
                    sending
                      ? `Please verify and sign the transaction on your Ledger`
                      : `Please plug in your Ledger&nbsp;Nano and open
                  the Harmony app`
                  }}
                </div>
                <div v-else>
                  Please use Chrome, Brave, or Opera. Ledger is not supported in
                  this browser.
                </div>
              </HardwareState>
              <HardwareState
                v-if="selectedSignMethod === SIGN_METHODS.EXTENSION"
                :icon="session.browserWithLedgerSupport ? 'laptop' : 'info'"
                :loading="!!sending"
              >
                <div v-if="extension.enabled && !sending">
                  Please send the transaction to be signed in the Harmony
                  Browser Extension.
                </div>
                <div v-if="extension.enabled && sending">
                  Please open the Harmony Browser Extension, review the details,
                  and approve the transaction.
                </div>
                <div v-if="!extension.enabled">
                  Please install the Harmony Browser Extension from the
                  <a
                    href="https://chrome.google.com/webstore/category/extensions"
                    target="_blank"
                    rel="noopener norefferer"
                    >Chrome Web Store</a
                  >.
                </div>
              </HardwareState>
              <HardwareState
                v-if="selectedSignMethod === SIGN_METHODS.MATHWALLET"
                :icon="session.browserWithLedgerSupport ? 'laptop' : 'info'"
                :loading="!!sending"
              >
                <div v-if="!sending">
                  Please send the transaction to be signed in the Math Wallet.
                </div>
                <div v-if="sending">
                  Please open the Math Wallet, review the details, and approve
                  the transaction.
                </div>
              </HardwareState>
              <HardwareState
                v-if="selectedSignMethod === SIGN_METHODS.ONEWALLET"
                :icon="session.browserWithLedgerSupport ? 'laptop' : 'info'"
                :loading="!!sending"
              >
                <div v-if="!sending">
                  Please send the transaction to be signed in the Harmony One
                  Wallet.<hr/>
                  <h4 style="color: red; fontWeight: bold">Harmony One Wallet is discontinued. Please consider migrating to a different supported wallet, such as, Metamask. Click <a href="https://www.youtube.com/watch?v=I_VxStYi-ow" target="_blank">HERE</a> for migration tutorial.</h4>

                </div>
                
                <div v-if="sending">
                  Please open the Harmony One Wallet, review the details, and
                  approve the transaction.<hr/>
                  <h4 style="color: red; fontWeight: bold">Harmony One Wallet is discontinued. Please consider migrating to a different supported wallet, such as, Metamask. Click <a href="https://www.youtube.com/watch?v=I_VxStYi-ow" target="_blank">HERE</a> for migration tutorial.</h4>

                </div>
              </HardwareState>
              <form
                v-else-if="selectedSignMethod === SIGN_METHODS.LOCAL"
                @submit.prevent="validateChangeStep"
              >
                <TmFormGroup
                  :error="$v.password.$error && $v.password.$invalid"
                  class="action-modal-group"
                  field-id="password"
                  field-label="Password"
                >
                  <TmField
                    id="password"
                    v-model="password"
                    v-focus
                    type="password"
                    placeholder="Password"
                  />
                  <TmFormMsg
                    v-if="$v.password.$error && !$v.password.required"
                    name="Password"
                    type="required"
                  />
                </TmFormGroup>
              </form>
            </div>
          </div>
          <div v-else-if="step === inclusionStep" class="action-modal-form">
            <TmDataMsg>
              <div slot="image">
                <img
                  style="width: 40px; height: 40px;"
                  src="~assets/images/loader.svg"
                  alt="a small spinning circle to display loading"
                />
              </div>
              <div slot="title">Signed and sent to the network</div>
              <div slot="subtitle">
                The transaction
                <!-- with the hash {{ txHash }} -->
                was successfully signed and sent to the network. Waiting for it
                to be confirmed.
                <div v-if="txHash && Array.isArray(txHash)">
                  <br />Transactions:
                  <a
                    v-for="(item, index) in txHash"
                    :key="index"
                    :href="linkToTransaction(item.hash)"
                    target="_blank"
                    >{{ prettyTransactionHash(item.hash) }}</a
                  >
                </div>
                <div v-if="txHash && !Array.isArray(txHash)">
                  <br />Transaction:
                  <a :href="linkToTransaction(txHash)" target="_blank">{{
                    prettyTransactionHash(txHash)
                  }}</a>
                </div>
              </div>
            </TmDataMsg>
          </div>
          <div
            v-else-if="step === successStep"
            class="action-modal-form success-step"
          >
            <TmDataMsg
              :icon="isTransactionFailed ? 'sentiment_dissatisfied' : 'check'"
            >
              <div slot="title">
                {{
                  isTransactionFailed
                    ? "Failed"
                    : notifyMessage.title
                }}
              </div>
              <div slot="subtitle">
                {{
                  isTransactionFailed
                    ? txConfirmResult.message
                    : notifyMessage.body
                }}
                <br />
                <div v-if="txHash && Array.isArray(txHash)">
                  <br />Transactions:
                  <a
                    v-for="(item, index) in txHash"
                    :key="index"
                    :href="linkToTransaction(item.hash)"
                    target="_blank"
                    >{{ prettyTransactionHash(item.hash) }}</a
                  >
                </div>
                <div v-if="txHash && !Array.isArray(txHash)">
                  <br />Transaction:
                  <a :href="linkToTransaction(txHash)" target="_blank">{{
                    txHash
                  }}</a>
                </div>
              </div>
            </TmDataMsg>
          </div>
          <div class="action-modal-footer">
            <slot name="action-modal-footer">
              <TmFormGroup
                v-if="[defaultStep, feeStep].includes(step)"
                class="action-modal-group"
              >
                <div>
                  <TmBtn
                    v-if="requiresSignIn"
                    v-focus
                    value="Sign In"
                    color="primary"
                    @click.native="goToSession"
                    @click.enter.native="goToSession"
                  />
                  <TmBtn
                    v-else-if="sending"
                    :value="submitButtonCaption"
                    disabled="disabled"
                    color="primary"
                  />
                  <TmBtn
                    v-else-if="!connected"
                    value="Connecting..."
                    disabled="disabled"
                    color="primary"
                  />
                  <TmBtn
                    v-else-if="step !== feeStep"
                    ref="next"
                    color="primary"
                    value="Next"
                    @click.native="validateChangeStep"
                  />
                  <TmBtn
                    v-else
                    ref="send"
                    color="primary"
                    value="Confirm and Sign"
                    :disabled="
                      !hasSigningMethod ||
                        !selectedSignMethod ||
                        disabled ||
                        (step === feeStep && $v.invoiceTotal.$invalid)
                    "
                    @click.native="validateChangeStep"
                  />
                </div>
              </TmFormGroup>
            </slot>
            <p
              v-if="submissionError"
              class="tm-form-msg sm tm-form-msg--error submission-error"
            >
              {{ submissionError }}
            </p>
          </div>
        </template>
      </div>
    </div>
  </transition>
</template>

<script>
import HardwareState from "src/components/common/TmHardwareState"
import TmBtn from "src/components/common/TmBtn"
import TmField from "src/components/common/TmField"
import TmFormGroup from "src/components/common/TmFormGroup"
import TmFormMsg from "src/components/common/TmFormMsg"
import FeatureNotAvailable from "src/components/common/FeatureNotAvailable"
import TmDataMsg from "common/TmDataMsg"
import TableInvoice from "./TableInvoice"
import Steps from "./Steps"
import { mapState, mapGetters } from "vuex"
import { atoms, viewDenom, prettyInt } from "src/scripts/num"
import { transactionToShortString } from "src/scripts/transaction-utils"
import { between, requiredIf, minLength } from "vuelidate/lib/validators"
import { track } from "scripts/google-analytics"
import config from "src/config"

import ActionManager from "../utils/ActionManager"
import { closeExtensionSession } from "scripts/extension-utils"
import { openExtensionPopup } from "../utils/openExtensionPopup"
import { BigNumber } from "bignumber.js"
import { toBech32 } from "@harmony-js/crypto"

const defaultStep = `details`
const feeStep = `fees`
const signStep = `sign`
const inclusionStep = `send`
const successStep = `success`

const SIGN_METHODS = {
  LOCAL: `local`,
  LEDGER: `ledger`,
  EXTENSION: `extension`,
  MATHWALLET: `mathwallet`,
  ONEWALLET: `onewallet`,
  METAMASK: `metamask`,
  MULTISIG: 'multisig'
}

const signMethodOptions = {
  LEDGER: {
    key: `Ledger Nano`,
    value: SIGN_METHODS.LEDGER
  },
  MATHWALLET: {
    key: `Math Wallet`,
    value: SIGN_METHODS.MATHWALLET
  },
  ONEWALLET: {
    key: `One Wallet`,
    value: SIGN_METHODS.ONEWALLET
  },
  LOCAL: {
    key: `Local Account (Unsafe)`,
    value: SIGN_METHODS.LOCAL
  },
  EXTENSION: {
    key: `Harmony Browser Extension (Deprecated)`,
    value: SIGN_METHODS.EXTENSION
  },
  METAMASK: {
    key: 'MetaMask',
    value: SIGN_METHODS.METAMASK
  },
  MULTISIG: {
    key: 'Multisig',
    value: SIGN_METHODS.MULTISIG
  }
}

const getMathWalletUtils = () => import("scripts/mathwallet-utils")
const getOneWalletUtils = () => import("scripts/onewallet-utils")
const getMetaMaskUtils = () => import("scripts/metamask-utils/index")
const getMultisigUtils = () => import("scripts/multisig-utils/index")
let processMathWalletMessage
let processOneWalletMessage
let processMetaMaskMessage
let processMultisigMessage

export const sessionType = {
  EXPLORE: "explore",
  LOCAL: SIGN_METHODS.LOCAL,
  LEDGER: SIGN_METHODS.LEDGER,
  EXTENSION: SIGN_METHODS.EXTENSION,
  MATHWALLET: SIGN_METHODS.MATHWALLET,
  ONEWALLET: SIGN_METHODS.ONEWALLET,
  METAMASK: SIGN_METHODS.METAMASK,
  MULTISIG: SIGN_METHODS.MULTISIG
}

export default {
  name: `action-modal`,
  components: {
    HardwareState,
    TmBtn,
    TmField,
    TmFormGroup,
    TmFormMsg,
    TmDataMsg,
    TableInvoice,
    Steps,
    FeatureNotAvailable
  },
  filters: {
    viewDenom
  },
  props: {
    title: {
      type: String,
      required: true
    },
    validate: {
      type: Function,
      default: undefined
    },
    submissionErrorPrefix: {
      type: String,
      default: `Transaction failed`
    },
    amount: {
      type: [String, Number],
      default: `0`
    },
    transactionData: {
      type: Object,
      default: () => {}
    },
    notifyMessage: {
      type: Object,
      default: () => ({
        title: `Successful transaction`,
        body: `You have successfully completed a transaction.`
      })
    },
    // disable proceeding from the first page
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isWidget: window.location.pathname.includes('/widget/'),
    step: defaultStep,
    selectedSignMethod: null,
    password: null,
    sending: false,
    gasEstimate: null,
    gasPrice: config.default_gas_price.toFixed(9),
    submissionError: null,
    actionManager: new ActionManager(),
    txConfirmResult: null,
    defaultStep,
    feeStep,
    signStep,
    inclusionStep,
    successStep,
    SIGN_METHODS,
    featureAvailable: true
  }),
  computed: {
    ...mapState([`extension`, `session`, `connection`, "wallet", "delegates"]),
    ...mapState({
      network: state => state.connection.network,
      networkConfig: state => state.connection.networkConfig,
      chainTitle: state => state.connection.chainTitle
    }),
    ...mapGetters([
      `connected`,
      `bondDenom`,
      `liquidAtoms`,
      `modalContext`,
      "actionInProgress",
      "openModalId"
    ]),
    requiresSignIn() {
      return !this.session.signedIn
    },
    txHash() {
      return this.txConfirmResult && this.txConfirmResult.txhash
    },
    isTransactionFailed() {
      return this.txConfirmResult && this.txConfirmResult.error
    },

    undelegations() {
      const epoch = this.connection.networkInfo.current_epoch
      const delegates = this.delegates.loading ? [] : this.delegates.delegates
      const undelegations = []
      for (let i = 0; i < delegates.length; i++) {
        const d = delegates[i]
        for (let j = 0; j < d.Undelegations.length; j++) {
          const ud = d.Undelegations[j]
          if (ud.Epoch + 7 < epoch) continue

          const lastEpochInCommit = d.validator_info["last-epoch-in-committee"]
          let remaining_epoch = 1

          if (lastEpochInCommit) {
            // remaining_epoch = Math.min(lastEpochInCommit, ud.Epoch) - epoch + 1
            remaining_epoch =
              7 - (epoch - Math.min(lastEpochInCommit, ud.Epoch))
          }

          if (remaining_epoch < 7 && epoch >= 290) {
            undelegations.push(ud.Amount)
          }
        }
      }
      // console.log(this.networkInfo, undelegations)

      return undelegations
    },

    undelegationsAmount() {
      return this.undelegations.reduce((acc, v) => acc + v, 0)
    },

    balanceInAtoms() {
      const { type } = this.transactionData

      if (type === "MsgDelegate") {
        return BigNumber(this.undelegationsAmount)
          .div(1e12)
          .plus(this.liquidAtoms)
          .div(1e6)
          .toNumber()
      }

      return atoms(this.liquidAtoms)
    },
    estimatedFee() {
      return Number(this.gasPrice) * Number(this.gasEstimate) // already in atoms
    },
    invoiceTotal() {
      return (
        Number(this.amount) + Number(this.gasPrice) * Number(this.gasEstimate)
      )
    },
    isValidChildForm() {
      // here we trigger the validation of the child form
      if (this.validate) {
        return this.validate()
      }
      return true
    },
    signMethods() {
      let signMethods = []
      if (this.session.sessionType === sessionType.EXPLORE) {
        signMethods.push(signMethodOptions.EXTENSION)
        signMethods.push(signMethodOptions.LEDGER)
      } else if (this.session.sessionType === sessionType.LEDGER) {
        signMethods.push(signMethodOptions.LEDGER)
      } else if (this.session.sessionType === sessionType.EXTENSION) {
        signMethods.push(signMethodOptions.EXTENSION)
      } else if (this.session.sessionType === sessionType.MATHWALLET) {
        signMethods.push(signMethodOptions.MATHWALLET)
      } else if (this.session.sessionType === sessionType.ONEWALLET) {
        signMethods.push(signMethodOptions.ONEWALLET)
      } else if (this.session.sessionType === sessionType.METAMASK) {
        signMethods.push(signMethodOptions.METAMASK)
      } else if (this.session.sessionType === sessionType.MULTISIG) {
        signMethods.push(signMethodOptions.MULTISIG)
      } else {
        signMethods.push(signMethodOptions.LOCAL)
      }

      console.log('signMethods', signMethods);

      return signMethods
    },
    submitButtonCaption() {
      switch (this.selectedSignMethod) {
        case "ledger":
          return `Waiting for Ledger`
        case "extension":
          return `Waiting for Extension`
        case "mathwallet":
          return `Waiting for Math Wallet`
        case "onewallet":
          return `Waiting for Harmony One Wallet`
        default:
          return "Sending..."
      }
    },
    hasSigningMethod() {
      return (
        this.session.browserWithLedgerSupport ||
        this.session.selectedSignMethod === "onewallet" ||
        this.session.selectedSignMethod === "mathwallet" ||
        this.session.sessionType === 'metamask' ||
        this.session.sessionType === 'multisig' ||
        (this.selectedSignMethod === "extension" &&
          this.modalContext.isExtensionAccount)
      )
    },
    prettyIncludedHeight() {
      return prettyInt(this.includedHeight)
    }
  },
  watch: {
    // if there is only one sign method, preselect it
    signMethods: {
      immediate: true,
      handler(signMethods) {
        if (signMethods.length) {
          this.selectedSignMethod = signMethods[0].value
        }
      }
    },
    actionInProgress(isOpen) {
      if (!isOpen) {
        this.close()
      }
    },
    sessionType() {
      if (
        this.session.sessionType === SIGN_METHODS.MATHWALLET &&
        !processMathWalletMessage
      ) {
        getMathWalletUtils().then(module => {
          processMathWalletMessage = module.processMathWalletMessage
        })
      } else if (
        this.session.sessionType === SIGN_METHODS.ONEWALLET &&
        !processOneWalletMessage
      ) {
        getOneWalletUtils().then(module => {
          processOneWalletMessage = module.processOneWalletMessage
        })
      } else if(this.session.sessionType === SIGN_METHODS.METAMASK &&
              !processMetaMaskMessage) {
        getMetamaskUtils().then()(module => {
          processMetaMaskMessage = module.processMetaMaskMessage
        })
      } else if(this.session.sessionType === SIGN_METHODS.MULTISIG &&
              !processMultisigMessage) {
        getMultisigUtils().then()(module => {
          processMultisigMessage = module.processMultisigMessage
        })
      }
    }
  },
  updated: function() {
    this.actionManager.setContext(this.modalContext || {})
    if (this.title === "Claim Rewards" && this.$refs.next) {
      this.$refs.next.$el.focus()
    }

    if (this.step === "fees" && this.$refs.send) {
      this.$refs.send.$el.focus()
    }
  },
  mounted() {
    if (processMathWalletMessage) {
      return
    }

    const sessionType = this.session.sessionType
    if (sessionType === SIGN_METHODS.MATHWALLET) {
      getMathWalletUtils().then(module => {
        processMathWalletMessage = module.processMathWalletMessage
      })
      return
    }

    if (sessionType === SIGN_METHODS.ONEWALLET) {
      getOneWalletUtils().then(module => {
        processOneWalletMessage = module.processOneWalletMessage
      })
    }

    if (sessionType === SIGN_METHODS.METAMASK) {
      getMetaMaskUtils().then(module => {
        processMetaMaskMessage = module.processMetaMaskMessage
      })
      return;
    }

    if (sessionType === SIGN_METHODS.MULTISIG) {
      getMultisigUtils().then(module => {
        processMultisigMessage = module.processMultisigMessage
      })
      return;
    }
  },
  methods: {
    prettyTransactionHash(txHash) {
      return txHash ? transactionToShortString(txHash) : ""
    },
    linkToTransaction(txHash) {
      return this.networkConfig
        ? this.networkConfig.explorer_url +
            (this.transactionData.type === "MsgSend" || this.session.sessionType === SIGN_METHODS.METAMASK || this.session.sessionType === SIGN_METHODS.MULTISIG || this.session.sessionType === SIGN_METHODS.LEDGER
              ? "/tx/"
              : "/staking-tx/") +
            txHash
        : ""
    },
    confirmModalOpen() {
      let confirmResult = false
      if (this.session.actionInProgress) {
        confirmResult = window.confirm(
          "You are in the middle of creating a transaction already. Are you sure you want to cancel this action?"
        )
        if (confirmResult) {
          this.close()
        }
      }
    },
    open() {
      console.log(this.title.toLowerCase(), "open")
      window.ga("send", "event", this.title.toLowerCase(), "open", "modal")

      this.confirmModalOpen()

      if (this.session.actionInProgress) {
        return
      }

      this.$store.commit(`setModalId`, this.transactionData.type)
      this.gasPrice = config.default_gas_price.toFixed(9)

      // this.trackEvent(`event`, `modal`, this.title)
      // this.checkFeatureAvailable()
      // this.gasPrice = config.default_gas_price.toFixed(9)
    },
    close() {
      console.log(this.title.toLowerCase(), "close")
      window.ga("send", "event", this.title.toLowerCase(), "close", "modal")

      if (this.session.actionInProgress) {
        closeExtensionSession()
        this.$store.commit(`setActionInProgress`, false)
      }
      this.submissionError = null
      this.password = null
      this.step = defaultStep
      this.$store.commit(`setModalId`, null)
      this.sending = false
      this.includedHeight = undefined

      // reset form
      this.$v.$reset()
      this.$emit(`close`)
    },
    trackEvent(...args) {
      track(...args)
    },
    goToSession() {
      if(!this.isWidget) {
        this.close()
        this.$router.push(`/welcome`)
      } else {
        this.signIn();
      }
    },
    async signIn() {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        })

        if (accounts.length === 0) {
          return
        }

        this.$store.dispatch("signIn", {
          sessionType: sessionType.METAMASK,
          address: toBech32(accounts[0])
        })

        // this.$router.push(`/`)
      } catch (ex) {
        console.error("### ex", ex)
      }
    },
    isValidInput(property) {
      this.$v[property].$touch()

      return !this.$v[property].$invalid
    },
    previousStep() {
      switch (this.step) {
        case signStep:
          this.step = feeStep
          break
        case feeStep:
          this.step = defaultStep
          break
      }
    },
    async validateChangeStep() {
      if (this.disabled) return
      // An ActionModal is only the prototype of a parent modal

      console.log(this.title.toLowerCase(), this.step.toLowerCase())
      window.ga(
        "send",
        "event",
        this.title.toLowerCase(),
        this.step.toLowerCase(),
        "modal"
      )

      switch (this.step) {
        case defaultStep:
          if (!this.isValidChildForm) {
            return
          }
          this.sending = true
          await this.simulate() // simulate to get gas estimation
          this.sending = false
          return
        case feeStep:
          if (!this.isValidInput(`gasPrice`)) {
            return
          }
          if (!this.isValidInput(`invoiceTotal`)) {
            return
          }
          //this.step = signStep

          if (!this.isValidInput(`password`)) {
            return
          }
          // submit transaction
          this.sending = true
          await this.submit()
          this.sending = false

          return
        case signStep:
          if (!this.isValidInput(`password`)) {
            return
          }
          // submit transaction
          this.sending = true
          await this.submit()
          this.sending = false
          return
        default:
          return
      }
    },
    async simulate() {
      const { type, memo, ...properties } = this.transactionData
      this.actionManager.setMessage(type, properties)
      try {
        this.gasEstimate = await this.actionManager.simulate(memo)

        if (Array.isArray(this.transactionData.validatorAddress)) {
          this.gasEstimate =
            this.gasEstimate * this.transactionData.validatorAddress.length
        }

        this.step = feeStep
      } catch ({ message }) {
        this.submissionError = `${this.submissionErrorPrefix}: ${message}.`
      }

      // limit fees to the maximum the user has
      // if (this.invoiceTotal > this.balanceInAtoms) {
      //   this.gasPrice =
      //     (this.invoiceTotal - Number(this.amount)) / this.gasEstimate
      // }
    },
    async submit() {
      this.submissionError = null
      // this.trackEvent(`event`, `submit`, this.title, this.selectedSignMethod)

      const { type, memo, ...transactionProperties } = this.transactionData

      const gasPrice = {
        amount: this.gasPrice,
        denom: this.bondDenom
      }

      const feeProperties = {
        gasEstimate: this.gasEstimate,
        gasPrice: gasPrice,
        submitType: this.selectedSignMethod,
        password: this.password
      }

      const sendData = {
        ...this.transactionData,
        fee: feeProperties,
        gasPrice: this.gasPrice,
        delegatorAddress: this.wallet.address
      }

      try {
        let sendResponse

        if (this.selectedSignMethod === SIGN_METHODS.LEDGER) {
          sendResponse = await this.$store.dispatch(
            `signTransactionLeger`,
            sendData
          )
        } else if (this.selectedSignMethod === SIGN_METHODS.MATHWALLET) {
          this.$store.commit(`setActionInProgress`, true)

          sendResponse = await processMathWalletMessage(
            sendData,
            this.networkConfig,
            this.wallet.address
          )
        } else if (this.selectedSignMethod === SIGN_METHODS.ONEWALLET) {
          this.$store.commit(`setActionInProgress`, true)

          sendResponse = await processOneWalletMessage(
            sendData,
            this.networkConfig,
            this.wallet.address
          )
        } else if (this.selectedSignMethod === SIGN_METHODS.METAMASK) {
          this.$store.commit(`setActionInProgress`, true)

          sendResponse = await processMetaMaskMessage(
            sendData,
            this.networkConfig,
            this.wallet.address
          )
        } else if (this.selectedSignMethod === SIGN_METHODS.MULTISIG) {
          this.$store.commit(`setActionInProgress`, true)

          sendResponse = await processMultisigMessage(
            sendData,
            this.networkConfig,
            this.wallet.address
          )
        } else {
          this.$store.commit(`setActionInProgress`, true)

          setTimeout(() => openExtensionPopup(this.session.extensionId), 100)

          sendResponse = await this.actionManager.send(
            memo,
            feeProperties,
            this.networkConfig
          )
        }

        const { included, hash } = sendResponse

        this.txConfirmResult = { txhash: hash }

        await this.waitForInclusion(included)

        this.onTxIncluded(type, transactionProperties, feeProperties)

        // close modal in 2 sec after success tx
        if(!this.txConfirmResult.error) {
          setTimeout(() => this.close(), 10000)
        }
      } catch (e) {
        // log.error(e);
        console.log("[submit] error", e.message)

        this.onSendingFailed(e.message)
        this.txConfirmResult = null
        // this.session.actionInProgress.close()
        this.close()
      }
    },
    async waitForInclusion(includedFn) {
      this.step = inclusionStep

      const res = await includedFn()

      this.txConfirmResult = res

      this.$store.dispatch(`queryWalletBalances`)
      this.$store.dispatch(`resetSelectedValidators`)
      this.$store
        .dispatch(`getDelegates`)
        .then(() => this.$store.dispatch(`getRewardsFromMyValidators`))
    },
    onTxIncluded(txType, transactionProperties, feeProperties) {
      this.step = successStep
      // this.trackEvent(
      //   `event`,
      //   `successful-submit`,
      //   this.title,
      //   this.selectedSignMethod
      // )
      window.ga("send", "event", this.title.toLowerCase(), "success", "modal")

      this.$store.dispatch(`post${txType}`, {
        txProps: transactionProperties,
        txMeta: feeProperties
      })
    },
    onSendingFailed(message) {
      this.step = signStep
      this.submissionError = `${this.submissionErrorPrefix}: ${message}.`
      // this.trackEvent(`event`, `failed-submit`, this.title, message)
      window.ga("send", "event", this.title.toLowerCase(), "failed", "modal")
    },
    async checkFeatureAvailable() {
      return true // Temp
      // /* istanbul ignore next */
      // if (this.network === "testnet") {
      //   this.featureAvailable = true
      //   return
      // }
      //
      // const action = `action_${this.title.toLowerCase().replace(" ", "_")}`
      // const { data } = await this.$apollo.query({
      //   query: NetworkCapability(this.network, action)
      // })
      //
      // this.featureAvailable = NetworkCapabilityResult(data)
    }
  },
  validations() {
    const validations = {
      password: {
        required: requiredIf(
          () =>
            this.selectedSignMethod === SIGN_METHODS.LOCAL &&
            this.step === signStep
        )
      },
      gasPrice: {
        required: requiredIf(
          () => this.step === feeStep && this.session.experimentalMode
        ),
        // we don't use SMALLEST as min gas price because it can be a fraction of uatom
        // min is 0 because we support sending 0 fees
        between: between(0, this.balanceInAtoms)
      },
      invoiceTotal: { between: between(0, this.balanceInAtoms) }
    }

    return validations
  }
}
</script>

<style lang="scss">
.action-modal-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.5;
  z-index: 1;
}

.action-modal {
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  height: auto;
  max-height: 600px;
  overflow: hidden;
  overflow-y: scroll;
  border-radius: var(--unit);
  border: 1px solid var(--light2);
  background: var(--white);
  box-shadow: 0 0 var(--unit) rgba(0, 0, 0, 0.25);
  padding: var(--unit);
  z-index: var(--z-modal);

  &::-webkit-scrollbar {
    width: 0;
  }

  > #closeBtn {
    position: absolute;
    top: 0;
    right: 0;
    padding: var(--unit);
    height: 48px;
    width: 48px;
    > i {
      font-size: 16px;
    }
  }
  .material-icons {
    font-size: 16px;
  }

  > .action-modal-header {
    text-align: center;
    > .step--container {
      margin-top: var(--unit);
    }
  }
  > .action-modal-form {
    .form-message {
      font-size: 12px;
    }
  }

  .table-invoice,
  .tm-hardware-state {
    margin-bottom: var(--unit);
  }

  .action-modal-group.tm-form-group,
  .action-modal-form-group.tm-form-group {
    padding: 0;
    margin-bottom: var(--unit);
  }
  .action-modal-group.tm-form-group:last-child {
    margin-bottom: 0;
  }

  .action-modal-title {
    font-weight: bold;
  }

  .action-modal-icon.action-modal-close {
    cursor: pointer;
  }
}
/*
.action-modal-header {
  align-items: center;
  flex-direction: column;
  text-align: center;
  display: flex;
  padding-bottom: 2rem;
}

.action-modal-title {
  flex: 1;
  font-size: var(--h2);
  font-weight: 400;
  color: var(--txt-header);
  padding-bottom: 2rem;
}

.action-modal-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-modal-icon i {
  font-size: var(--lg);
}

.action-modal-icon.action-modal-prev {
  cursor: pointer;
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.action-modal-icon.action-modal-close {
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.action-modal-icon.action-modal-close:hover i {
  color: var(--link);
}

.action-modal-form .tm-form-group {
  display: block;
  padding: 1rem 0;
}

.action-modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 1.5rem 0 1rem;
  flex-grow: 1;
  align-self: flex-end;
  flex-direction: column;
}

.action-modal-footer .tm-form-group {
  padding: 0;
}

.submission-error {
  position: absolute;
  left: 1.5rem;
  bottom: 1rem;
}

.form-message {
  font-weight: 500;
  font-style: italic;
  color: var(--dim);
  display: block;
  padding: 0.5rem 0 0.5rem 1rem;
  font-size: 14px;
}

.slide-fade-enter-active {
  transition: all 0.1s ease;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(2rem);
  opacity: 0;
}

.tm-form-group__field {
  position: relative;
}

#send-modal .tm-data-msg {
  margin: 2rem 0 2rem 0;
} */
/*
@media screen and (max-width: 576px) {
  #send-modal {
    text-align: center;
  }

  .tm-data-msg__icon {
    margin-right: 0;
  }
}

@media screen and (max-width: 767px) {
  .tm-form-group__field {
    width: 100%;
  }
}

@media screen and (max-width: 1023px) {
  .row {
    flex-direction: column;
  }

  .action-modal {
    right: 0;
    top: 0;
  }
} */
</style>