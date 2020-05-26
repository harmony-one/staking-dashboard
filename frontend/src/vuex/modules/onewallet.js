export default () => {
  const state = {
    enabled: false,
    account: []
  }
  const mutations = {
    setOneWalletAvailable(state) {
      state.enabled = true
    },
    setOneWalletAccount(state, account) {
      state.account = account
    }
  }

  const actions = {}
  return {
    state,
    mutations,
    actions
  }
}
