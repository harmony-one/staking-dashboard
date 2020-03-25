import { track, deanonymize, anonymize } from "scripts/google-analytics"
import config from "../../config"

function isWindowsPlatform() {
  return window.navigator.platform.match(/win32|win64/i) !== null
}

const mockSessionState = {
  // signedIn: true,
  // address: "cosmos1r5fknqx36n8vts9wlqufw08u3fh3qklhfwvhg5",
  // sessionType: "extension"
}

export default () => {
  const USER_PREFERENCES_KEY = `lunie_user_preferences`

  const state = {
    developmentMode: config.development, // can't be set in browser
    experimentalMode: config.development, // development mode, can be set from browser
    insecureMode: false, // show the local signer
    signedIn: false,
    sessionType: null, // local, explore, ledger, extension
    pauseHistory: false,
    history: [],
    address: null, // Current address
    addresses: [], // Array of previously used addresses
    errorCollection: false,
    analyticsCollection: false,
    cookiesAccepted: undefined,
    stateLoaded: false, // shows if the persisted state is already loaded. used to prevent overwriting the persisted state before it is loaded
    error: null,
    actionInProgress: false,
    modalId: false,
    modals: {
      error: { active: false },
      help: { active: false }
    },
    browserWithLedgerSupport:
      navigator.userAgent.includes(`Chrome`) ||
      navigator.userAgent.includes(`Opera`),
    windowsDevice: isWindowsPlatform(),

    // import into state to be able to test easier
    externals: {
      config,
      track,
      anonymize,
      deanonymize
    }
  }

  // Temp Mock data
  Object.assign(state, mockSessionState)

  const mutations = {
    setSignIn(state, hasSignedIn) {
      state.signedIn = hasSignedIn
    },
    setSessionType(state, sessionType) {
      state.sessionType = sessionType
    },
    setUserAddress(state, address) {
      state.address = address
    },
    setUserAddresses(state, addresses) {
      state.addresses = addresses
    },
    setExperimentalMode(state) {
      state.experimentalMode = true
    },
    setInsecureMode(state) {
      state.insecureMode = true
    },
    addHistory(state, path) {
      state.history.push(path)
      state.externals.track(`pageview`, {
        dl: path
      })
    },
    popHistory(state) {
      state.history.pop()
    },
    pauseHistory(state, paused) {
      state.pauseHistory = paused
    },
    setActionInProgress(state, modal) {
      state.actionInProgress = modal
    },
    setModalId(state, modalId) {
      state.modalId = modalId
    }
  }

  const actions = {
    async checkForPersistedSession({ dispatch }) {
      const session = localStorage.getItem(`session`)
      if (session) {
        const { address, sessionType } = JSON.parse(session)
        await dispatch(`signIn`, { address, sessionType })
      }
    },
    async checkForPersistedAddresses({ commit }) {
      const addresses = localStorage.getItem(`addresses`)
      if (addresses) {
        await commit(`setUserAddresses`, JSON.parse(addresses))
      }
    },
    async persistSession(store, { address, sessionType }) {
      localStorage.setItem(`session`, JSON.stringify({ address, sessionType }))
    },
    async persistAddresses(store, { addresses }) {
      localStorage.setItem(`addresses`, JSON.stringify(addresses))
    },
    async rememberAddress({ state, commit }, { address, sessionType }) {
      // Check if signin address was previously used
      const sessionExist = state.addresses.find(
        usedAddress => address === usedAddress.address
      )
      // Add signin address to addresses array if was not used previously
      if (!sessionExist) {
        state.addresses.push({
          address: address,
          type: sessionType
        })
        commit(`setUserAddresses`, state.addresses)
      }
    },
    async signIn(
      { state, commit, dispatch },
      { address, sessionType = `ledger` }
    ) {
      if (state.signedIn) {
        await dispatch(`resetSessionData`)
      }

      commit(`setSignIn`, true)
      commit(`setSessionType`, sessionType)
      commit(`setUserAddress`, address)

      await dispatch(`rememberAddress`, { address, sessionType })

      await dispatch(`initializeWallet`, { address })

      dispatch(`persistSession`, {
        address,
        sessionType
      })
      let addresses = state.addresses
      dispatch(`persistAddresses`, {
        addresses
      })

      // state.externals.track(`event`, `session`, `sign-in`, sessionType)
    },
    signOut({ state, commit, dispatch }) {
      // state.externals.track(`event`, `session`, `sign-out`)

      dispatch(`resetSessionData`)
      commit(`setSignIn`, false)
    },
    resetSessionData({ commit, state }) {
      state.history = ["/"]
      commit(`setUserAddress`, null)
      localStorage.removeItem(`session`)
    },
    loadLocalPreferences({ state, dispatch }) {
      const localPreferences = localStorage.getItem(USER_PREFERENCES_KEY)

      // don't track in development
      if (state.developmentMode) return

      if (!localPreferences) {
        state.cookiesAccepted = false
        return
      }
      state.cookiesAccepted = true

      const { errorCollection, analyticsCollection } = JSON.parse(
        localPreferences
      )
      if (state.errorCollection !== errorCollection)
        dispatch(`setErrorCollection`, errorCollection)
      if (state.analyticsCollection !== analyticsCollection)
        dispatch(`setAnalyticsCollection`, analyticsCollection)
    },
    storeLocalPreferences({ state }) {
      state.cookiesAccepted = true
      localStorage.setItem(
        USER_PREFERENCES_KEY,
        JSON.stringify({
          errorCollection: state.errorCollection,
          analyticsCollection: state.analyticsCollection
        })
      )
    },
    setErrorCollection({ state, dispatch }, enabled) {
      // don't track in development
      if (state.developmentMode) return

      state.errorCollection = enabled
      dispatch(`storeLocalPreferences`)
    },
    setAnalyticsCollection({ state, dispatch }, enabled) {
      // don't track in development
      if (state.developmentMode) return

      state.analyticsCollection = enabled
      dispatch(`storeLocalPreferences`)

      if (state.analyticsCollection) {
        state.externals.deanonymize()
        console.log(`Analytics collection has been enabled`)
      } else {
        state.externals.anonymize()
        console.log(`Analytics collection has been disabled`)
      }
    }
  }

  // TODO TEMP Mock actions to empty functions
  const mockedActions = Object.keys(actions).reduce((acc, key) => {
    acc[key] = () => {}
    return acc
  }, {})

  return {
    state,
    mutations,
    actions
  }
}
