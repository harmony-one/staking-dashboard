module.exports =
[{
	"height": "2448112",
	"txhash": "81366836E5F20604D6E7200A54491C74A02FAD3B4596FABD556E8276A7534164",
	"code": 10,
	"raw_log": "[{\"msg_index\":\"0\",\"success\":false,\"log\":\"{\\\"codespace\\\":\\\"sdk\\\",\\\"code\\\":10,\\\"message\\\":\\\"insufficient account funds;  \\u003c 1000uatom\\\"}\"}]",
	"logs": [{
		"msg_index": "0",
		"success": false,
		"log": "{\"codespace\":\"sdk\",\"code\":10,\"message\":\"insufficient account funds;  \u003c 1000uatom\"}"
	}],
	"gas_wanted": "500000",
	"gas_used": "10490",
	"tags": [{
		"key": "action",
		"value": "send"
	}],
	"tx": {
		"type": "auth/StdTx",
		"value": {
			"msg": [{
				"type": "cosmos-sdk/MsgSend",
				"value": {
					"from_address": "cosmos1muytutqyfgaaarz6dqyvcwexdu5xm0qr0vnns4",
					"to_address": "cosmos16q2gpsvlj09z5jr93zlwlp89pe4sn0fp2mpy8x",
					"amount": [{
						"denom": "uatom",
						"amount": "1000"
					}]
				}
			}],
			"fee": {
				"amount": null,
				"gas": "500000"
			},
			"signatures": [{
				"pub_key": {
					"type": "tendermint/PubKeySecp256k1",
					"value": "Apd5yNhDSp1ybH3mfI67RtVRSgA1FQZdzoezGrzNbpMC"
				},
				"signature": "lKXZtLF4j1416Cg36NwoinNMjuAkGtOWe7p3h2FIzjQLqT/PHyQ6WfOZwApJLWMqj3zsmMh3oSlPjeptH4wxsg=="
			}],
			"memo": ""
		}
	},
	"timestamp": "2019-11-05T03:15:19Z"
}]