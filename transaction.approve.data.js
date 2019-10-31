

// Transaction request from lunie app (on 2nd "Fees" step)

// POST https://lcd.nylira.net/bank/accounts/cosmos1r5fknqx36n8vts9wlqufw08u3fh3qklhfwvhg5/transfers
const payload = {
  base_req: {
    sequence: "0",
    from: "cosmos1r5fknqx36n8vts9wlqufw08u3fh3qklhfwvhg5",
    account_number: "22147",
    chain_id: "cosmoshub-2",
    simulate: true,
    memo: "(Sent via Lunie)"
  },
  from_address: "cosmos1r5fknqx36n8vts9wlqufw08u3fh3qklhfwvhg5",
  to_address: "cosmos1gr2nqfwan6y9y89clr6cr8hnjmdxagm5rpdsgu",
  amount: [{ amount: "100000", denom: "uatom" }]
};

const response = { gas_estimate: "24341" };



// After transaction was approved in extension

const approvedTransaction = {
  type: "FROM_LUNIE_EXTENSION",
  message: {
    type: "LUNIE_SIGN_REQUEST_RESPONSE",
    payload: {
      signature:
        "5cf3db62c3f8be9025ce25535f9faa50d218b10266c22873b753f12644c07afd5323bd74e3f8d0701b2d0272e09728bf5e1e5c21cbf62a3d77955d38e5a52c70",
      publicKey:
        "03702ed53edd3abaee8b4df2a8856d0c67affa25a50d3c19edda71f4ce0b78f93d"
    }
  }
};


// Message after approve
// POST https://lcd.nylira.net/txs

const requestPayload = {
  tx: {
    msg: [
      {
        type: "cosmos-sdk/MsgSend",
        value: {
          from_address: "cosmos1r5fknqx36n8vts9wlqufw08u3fh3qklhfwvhg5",
          to_address: "cosmos1gr2nqfwan6y9y89clr6cr8hnjmdxagm5rpdsgu",
          amount: [{ amount: "10000", denom: "uatom" }]
        }
      }
    ],
    fee: { amount: [{ amount: "917", denom: "uatom" }], gas: "36686" },
    signatures: [
      {
        signature:
          "XPPbYsP4vpAlziVTX5+qUNIYsQJmwihzt1PxJkTAev1TI7104/jQcBstAnLglyi/Xh5cIcv2Kj13lV045aUscA==",
        account_number: "22147",
        sequence: "1",
        pub_key: {
          type: "tendermint/PubKeySecp256k1",
          value: "A3Au1T7dOrrui03yqIVtDGev+iWlDTwZ7dpx9M4LePk9"
        }
      }
    ],
    memo: "(Sent via Lunie)"
  },
  mode: "sync"
};

const response = {
  height: "0",
  txhash: "CD68C99E83A8453E71A67F20DB7BF3057B85BDFA57D24D156C44A968F9D4E5D8"
};
