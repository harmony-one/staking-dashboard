import Web3 from 'web3';
import { HarmonyAddress, BN } from "@harmony-js/crypto"
import { abi } from "./staking-abi";
import { Unit } from "@harmony-js/utils"

import SafeAppsSDK, { TransactionStatus } from '@safe-global/safe-apps-sdk';

const opts = {
    allowedDomains: [/multisig.harmony.one$/, /staging-safe.harmony.one$/],
    debug: true,
};

const CHAIN_ID_TESTNET = 1666700000
const CHAIN_ID_MAINNET = 1666600000

const isNetworkEqual = (networkConfig, metamaskChainId) => {
    if (networkConfig.id === 'harmony-testnet' && metamaskChainId === CHAIN_ID_TESTNET) {
        return true
    }

    if (networkConfig.id === 'harmony' && metamaskChainId === CHAIN_ID_MAINNET) {
        return true
    }

    return false
}

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

const CONTRACT_ADDRESS = "0x00000000000000000000000000000000000000FC";

export const processMultisigMessage = async (
    sendData,
    networkConfig,
    from
) => {
    const { type, fee, gasPrice: gasPriceData, validatorAddress, amount: amountData, amounts, toAddress } = sendData
    const { gasEstimate } = fee
    // const { chain_id, rpc_url } = networkConfig //TODO: switch chain

    const web3URL = window.ethereum ? window.ethereum : process.env.HMY_NODE_URL;
    const hmyWeb3 = new Web3(web3URL);

    const appsSdk = new SafeAppsSDK(opts);

    const web3Contract = new hmyWeb3.eth.Contract(abi, CONTRACT_ADDRESS);

    const safe = await appsSdk.safe.getInfo();

    const accounts = [safe.safeAddress];

    let amount;

    let result;
    let error;

    const gas = 100000;
    // const gasPrice = Math.max(new BN(await hmyWeb3.eth.getGasPrice()).mul(new BN(1)).toNumber(), gasPriceData);

    try {
        if (!isNetworkEqual(networkConfig, safe.chainId)) {
            throw new Error(`You are currently not on the ${networkConfig.title} network in Metamask. 
                Please choose ${networkConfig.title} to continue.`);
        }

        switch (type) {
            case "MsgSend": {
                amount = Unit.Szabo(amountData || 0).toHex();

                console.log(
                    amounts[0].amount,
                    Unit.Szabo(amounts[0].amount).toHex(),
                    Unit.Szabo(amounts[0].amount).toWei()
                )

                // const config = {
                //     from: accounts[0],
                //     to: new HarmonyAddress(toAddress).checksum,
                //     value: Unit.Szabo(amounts[0].amount).toHex(),
                // };

                // result = await appsSdk.eth.call([config]);

                const txs = [
                    {
                        to: new HarmonyAddress(toAddress).checksum,
                        value: Unit.Szabo(amounts[0].amount).toHex(),
                        data: '0x'
                    }
                ];

                const params = {
                    safeTxGas: gas,
                };

                result = await appsSdk.txs.send({ txs, params });

                // console.log(res);


                // result = await appsSdk.eth.sendTransaction({
                //     from: accounts[0],
                //     to: new HarmonyAddress(toAddress).checksum,
                //     value: Unit.Szabo(amounts[0].amount).toWei(),
                //     gasPrice,
                //     gas,
                // })
                //     .on('error', console.error)
                //     .on('transactionHash', transactionHash => {
                //         console.log(`Transaction is sending: ${transactionHash}`);
                //     });
                break
            }
            case "MsgDelegate": {
                amount = Unit.Szabo(amountData || 0).toHex();

                const data = web3Contract.methods.Delegate(
                    accounts[0],
                    new HarmonyAddress(validatorAddress).checksum, amount
                ).encodeABI();

                const txs = [{
                    to: CONTRACT_ADDRESS,
                    value: 0,
                    data: data,
                }]

                const params = {
                    safeTxGas: gas,
                };

                result = await appsSdk.txs.send({ txs, params });
                break
            }
            case "MsgUndelegate": {
                amount = Unit.Szabo(amountData || 0).toHex();

                const data = web3Contract.methods.Undelegate(
                    accounts[0],
                    new HarmonyAddress(validatorAddress).checksum, amount
                ).encodeABI();

                const txs = [{
                    to: CONTRACT_ADDRESS,
                    value: 0,
                    data: data,
                }]

                const params = {
                    safeTxGas: gas,
                };

                result = await appsSdk.txs.send({ txs, params });
                break
            }
            case "MsgWithdrawDelegationReward": {
                const data = web3Contract.methods.CollectRewards(
                    accounts[0],
                ).encodeABI();

                const txs = [{
                    to: CONTRACT_ADDRESS,
                    value: 0,
                    data: data,
                }]

                const params = {
                    safeTxGas: gas,
                };

                result = await appsSdk.txs.send({ txs, params });
                break
            }
            default:
                break
        }
    } catch (e) {
        error = e;
    }

    return {
        included: async () => {
            if (!error && result) {
                try {
                    let tx = await appsSdk.txs.getBySafeTxHash(result.safeTxHash);

                    if (result) {
                        while (
                            [
                                TransactionStatus.AWAITING_CONFIRMATIONS,
                                TransactionStatus.AWAITING_EXECUTION
                            ].includes(tx.txStatus)
                        ) {
                            await sleep(3000);
                            tx = await appsSdk.txs.getBySafeTxHash(result.safeTxHash);

                            if ([TransactionStatus.FAILED].includes(tx.txStatus)) {
                                throw new Error(`Multisig transaction was ${tx.txStatus}`)
                            }
                        }

                        return { txhash: tx.txHash };
                    }
                } catch (e) {
                    return {
                        error: true,
                        txhash: '',
                        message: e && e.message,
                    }
                }
            } else {
                return {
                    error: true,
                    txhash: '',
                    message: error && error.message,
                }
            }
        }
    }
}
