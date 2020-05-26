"use strict"

const HARMONY_EXT_TYPE = "FROM_ONEWALLET_EXTENSION"
const HARMONY_WEBSITE_TYPE = "TO_ONEWALLET_EXTENSION"

const unWrapMessageFromContentScript = data => data.message

// eslint-disable-next-line no-unused-vars
const processMessage = (store, type, payload) => {
  switch (type) {
    case "INIT_EXTENSION":
      store.commit("setOneWalletAvailable")
      getOneWalletSession()
      break
    case "CLOSE_SESSION_RESPONSE":
      store.commit(`setActionInProgress`, false)
      break
    case "GET_SESSION_RESPONSE":
      if (payload) {
        store.commit(`setExtensionId`, payload.extensionId)
      }
      break
    default:
      return
  }
}

const filterExtensionMessage = callback => message => {
  if (message.source !== window) return
  if (message === undefined) return
  const { data } = message
  if (!data) return
  if (data.type && data.type === HARMONY_EXT_TYPE) {
    callback(data)
  }
}

// exported for easyier testing
export const processExtensionMessages = store =>
  filterExtensionMessage(data => {
    const message = unWrapMessageFromContentScript(data)
    processMessage(store, message.type, message.payload)
  })

// listen to incoming events
export const listenToOneWalletMessages = store => {
  const handler = processExtensionMessages(store)
  window.addEventListener("message", handler)
}

// ---- Querying -----

const sendMessageToContentScript = (payload, skipResponse = false) => {
  window.postMessage({ type: HARMONY_WEBSITE_TYPE, payload, skipResponse }, "*")
}

// react to certain response type
function waitForResponse(type) {
  return new Promise(resolve => {
    const handler = filterExtensionMessage(data => {
      const message = unWrapMessageFromContentScript(data)
      if (message.type === type) {
        resolve(message.payload)
      }

      // cleanup
      window.removeEventListener("message", handler)
    })
    window.addEventListener("message", handler)
  })
}

const sendAsyncMessageToContentScript = async payload => {
  // I think we can deal with async console errors problems by returning true
  sendMessageToContentScript(payload, true)

  // await async response
  const response = await waitForResponse(`${payload.type}_RESPONSE`)
  if (response.rejected) {
    throw new Error("User rejected action in extension.")
  }
  if (response.error) {
    throw new Error(response.error)
  }
  return response
}

export const logInWithOneWallet = async () => {
  const res = await sendAsyncMessageToContentScript({
    type: "ONEWALLET_LOGIN_REQUEST"
  })

  return { address: res.address }
}

export const signWithOneWallet = async (signMessage, senderAddress) => {
  const res = await sendAsyncMessageToContentScript({
    type: "ONEWALLET_SIGN_REQUEST",
    payload: {
      signMessage,
      senderAddress
    }
  })
  return { txHash: res.rawTransaction }
}

export const waitOneWalletTransactionConfirm = async () => {
  return await waitForResponse(`TRANSACTION_CONFIRM_RESPONSE`)
}

export const getOneWalletSession = () => {
  sendMessageToContentScript({ type: "GET_SESSION" })
}
