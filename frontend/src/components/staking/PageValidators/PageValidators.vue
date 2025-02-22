
<template>
  <PageContainer :managed="true" :epoch="true" title="Validators">
    <template slot="managed-body">
      <div class="networkInfo">
        <div class="networkInfo-column">
          <div id="validators_median_stake" class="networkInfo-item">
            <h4 v-tooltip.top="tooltips.v_list.effective_median_stake">
              Effective Median Stake:
            </h4>
            {{ networkInfo.effective_median_stake | ones | zeroDecimals }} ONE
          </div>
          <div id="validators_total_stake" class="networkInfo-item">
            <h4 v-tooltip.top="tooltips.v_list.total_stake">
              Total Network Stake:
            </h4>
            {{ networkInfo["total-staking"] | ones | zeroDecimals }} ONE
          </div>
          <div class="networkInfo-item">
            <h4 v-tooltip.top="tooltips.v_list.current_block_number">
              Current Block Height:
            </h4>
            <a :href="linkToTransaction" target="_blank"
              >#{{ networkInfo.current_block_number }}</a
            >
          </div>
        </div>
      </div>
      <div class="validatorTable">
        <div v-if="total" class="filterOptions">
          <TmField
            v-model="searchTerm"
            class="searchField"
            placeholder="Search"
          />
          <div class="toggles">
            <TmBtn
              v-if="isMultiDelegationSupport"
              v-tooltip.top="tooltips.v_list.multi_delegate"
              :value="
                selectedValidators.length
                  ? `Delegate (${selectedValidators.length})`
                  : 'Delegate'
              "
              class="btn-radio secondary"
              :disabled="selectedValidators.length === 0"
              @click.native="multidelgate"
            />
            <TmBtn
              v-tooltip.top="tooltips.v_list.elected"
              value="Elected"
              :number="totalActive"
              class="btn-radio secondary"
              :type="activeOnly ? `active` : `secondary`"
              @click.native="activeOnly = true"
            />
            <TmBtn
              v-tooltip.top="tooltips.v_list.all"
              value="All"
              :number="total"
              class="btn-radio secondary"
              :type="!activeOnly ? `active` : `secondary`"
              @click.native="activeOnly = false"
            />
          </div>
        </div>
        <TableValidators
          :active-only="activeOnly"
          :search="searchTerm.trim()"
          show-on-mobile="expectedReturns"
        />
      </div>

      <MultidelegationModal
        ref="multidelegationModal"
        :from-options="delegationTargetOptions()"
        :to="selectedValidators"
        :denom="bondDenom"
        :min-amount="
          100 * selectedValidators.length
        "
      />
      <TmDataLoading v-if="isLoading || isNetworkFetching" />
    </template>
  </PageContainer>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import TableValidators from "./TableValidators"
import PageContainer from "common/PageContainer"
import TmField from "common/TmField"
import TmBtn from "common/TmBtn"
import TmDataLoading from "common/TmDataLoading"
import { transactionToShortString } from "src/scripts/transaction-utils"
import { ones, shortDecimals, zeroDecimals, twoDecimals } from "scripts/num"
import tooltips from "src/components/tooltips"
import MultidelegationModal from "src/ActionModal/components/MultidelegationModal"
import { formatBech32 } from "../../../filters"
import isEmpty from "lodash.isempty"

