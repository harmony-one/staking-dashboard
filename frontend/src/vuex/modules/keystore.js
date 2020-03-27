import { track } from "scripts/google-analytics"

export default () => {
  const state = {
    accounts: [],
    error: null,
    // import into state to be able to test easier
    externals: {
      track
    }
  }

  const mutations = {
    setAccounts(state, accounts) {
      state.accounts = accounts
    }
  }

  const actions = {
    async loadAccounts({ commit }) {
      commit(`setAccounts`, [])
    },
    async testLogin(store, { password, address }) {
      return null
    },
    async createSeed() {
      return null
    },
    async createKey({ dispatch, state }, { seedPhrase, password, name }) {
      return null
    }
  }

  return {
    state,
    mutations,
    actions
  }
}
