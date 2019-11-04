module.exports = [
  {
    height: "2369584",
    txhash: "B58BB66A543A3C3F1E41ACB4DADD68AB9CCEAC4F122005CDD755F63AAA8AB7FD",
    raw_log: '[{"msg_index":"0","success":true,"log":""}]',
    logs: [{ msg_index: "0", success: true, log: "" }],
    gas_wanted: "36512",
    gas_used: "29212",
    tags: [
      { key: "action", value: "send" },
      { key: "sender", value: "cosmos1yj8de8wf3ewgg92u6cksytpun0hhg85yvnxqvf" },
      {
        key: "recipient",
        value: "cosmos1r5fknqx36n8vts9wlqufw08u3fh3qklhfwvhg5"
      }
    ],
    tx: {
      type: "auth/StdTx",
      value: {
        msg: [
          {
            type: "cosmos-sdk/MsgSend",
            value: {
              from_address: "cosmos1yj8de8wf3ewgg92u6cksytpun0hhg85yvnxqvf",
              to_address: "cosmos1r5fknqx36n8vts9wlqufw08u3fh3qklhfwvhg5",
              amount: [{ denom: "uatom", amount: "500000" }]
            }
          }
        ],
        fee: { amount: [{ denom: "uatom", amount: "913" }], gas: "36512" },
        signatures: [
          {
            pub_key: {
              type: "tendermint/PubKeySecp256k1",
              value: "AjlRo7hPz/h/I/7E8g5O/wa3iD7duo5p3xMaIq5uffHh"
            },
            signature:
              "vLqFhj1aWmBJexMIyUxUzf2WvRxF0YfCunctCAPlY5lvmK5EMqd466r3qocjbC0q5VMx7/3RCabTZvxc5LIbUw=="
          }
        ],
        memo: "(Sent via Lunie)"
      }
    },
    timestamp: "2019-10-29T20:11:49Z"
  }
];
