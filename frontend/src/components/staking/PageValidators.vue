<template>
  <PageContainer
    :managed="true"
    :data-empty="validators && validators.length === 0"
    title="Validators"
  >
    <template slot="managed-body">
      <div class="networkInfo">
        <div class="networkInfo-column">
          <div id="validators_median_stake" class="networkInfo-item">
            <h4 v-tooltip.top="tooltips.v_list.effective_median_stake">Effective Median Stake:</h4>
            {{ networkInfo.effective_median_stake | ones | zeroDecimals }} ONE
          </div>
          <div id="validators_total_stake" class="networkInfo-item">
            <h4 v-tooltip.top="tooltips.v_list.total_stake">Total Stake:</h4>
            {{ networkInfo["total-staking"] | ones | zeroDecimals }} ONE
          </div>
          <div class="networkInfo-item">
            <h4 v-tooltip.top="tooltips.v_list.current_block_number">Current Block Height:</h4>
            <a :href="linkToTransaction" target="_blank">#{{ networkInfo.current_block_number }}</a>
          </div>
        </div>
      </div>
      <div v-if="isNetworkInfoLoading" class="validatorTable">
        <div class="filterOptions">
          <TmField v-model="searchTerm" class="searchField" placeholder="Search" />
          <div class="toggles">
            <TmBtn
              value="Delegate"
              v-tooltip.top="tooltips.v_list.multi_delegate"
              class="btn-radio secondary"
              @click.native="multidelgate"
              v-bind:disabled="selectedItem.length === 0"
            />
            <TmBtn
              value="Elected"
              v-tooltip.top="tooltips.v_list.elected"
              :number="totalActive"
              class="btn-radio secondary"
              :type="activeOnly ? `active` : `secondary`"
              @click.native="activeOnly = true"
            />
            <TmBtn
              value="All"
              v-tooltip.top="tooltips.v_list.all"
              :number="total"
              class="btn-radio secondary"
              :type="!activeOnly ? `active` : `secondary`"
              @click.native="activeOnly = false"
            />
          </div>
        </div>
        <TableValidators
          :data="validators"
          :active-only="activeOnly"
          :search="searchTerm.trim()"
          show-on-mobile="expectedReturns"
        />
        <div
          v-if="validators && validators.length === 0 && searchTerm"
          class="no-results"
        >No results for these search terms</div>
      </div>
      <TmDataLoading v-if="isLoading" />

      <MultidelegationModal
        ref="multidelegationModal"
        :from-options="delegationTargetOptions()"
        :to="selectedValidators"
        :denom="bondDenom"
        :minAmount="1000"
      />
    </template>
  </PageContainer>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import TableValidators from "staking/TableValidators"
import PageContainer from "common/PageContainer"
import TmField from "common/TmField"
import TmBtn from "common/TmBtn"
import { formatBech32 } from "src/filters"
import TmDataLoading from "common/TmDataLoading"
import { transactionToShortString } from "src/scripts/transaction-utils"
import { ones, shortDecimals, zeroDecimals, twoDecimals } from "scripts/num"
import tooltips from "src/components/tooltips"
import { EventBus } from "src/components/event-bus.js"
import PercentageChange from "./components/PercentageChange"
import isEmpty from "lodash.isempty"
import MultidelegationModal from "src/ActionModal/components/MultidelegationModal"

export default {
  name: `tab-validators`,
  components: {
    MultidelegationModal,
    TableValidators,
    PageContainer,
    TmField,
    TmBtn,
    TmDataLoading
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
    activeOnly: true,
    selectedItem: []
  }),
  computed: {
    ...mapState([`session`, `delegates`]),
    ...mapGetters([`bondDenom`, `committedDelegations`, `liquidAtoms`]),
    ...mapState({ network: state => state.connection.network }),
    ...mapState({ networkConfig: state => state.connection.networkConfig }),
    ...mapState({ networkInfo: state => state.connection.networkInfo }),
    ...mapState({
      isNetworkInfoLoading: state => state.connection.isNetworkInfoLoading
    }),
    ...mapState({
      allValidators: state =>
        state.validators.loaded ? state.validators.validators : [],
      total: state => state.validators.total,
      totalActive: state => state.validators.totalActive
    }),
    ...mapState({ isLoading: state => state.validators.loading }),
    ...mapGetters([`bondDenom`]),
    activeValidators: state =>
      state.allValidators.filter(v => v.active === true),
    validators: state => {
      return state.allValidators
    },
    prettyTransactionHash() {
      return this.networkInfo.current_block_hash
        ? transactionToShortString(this.networkInfo.current_block_hash)
        : ""
    },
    linkToTransaction() {
      // const blocksUrl = this.networkConfig.explorer_url
      //   ? this.networkConfig.explorer_url.replace("tx", "block")
      //   : ""
      const blocksUrl = `https://explorer.os.hmny.io/#/block/`
      return blocksUrl + this.networkInfo.current_block_hash
    },
    selectedValidators() {
      let selected = []
      this.selectedItem.forEach((item, index) => {
        selected.push({
          name: this.validators[item.id].name,
          address: this.validators[item.id].address
        })
      })
      return selected
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
  },
  async mounted() {
    // this.$store.dispatch(`getValidators`)
    this.$store.dispatch("getDelegates")
    EventBus.$on("validator-selected", (id, checked) => {
      const matchedID = this.selectedItem.findIndex(item => item.id === id)
      if (matchedID >= 0) {
        this.selectedItem.splice(matchedID, 1)
      }
      if (checked) this.selectedItem.push({ id, checked })
      this.selectedItem.sort((a, b) => a.id - b.id)
    })
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
  .validatorTable {
    margin-left: calc(-2 * var(--unit)) !important;
    width: calc(100vw - 1px);
    border-left: none !important;
    border-right: none !important;
    border-radius: 0 !important;
  }

  .filterOptions {
    width: 100vw;
    height: 48px;
    .toggles {
      text-align: right;
      margin-right: 8px;
      transform: scale(0.8);
      width: 100vw;
    }
  }
}
</style>
