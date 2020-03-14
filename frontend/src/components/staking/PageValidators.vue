<template>
  <PageContainer
    :managed="true"
    :data-empty="validators && validators.length === 0"
    title="Validators"
  >
    <template slot="managed-body">
      <div class="networkInfo">
        <div class="networkInfo-column">
          <div class="networkInfo-item">
            <h4>Effective median stake:</h4>
            {{ networkInfo.effective_median_stake | ones | zeroDecimals }} ONE
            <!-- <PercentageChange
              :amount="networkInfo.effective_median_stake_changed"
            /> -->
          </div>
          <div class="networkInfo-item">
            <h4>Total stake:</h4>
            {{ networkInfo["total-staking"] | ones | zeroDecimals }} ONE
            <!-- <PercentageChange :amount="networkInfo['total-staking-changed']" /> -->
          </div>
          <div class="networkInfo-item">
            <h4>Total seats:</h4>
            {{ networkInfo.total_seats }}
          </div>
          <div class="networkInfo-item">
            <h4>Total elected seats:</h4>
            {{ networkInfo.total_seats_used }}
          </div>
        </div>
        <div class="networkInfo-item">
          <h4>Current block number:</h4>
          <a :href="linkToTransaction" target="_blank">
            #{{ networkInfo.current_block_number }}
          </a>
        </div>
      </div>
      <div v-if="networkInfo.staking_distro" style="margin: 15px 0 30px 0;">
        <AllStakesChart :data="networkInfo.staking_distro" />
      </div>
      <div v-if="isNetworkInfoLoading">
        <div class="filterOptions">
          <TmField
            v-model="searchTerm"
            class="searchField"
            placeholder="Search"
          />
          <div class="toggles">
            <TmBtn
              value="All"
              :number="total"
              class="btn-radio secondary"
              :type="!activeOnly ? `active` : `secondary`"
              @click.native="activeOnly = false"
            />
            <TmBtn
              value="Elected"
              :number="totalActive"
              class="btn-radio secondary"
              :type="activeOnly ? `active` : `secondary`"
              @click.native="activeOnly = true"
            />
          </div>
        </div>
        <TableValidators
          :data="validators"
          :active-only="activeOnly"
          :search="searchTerm"
          show-on-mobile="expectedReturns"
        />
        <div
          v-if="validators && validators.length === 0 && searchTerm"
          class="no-results"
        >
          No results for these search terms
        </div>
      </div>
      <TmDataLoading v-if="isLoading" />
    </template>
  </PageContainer>
</template>

<script>
import { mapState } from "vuex"
import TableValidators from "staking/TableValidators"
import AllStakesChart from "staking/AllStakesChart"
import PageContainer from "common/PageContainer"
import TmField from "common/TmField"
import TmBtn from "common/TmBtn"
import TmDataLoading from "common/TmDataLoading"
import { transactionToShortString } from "src/scripts/transaction-utils"
import { ones, shortDecimals, zeroDecimals, twoDecimals } from "scripts/num"
import PercentageChange from "./components/PercentageChange"

export default {
  name: `tab-validators`,
  components: {
    TableValidators,
    PageContainer,
    TmField,
    TmBtn,
    TmDataLoading,
    AllStakesChart,
    PercentageChange
  },
  filters: {
    ones,
    shortDecimals,
    zeroDecimals,
    twoDecimals
  },
  data: () => ({
    searchTerm: "",
    activeOnly: true
  }),
  computed: {
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
      const blocksUrl = this.networkConfig.explorer_url
        ? this.networkConfig.explorer_url.replace("tx", "block")
        : ""

      return blocksUrl + this.networkInfo.current_block_hash
    }
  },
  async mounted() {
    // this.$store.dispatch(`getValidators`)
    this.$store.dispatch("getDelegates")

    console.log(this)
  }
}
</script>

<style lang="scss">
.filterOptions {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin: 0 1rem 20px 1rem !important;
  flex-direction: column-reverse;

  .toggles {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  label {
    cursor: pointer;
  }

  input {
    font-size: 14px;
  }
}

.filterOptions .btn-radio {
  border-radius: 0;
}

.filterOptions .btn-radio:last-child {
  border-radius: 0 0.5rem 0.5rem 0;
  margin-left: -1px;
}

.filterOptions .btn-radio:first-child {
  border-radius: 0.5rem 0 0 0.5rem;
  margin-right: -1px;
}

@media screen and (min-width: 768px) {
  .filterOptions {
    justify-content: space-between;
    flex-direction: row;
    margin: 0.5rem 2rem 1rem;

    .toggles {
      margin-bottom: 0;
    }

    input {
      max-width: 300px;
    }
  }
}

.no-results {
  text-align: center;
  margin: 3rem;
  color: var(--dim);
}

.networkInfo {
  display: flex;
  margin: 1rem 0 0;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.5rem 1rem;

  &-item {
    // margin-right: 20px;
    align-items: center;
    justify-content: center;
    // text-align: center;
  }

  &-column {
    display: flex;
    flex-direction: column;
    width: 50%;
    min-width: 230px;
  }

  h4 {
    font-size: 16px;
    display: inline-block;
  }
}

@media screen and (max-width: 500px) {
  .networkInfo {
    flex-direction: column;
  }
}
</style>
