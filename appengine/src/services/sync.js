require("dotenv").config();
const axios = require("axios");

const VALIDATORS = "VALIDATORS";
const ACTIVE_VALIDATORS = "ACTIVE_VALIDATORS";
const VALIDATOR_INFO = "VALIDATOR_INFO";
const DELEGATIONS_BY_DELEGATOR = "DELEGATIONS_BY_DELEGATOR";
const DELEGATIONS_BY_VALIDATOR = "DELEGATIONS_BY_VALIDATOR";

const BLOCKCHAIN_SERVER = process.env.BLOCKCHAIN_SERVER || "http://localhost:9500";

let cache = {
  VALIDATORS: {},
  ACTIVE_VALIDATORS: {},
  VALIDATOR_INFO: {},
  DELEGATIONS_BY_DELEGATOR: {},
  DELEGATIONS_BY_VALIDATOR: {}
};

console.log('Blockchain server: ', BLOCKCHAIN_SERVER);

const apiClient = axios.create({
  baseURL: BLOCKCHAIN_SERVER,
  // baseURL: process.env.SERVER,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

const getActiveValidatorAddressesData = async () => {
  try {
    const res = await apiClient.post(
      "/",
      `{
      "jsonrpc": "2.0",
      "method": "hmy_getActiveValidatorAddresses",
      "params": [],
      "id": 1
    }`
    );
    cache[ACTIVE_VALIDATORS] = res.data.result;
    // console.log("getActiveValidatorAddressesData", res.data);
    return res.data.result;
  } catch (err) {}
};

const getAllValidatorAddressesData = async () => {
  const res = await apiClient.post(
    "/",
    `{
      "jsonrpc": "2.0",
      "method": "hmy_getAllValidatorAddresses",
      "params": [],
      "id": 1
    }`
  );
  cache[VALIDATORS] = res.data.result;
  // console.log("getAllValidatorAddressesData", res.data);
  return res.data.result;
};

const getValidatorInfoData = async address => {
  const res = await apiClient.post(
    "/",
    `{
      "jsonrpc": "2.0",
      "method": "hmy_getValidatorInfo",
      "params": ["${address}"],
      "id": 1
    }`
  );
  cache[VALIDATOR_INFO][address] = res.data.result;
  // console.log("getAllValidatorInfoData ${address}", res.data);
  return res.data.result;
};

const getDelegationsByDelegatorData = async address => {
  const res = await apiClient.post(
    "/",
    `{"jsonrpc":"2.0","method":"hmy_getDelegationsByDelegator","params":["${address}"],"id":1}`
  );
  cache[DELEGATIONS_BY_DELEGATOR][address] = res.data.result;
  // console.log("getDelegationsByDelegatorData ${address}", res.data.result);
  return res.data.result;
};

const getDelegationsByValidatorData = async address => {
  const res = await apiClient.post(
    "/",
    `{"jsonrpc":"2.0","method":"hmy_getDelegationsByValidator","params":["${address}"],"id":1}`
  );
  cache[DELEGATIONS_BY_VALIDATOR][address] = res.data.result;
  // console.log("getDelegationsByValidatorData ${address}", res.data.result);
  return res.data.result;
};

const update = async () => {
  try {
    await getActiveValidatorAddressesData();
    cache[ACTIVE_VALIDATORS].forEach(async address => {
      await getValidatorInfoData(address);
      await getDelegationsByValidatorData(address);
    });
    await getAllValidatorAddressesData();
    cache[VALIDATORS].forEach(async address => {
      await getValidatorInfoData(address);
      await getDelegationsByValidatorData(address);
    });
  } catch (err) {
    console.log("minh", err);
  }
};

setInterval(async () => {
  console.log("--------- Updating ---------");
  await update();
}, 4000);

// const getDelegationAmount = (validatorAddress, delegatorAddress) => {
//   return cache[DELEGATIONS_BY_VALIDATOR][validatorAddress].reduce((sum, delegation) => {
//     if(delegation.delegator_address === delegatorAddress) {
//       return sum + delegation.amount;
//     } else {
//       return sum;
//     }
//   }, 0);
// }

const validators = () => {
  return cache[VALIDATORS].map(address => {
    return { ...cache[VALIDATOR_INFO][address] };
  })
}

const activeValidators = () => {
  return cache[ACTIVE_VALIDATORS].map(address => {
    return cache[VALIDATOR_INFO][address];
  })
}

const delegationsByDelegator = async (address) => {
  return await getDelegationsByDelegatorData(address);
}

module.exports = {
  validators,
  activeValidators,
  validatorInfo: address => cache[VALIDATOR_INFO][address],
  delegationsByDelegator,
  // delegationsByDelegator: async address => cache[DELEGATIONS_BY_DELEGATOR][address],
  delegationsByValidator: address => cache[DELEGATIONS_BY_VALIDATOR][address]
};
