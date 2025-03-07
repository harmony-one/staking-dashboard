import { track, deanonymize, anonymize } from "scripts/google-analytics"
import config from "../../config"

function isWindowsPlatform() {
  return window.navigator.platform.match(/win32|win64/i) !== null
}

const mockSessionState = {
  // signedIn: true,
  // address: "one1r5fknqx36n8vts9wlqufw08u3fh3qklhfwvhg5",
  // sessionType: "extension"
}

const opts = {
  allowedDomains: [/multisig.harmony.one$/, /staging-safe.harmony.one$/],
  debug: true,
};

export default () => {
  const USER_PREFERENCES_KEY = `harmony_user_preferences`

  const state = {
    developmentMode: config.development, // can't be set in browser
    experimentalMode: config.development, // development mode, can be set from browser
    insecureMode: false, // show the local signer
    signedIn: false,
    sessionType: null, // local, explore, ledger, extension
    pauseHistory: false,
    extensionVersion: 0,
    history: [],
    address: null, // Current address
    evmAddress: null, // Current EVM address
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
    setEvmAddress(state, evmAddress) {
      state.evmAddress = evmAddress
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
    },
    setExtensionInfo(state, { extensionId, extensionVersion }) {
      state.extensionId = extensionId

      if (extensionVersion) {
        state.extensionVersion = Number(
          extensionVersion.split(".").slice(-1)[0]
        )
      }
    }
  }

  const actions = {
    async checkForPersistedSession({ dispatch }) {
      const session = localStorage.getItem(`session`)
      if (session) {
        let { address, sessionType } = JSON.parse(session)

        if (sessionType === "multisig") {
          try {
            const appsSdk = new SafeAppsSDK(opts);

            const safe = await appsSdk.safe.getInfo();

            await dispatch(`signIn`, {
              address: toBech32(safe.safeAddress),
              sessionType
            })
          } catch (e) {
            console.error(e);
          }
        } else {
          await dispatch(`signIn`, { address, sessionType })
        }
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
      { address, evmAddress, sessionType = `ledger` }
    ) {
      if (state.signedIn) {
        await dispatch(`resetSessionData`)
      }

      commit(`setSignIn`, true)
      commit(`setSessionType`, sessionType)

      await dispatch(`changeAccount`, { address, evmAddress, sessionType })

      // state.externals.track(`event`, `session`, `sign-in`, sessionType)
    },
    signOut({ state, commit, dispatch }) {
      // state.externals.track(`event`, `session`, `sign-out`)

      dispatch(`resetSessionData`)
      commit(`setSignIn`, false)
    },
    async changeAccount(
      { state, commit, dispatch },
      { address, evmAddress, sessionType = `ledger` }
    ) {
      commit(`setUserAddress`, address)
      commit(`setEvmAddress`, evmAddress)

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
    },
    resetSessionData({ commit, state }) {
      state.history = ["/"]
      commit(`setUserAddress`, null)
      localStorage.removeItem(`session`)
    },
    loadLocalPreferences({ state, dispatch }) {
      const localPreferences = localStorage.getItem(USER_PREFERENCES_KEY)

      if (localPreferences) {
        const { cookiesAccepted } = JSON.parse(localPreferences)

        state.cookiesAccepted = Boolean(cookiesAccepted)
      }

      // if (state.errorCollection !== errorCollection)
      //   dispatch(`setErrorCollection`, errorCollection)
      // if (state.analyticsCollection !== analyticsCollection)
      //   dispatch(`setAnalyticsCollection`, analyticsCollection)
    },
    storeLocalPreferences({ state }) {
      state.cookiesAccepted = true

      localStorage.setItem(
        USER_PREFERENCES_KEY,
        JSON.stringify({
          cookiesAccepted: true
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
    acc[key] = () => { }
    return acc
  }, {})

  return {
    state,
    mutations,
    actions
  }
}
