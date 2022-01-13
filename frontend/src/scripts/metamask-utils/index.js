import { HarmonyAddress, BN } from "@harmony-js/crypto"
import {abi} from "./staking-abi";

export const processMetamaskMessage = async (
    sendData,
    networkConfig,
    from
) => {
    const { type, fee, gasPrice: gasPriceData } = sendData
    const { gasEstimate } = fee
    // const { chain_id, rpc_url } = networkConfig //TODO: switch chain

    const web3URL = window.ethereum ? window.ethereum : process.env.HMY_NODE_URL;
    const hmyWeb3 = new Web3(web3URL);

    const web3Contract = new hmyWeb3.eth.Contract(abi, "0x5ecf7797e73485fa883d1b9872a5b0e3d768e7dd");

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    let result;

    const gas = 6721900;
    const gasPrice = Math.max(new BN(await hmyWeb3.eth.getGasPrice()).mul(new BN(1)).toNumber(), gasPriceData);

    switch (type) {
        case "MsgSend": {
            const { toAddress, amounts } = sendData
            // const txn = harmony.transactions.newTx({
            //     from: new HarmonyAddress(from).checksum,
            //     to: new HarmonyAddress(toAddress).checksum,
            //     value: Unit.Szabo(amounts[0].amount).toWei(),
            //     shardID: 0,
            //     toShardID: 0,
            //     gasLimit: gasEstimate,
            //     gasPrice: Unit.One(gasPrice).toHex(),
            // })

            result = await web3.eth
                .sendTransaction({
                    from: accounts[0],
                    to: toAddress,
                    value: amounts,
                    gasPrice,
                    gas,
                })
                .on('error', console.error)
                .on('transactionHash', transactionHash => {
                    console.log(`Transaction is sending: ${transactionHash}`);
                });
            break
        }
        case "MsgDelegate": {
            const { delegatorAddress, validatorAddress, amount } = sendData;

            result = web3Contract.methods.delegate(new HarmonyAddress(validatorAddress).checksum, amount).send({
                from: accounts[0],
                value: amount,
                gasPrice,
                gas,
            });
            break
        }
        case "MsgUndelegate": {
            const { validatorAddress, delegatorAddress, amount } = sendData

            result = web3Contract.methods.undelegate(new HarmonyAddress(validatorAddress).checksum, amount).send({
                from: accounts[0],
                value: amount,
                gasPrice,
                gas,
            });

            break
        }
        case "MsgWithdrawDelegationReward": {
            result = web3Contract.methods.collectRewards().send({
                from: accounts[0],
                gasPrice,
                gas,
            });
            break
        }
        default:
            break
    }

    return {
        included: async () => {
            if(result && result.status === true) {
                return {txhash: result.transactionHash}
            } else {
                return {
                    error: true,
                    txhash: txnHash,
                    message:
                        "The transaction is still not confirmed after 5 attempts.",
                }
            }
        }
    }
}