export default {
  name: `tab-validators`,
  components: {
    TmDataLoading,
    MultidelegationModal,
    TableValidators,
    PageContainer,
    TmField,
    TmBtn
  },
  filters: {
    ones,
    shortDecimals,
    zeroDecimals,
    twoDecimals
  },
  data: () => ({
    tooltips,
    searchTerm: "",
    activeOnly: true
  }),
  computed: {
    ...mapState([`session`, `delegates`, `validators`]),
    ...mapGetters([`bondDenom`, `committedDelegations`, `liquidAtoms`]),
    ...mapState({
      isNetworkFetching: state => state.connection.isNetworkFetching
    }),
    ...mapState({ network: state => state.connection.network }),
    ...mapState({ networkConfig: state => state.connection.networkConfig }),
    ...mapState({ networkInfo: state => state.connection.networkInfo }),
    ...mapState({
      isNetworkInfoLoading: state => !!state.connection.chainTitle,
      // chainTitle: state => state.connection.chainTitle,
      chainTitle: {
        get() {
          return this.$store.state.connection.chainTitle;
        },
        set(value) {
          this.$store.dispatch("setNetworkByChainTitle", value);
        }
      },
      isMultiDelegationSupport: state =>
        state.session.sessionType === "extension" &&
        state.session.extensionVersion >= 16
    }),
    ...mapState({
      total: state => state.validators.total,
      totalActive: state => state.validators.totalActive,
      selectedValidators: state => state.validators.selected
    }),
    ...mapState({ isLoading: state => state.validators.loading }),
    prettyTransactionHash() {
      return this.networkInfo.current_block_hash
        ? transactionToShortString(this.networkInfo.current_block_hash)
        : ""
    },
    linkToTransaction() {
      const blocksUrl = this.networkConfig.explorer_url + "/block/"
      return blocksUrl + this.networkInfo.current_block_hash
    }
  },
  mounted() {
    // this.chainTitle = this.$route.params.chaintitle
    if (
      !this.$store.dispatch(
        "setNetworkByChainTitle",
        this.$route.params.chaintitle
      )
    ) {
      this.$router.replace("/validators")
      this.$router.go(0)
    }
  },
  methods: {
    multidelgate() {
      window.ga("send", "pageview", "/multidelegate")
      window.ga("send", "event", "multidelegate", "open", "modal")
      this.$refs.multidelegationModal.open()
    },
    delegationTargetOptions(
      { session, liquidAtoms, committedDelegations, $route, delegates } = this
    ) {
      if (!session.signedIn) return []

      //- First option should always be your wallet (i.e normal delegation)
      const myWallet = [
        {
          address: session.address,
          maximum: Math.floor(liquidAtoms),
          key: `My Wallet - ${formatBech32(session.address, false, 20)}`,
          value: 0
        }
      ]
      const bondedValidators = Object.keys(committedDelegations)
      if (isEmpty(bondedValidators)) {
        return myWallet
      }
      //- The rest of the options are from your other bonded validators
      //- We skip the option of redelegating to the same address
      const redelegationOptions = bondedValidators
        .filter(address => address != $route.params.validator)
        .reduce((validators, address) => {
          const delegate = delegates.delegates.find(function(validator) {
            return validator.operator_address === address
          })

          const name = delegate.validator_info && delegate.validator_info.name

          return validators.concat({
            address: address,
            maximum: Math.floor(committedDelegations[address]),
            key: `${name} - ${formatBech32(
              delegate.delegator_address,
              false,
              20
            )}`,
            value: validators.length + 1
          })
        }, [])
      return myWallet.concat(redelegationOptions)
    }
  }
}
</script>

<style lang="scss">
.validatorTable,
.networkInfo {
  background: white;
  margin: var(--double) 0;
  border-radius: var(--unit);
  border: 1px solid var(--light2);
}
.validatorTable {
  overflow: hidden;
  padding: var(--unit);
}

.networkInfo {
  &-column {
    display: flex;
  }

  &-item {
    padding: var(--unit);
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
  &-item:not(:last-child) {
    border-right: 1px solid var(--light2);
  }

  h4 {
    color: var(--gray);
    font-size: 16px;
  }
}

.filterOptions {
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  .toggles {
    button {
      background: white;
      border: 1px solid var(--light2);
      border-radius: var(--double) !important;

      &.secondary {
        background: white;
        color: var(--gray);
      }
      &.active {
        background: var(--blue);
        color: white;
      }
      &.number-circle {
        margin-right: -var(--unit);
      }
    }
    button:first-child {
      margin-right: var(--unit);
    }
  }

  label {
    cursor: pointer;
  }

  input.searchField {
    width: 200px;
    padding: 0 var(--unit);
    border: 1px solid var(--light2);
    border-radius: var(--double) !important;
    color: var(--gray);
  }
}

.no-results {
  text-align: center;
  margin: 3rem;
  color: var(--dim);
}
@media screen and (max-width: 414px) {
  .networkInfo {
    width: 100vw;
    margin-left: -2rem;
  }

  .validatorTable {
    margin-left: calc(-2 * var(--unit)) !important;
    width: calc(100vw - 1px);
    border-left: none !important;
    border-right: none !important;
    border-radius: 0 !important;
  }

  .filterOptions {
    width: 125%;
    height: 48px;
    transform: scale(0.8);
    transform-origin: left;
    .toggles {
      text-align: right;
      width: 100vw;
    }
  }
}
</style>
