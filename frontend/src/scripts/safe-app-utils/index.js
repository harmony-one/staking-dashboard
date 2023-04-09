import Web3 from 'web3';
import { HarmonyAddress, BN } from "@harmony-js/crypto"
import {abi} from "./staking-abi";
import { Unit } from "@harmony-js/utils"
import SafeAppsSDK from '@safe-global/safe-apps-sdk';

const opts = {
  allowedDomains: [/gnosis-safe.io$/, /app.safe.global$/],
  debug: false,
};

const appsSdk = new SafeAppsSDK(opts);

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

export const processMetaMaskMessage = async (
    sendData,
    networkConfig,
    from
) => {
    const { type, fee, gasPrice: gasPriceData, validatorAddress, amount:amountData, amounts, toAddress } = sendData
    const { gasEstimate } = fee
    // const { chain_id, rpc_url } = networkConfig //TODO: switch chain

    const web3URL = window.ethereum ? window.ethereum : process.env.HMY_NODE_URL;
    const hmyWeb3 = new Web3(web3URL);

    const web3Contract = new hmyWeb3.eth.Contract(abi, "0x00000000000000000000000000000000000000FC");

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    // console.log(Unit.Szabo(amountData || 0).toHex());

    let amount;

    let result;
    let error;

    const gas = 100000;
    const gasPrice = Math.max(new BN(await hmyWeb3.eth.getGasPrice()).mul(new BN(1)).toNumber(), gasPriceData);

    try {
        const metamaskChainId = await hmyWeb3.eth.net.getId();
        if (!isNetworkEqual(networkConfig, metamaskChainId)) {
            throw new Error(`You are currently not on the ${networkConfig.title} network in Metamask. 
                Please choose ${networkConfig.title} to continue.`);
        }

        switch (type) {
            case "MsgSend": {
                amount = Unit.Szabo(amountData || 0).toHex();
                result = await hmyWeb3.eth
                    .sendTransaction({
                        from: accounts[0],
                        to: new HarmonyAddress(toAddress).checksum,
                        value: Unit.Szabo(amounts[0].amount).toWei(),
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
                amount = Unit.Szabo(amountData || 0).toHex();
                result = await web3Contract.methods.Delegate(accounts[0], new HarmonyAddress(validatorAddress).checksum, amount).send({
                    from: accounts[0],
                    // value: amount,
                    gasPrice,
                    gas,
                });
                break
            }
            case "MsgUndelegate": {
                amount = Unit.Szabo(amountData || 0).toHex();
                result = await web3Contract.methods.Undelegate(accounts[0], new HarmonyAddress(validatorAddress).checksum, amount).send({
                    from: accounts[0],
                    // value: amount,
                    gasPrice,
                    gas,
                });

                break
            }
            case "MsgWithdrawDelegationReward": {
                result = await web3Contract.methods.CollectRewards(accounts[0]).send({
                    from: accounts[0],
                    gasPrice,
                    gas,
                });
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
            if(!error && result && result.status === true) {
                return {txhash: result.transactionHash}
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
