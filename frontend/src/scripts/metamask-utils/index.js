import { HarmonyAddress, BN } from "@harmony-js/crypto"
import {abi} from "./staking-abi";

export const processMetamaskMessage = async (
    sendData,
    networkConfig,
    from
) => {
    const { type, fee, gasPrice } = sendData
    const { gasEstimate } = fee
    // const { chain_id, rpc_url } = networkConfig //TODO: switch chain

    const web3URL = window.ethereum ? window.ethereum : process.env.HMY_NODE_URL;
    export const hmyWeb3 = new Web3(web3URL);

    const web3Contract = new hmyWeb3.eth.Contract(abi, "0x5ecf7797e73485fa883d1b9872a5b0e3d768e7dd");

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    let result;

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

            const gas = 6721900;
            const gasPrice = new BN(await hmyWeb3.eth.getGasPrice()).mul(new BN(1));

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
        // case "MsgUndelegate": {
        //     const { validatorAddress, delegatorAddress, amount } = sendData
        //     const stakingTxn = new StakingFactory(harmony.messenger)
        //         .undelegate({
        //             delegatorAddress: new HarmonyAddress(delegatorAddress).checksum,
        //             validatorAddress: new HarmonyAddress(validatorAddress).checksum,
        //             amount: Unit.Szabo(amount).toHex(),
        //         })
        //         .setTxParams({
        //             gasPrice: Unit.One(gasPrice).toHex(),
        //             gasLimit: Unit.Wei(new BN(gasEstimate).add(new BN("20000"))).toHex(),
        //             chainId: harmony.chainId,
        //         })
        //         .build()
        //     stakingTxn.setFromAddress(new HarmonyAddress(from).checksum)
        //
        //     signedTxn = await window.onewallet.signTransaction(stakingTxn)
        //     break
        // }
        // case "MsgWithdrawDelegationReward": {
        //     const { delegatorAddress } = sendData
        //     const stakingTxn = new StakingFactory(harmony.messenger)
        //         .collectRewards({
        //             delegatorAddress: new HarmonyAddress(delegatorAddress).checksum,
        //         })
        //         .setTxParams({
        //             gasPrice: Unit.One(gasPrice).toHex(),
        //             gasLimit: Unit.Wei(new BN(gasEstimate).add(new BN("20000"))).toHex(),
        //             chainId: harmony.chainId,
        //         })
        //         .build()
        //     stakingTxn.setFromAddress(new HarmonyAddress(from).checksum)
        //
        //     signedTxn = await window.onewallet.signTransaction(stakingTxn)
        //     break
        // }
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
