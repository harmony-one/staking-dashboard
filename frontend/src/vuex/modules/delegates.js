import BN from "bignumber.js"
import b32 from "scripts/b32"
import Vue from "vue"

const mockDelegates = [
  {
    operator_address: "cosmosvaloper1tpxs9gf9gg74mdu7ya4gxhr5560jsxnp4zq979",
    consensus_pubkey:
      "cosmosvalconspub1zcjduepqm2ydwqfvaa5nssm5dhwfpkpjgxu62fxtsv67x55tzfaey9gh3mdqckj0c2",
    jailed: false,
    status: 1,
    tokens: "898939550",
    delegator_shares: "898939550.000000000000000000",
    description: {
      moniker: "Cosmos-Validator.com",
      identity: "B10E3A8255F33866",
      website: "http://www.cosmos-validator.com/",
      details: "Your First Expedition to The Moon. Buckle Up"
    },
    unbonding_height: "2354254",
    unbonding_time: "2019-11-18T14:25:39.071451483Z",
    commission: {
      rate: "0.090000000000000000",
      max_rate: "0.200000000000000000",
      max_change_rate: "0.010000000000000000",
      update_time: "2019-08-23T03:30:00.197596374Z"
    },
    min_self_delegation: "1"
  },
  {
    operator_address: "cosmosvaloper1tflk30mq5vgqjdly92kkhhq3raev2hnz6eete3",
    consensus_pubkey:
      "cosmosvalconspub1zcjduepqwcvy8hyw2phdp080ggj7prxv972rvqc9gwyjnl0uwf7uxn63s8vqdctdcw",
    jailed: false,
    status: 1,
    tokens: "39757908900",
    delegator_shares: "39757908900.000000000000000000",
    description: {
      moniker: "Everstake",
      identity: "",
      website: "https://everstake.one",
      details:
        "Reliable and experienced staking service provider from Ukraine. Visit our website for more details."
    },
    unbonding_height: "2280710",
    unbonding_time: "2019-11-12T15:35:32.472526649Z",
    commission: {
      rate: "0.030000000000000000",
      max_rate: "0.200000000000000000",
      max_change_rate: "0.010000000000000000",
      update_time: "2019-07-14T19:56:46.186760169Z"
    },
    min_self_delegation: "1"
  },
  {
    operator_address: "cosmosvaloper16ddmnhsxkjh6xt4n2xk36d56pndvjxcn6gffpm",
    consensus_pubkey:
      "cosmosvalconspub1zcjduepqzygcsfu4qzqs6uzh97att2xmrq840gkv9tmg7vl60mh2l2tptuuszettz0",
    jailed: false,
    status: 1,
    tokens: "3000000",
    delegator_shares: "3000000.000000000000000000",
    description: {
      moniker: "cosmosgbt",
      identity: "",
      website: "",
      details: ""
    },
    unbonding_height: "2225401",
    unbonding_time: "2019-11-08T04:39:53.062405594Z",
    commission: {
      rate: "0.100000000000000000",
      max_rate: "0.500000000000000000",
      max_change_rate: "0.100000000000000000",
      update_time: "2019-10-17T19:12:23.174697733Z"
    },
    min_self_delegation: "1"
  },
  {
    operator_address: "cosmosvaloper1uyt0yuv7cz7ppwefl9ths336ln7ysvg2jlj76t",
    consensus_pubkey:
      "cosmosvalconspub1zcjduepqvfykpu4uvqtf4kl8cwgjy9yw2tuxgarztv7j3qqleyke5evejamslpxzjy",
    jailed: false,
    status: 1,
    tokens: "2290052155",
    delegator_shares: "2290052155.000000000000000000",
    description: {
      moniker: "Sanka Network",
      identity: "83D5F763152084C9",
      website: "https://www.sanka.network",
      details:
        "Sanka Network is a leading validator in Asia market, who has been maintaining robust and secure infrastructure for staking blockchain with strong enthusiasm to achieve healthy governance and economy in the ecosystem. Delegate with us for your future earnings."
    },
    unbonding_height: "2217345",
    unbonding_time: "2019-11-07T13:06:06.9848847Z",
    commission: {
      rate: "0.100000000000000000",
      max_rate: "1.000000000000000000",
      max_change_rate: "0.030000000000000000",
      update_time: "2019-10-05T14:45:51.572289075Z"
    },
    min_self_delegation: "1"
  }
]

export default ({ node }) => {
  const emptyState = {
    delegates: [],
    loading: false,
    loaded: false,
    error: null,
    signingInfos: {},
    selfBond: {}
  }
  const state = JSON.parse(JSON.stringify(emptyState))

  // TODO Temp
  // Object.assign(state, mockState)

  const mutations = {
    setDelegateLoading(state, loading) {
      state.loading = loading
    },
    setDelegates(state, validators) {
      validators.forEach(validator => {
        upsertValidator(state, validator)
      })
      // filter not existing once out
      state.delegates = state.delegates.filter(validator =>
        validators.find(
          ({ operator_address }) =>
            validator.operator_address === operator_address
        )
      )
    },
    setSelfBond(
      state,
      {
        validator: { operator_address },
        ratio
      }
    ) {
      Vue.set(state.selfBond, operator_address, ratio)
    }
  }

  const actions = {
    reconnected({ state, dispatch }) {
      if (state.loading) {
        dispatch(`getDelegates`)
      }
    },

    async getDelegates({ state, commit, rootState }) {
      commit(`setDelegateLoading`, true)

      if (!rootState.connection.connected) return

      try {
        // let validators = await node.get.validators()

        // Load delegates (validators?)
        const validators = mockDelegates;

        state.error = null
        state.loading = false
        state.loaded = true

        commit(`setDelegates`, validators)
        commit(`setDelegateLoading`, false)

        return validators
      } catch (error) {
        commit(`notifyError`, {
          title: `Error fetching validators`,
          body: error.message
        })
        state.error = error
        return []
      }
    },
    async getSelfBond({ commit, state }, validator) {
      if (state.selfBond[validator.operator_address])
        return state.selfBond[validator.operator_address]
      else {
        const hexAddr = b32.decode(validator.operator_address)
        const operatorCosmosAddr = b32.encode(hexAddr, `cosmos`)
        const delegations = await node.get.delegations(operatorCosmosAddr)
        const delegation = delegations.filter(
          ({ validator_address }) =>
            validator.operator_address === validator_address
        )[0]
        const ratio = new BN(delegation.shares).div(validator.delegator_shares)

        commit(`setSelfBond`, { validator, ratio })
        return ratio
      }
    }
  }

  // TODO Temp remove
  const mockedActions = Object.keys(actions).reduce((acc, key) => {
    acc[key] = () => {}
    return acc
  }, {})

  return {
    state,
    mutations,
    actions: mockedActions
  }
}

// incrementally add the validator to the list or update it in place
// "upsert": (computing, databases) An operation that inserts rows into a database table if they do not already exist, or updates them if they do.
function upsertValidator(state, validator) {
  const oldValidatorIndex = state.delegates.findIndex(
    oldValidator => oldValidator.operator_address === validator.operator_address
  )
  if (oldValidatorIndex === -1) {
    state.delegates.push(validator)
    return
  }
  Vue.set(
    state.delegates,
    oldValidatorIndex,
    Object.assign({}, state.delegates[oldValidatorIndex], validator)
  )
}
