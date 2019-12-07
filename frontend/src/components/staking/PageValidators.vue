<template>
  <PageContainer
    :managed="true"
    :data-empty="validators && validators.length === 0"
    hide-header
  >
    <template slot="managed-body">
      <div class="networkInfo">
        <div class="item">
          <h4>Effective median stake:</h4> {{ networkInfo.effective_median_stake }} ONE
        </div>
        <div class="item">
          <h4>Current block number:</h4>
          <a :href="linkToTransaction" target="_blank">
            #{{ networkInfo.current_block_number }}
          </a>
        </div>
      </div>
      <div class="filterOptions">
        <TmField
          v-model="searchTerm"
          class="searchField"
          placeholder="Search"
        />
        <div class="toggles">
          <TmBtn
            value="All"
            :number="allValidators.length"
            class="btn-radio secondary"
            :type="!activeOnly ? `active` : `secondary`"
            @click.native="activeOnly = false"
          />
          <TmBtn
            value="Active"
            :number="activeValidators.length"
            class="btn-radio secondary"
            :type="activeOnly ? `active` : `secondary`"
            @click.native="activeOnly = true"
          />
        </div>
      </div>
      <TableValidators
        :validators="validators"
        show-on-mobile="expectedReturns"
      />
      <div
        v-if="validators && validators.length === 0 && searchTerm"
        class="no-results"
      >
        No results for these search terms
      </div>
    </template>
  </PageContainer>
</template>

<script>
import { mapState } from "vuex"
import TableValidators from "staking/TableValidators"
import PageContainer from "common/PageContainer"
import TmField from "common/TmField"
import TmBtn from "common/TmBtn"
import { transactionToShortString } from "src/scripts/transaction-utils"

export default {
  name: `tab-validators`,
  components: {
    TableValidators,
    PageContainer,
    TmField,
    TmBtn
  },
  data: () => ({
    searchTerm: "",
    activeOnly: false
  }),
  computed: {
    ...mapState({ network: state => state.connection.network }),
    ...mapState({ networkConfig: state => state.connection.networkConfig }),
    ...mapState({ networkInfo: state => state.connection.networkInfo }),
    ...mapState({ allValidators: state => state.validators.validators }),
    ...mapState({ activeValidators: state => state.validators.validators.filter(v => v.active === true) }),
    validators: state => {
      return state.allValidators
        .filter(
          v =>
            !state.searchTerm ||
            v.moniker.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
        .filter(v => !state.activeOnly || v.active === true)
    },
    prettyTransactionHash() {
      return this.networkInfo.current_block_hash
        ? transactionToShortString(this.networkInfo.current_block_hash)
        : ""
    },
    linkToTransaction() {
      return (
        this.networkConfig.explorer_url + this.networkInfo.current_block_hash
      )
    }
  },
  async mounted() {
    this.$store.dispatch(`getValidators`)
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
  margin: 0.5rem 1rem;
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
  margin: 1rem 0 1.8rem;
  justify-content: space-between;
  border-bottom: 1px solid var(--bc-dim);
  border-top: 1px solid var(--bc-dim);
  padding: 0.5rem 2rem;

  .item {
    // margin-right: 20px;
    align-items: center;
    justify-content: center;
    // text-align: center;
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
