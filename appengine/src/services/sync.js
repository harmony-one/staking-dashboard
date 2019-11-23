require("dotenv").config();
const axios = require("axios");

const VALIDATORS = "VALIDATORS";
const ACTIVE_VALIDATORS = "ACTIVE_VALIDATORS";
const VALIDATOR_INFO = "VALIDATOR_INFO";
const DELEGATIONS_BY_DELEGATOR = "DELEGATIONS_BY_DELEGATOR";
const DELEGATIONS_BY_VALIDATOR = "DELEGATIONS_BY_VALIDATOR";

let cache = {
  VALIDATORS: {},
  ACTIVE_VALIDATORS: {},
  VALIDATOR_INFO: {},
  DELEGATIONS_BY_DELEGATOR: {},
  DELEGATIONS_BY_VALIDATOR: {}
};

console.log(process.env.SERVER);
const apiClient = axios.create({
  baseURL: process.env.SERVER || "http://localhost:9500",
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
    cache[ACTIVE_VALIDATORS] = res.data;
    // console.log("getActiveValidatorAddressesData", res.data);
    return res.data;
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
  cache[VALIDATORS] = res.data;
  // console.log("getAllValidatorAddressesData", res.data);
  return res.data;
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
  cache[VALIDATOR_INFO][address] = res.data;
  // console.log("getAllValidatorInfoData ${address}", res.data);
  return res.data;
};

const getDelegationsByDelegatorData = async address => {
  const res = await apiClient.post(
    "/",
    `{"jsonrpc":"2.0","method":"hmy_getDelegationsByDelegator","params":["${address}"],"id":1}`
  );
  cache[DELEGATIONS_BY_DELEGATOR][address] = res.data;
  // console.log("getDelegationsByDelegatorData ${address}", res.data);
  return res.data;
};

const getDelegationsByValidatorData = async address => {
  const res = await apiClient.post(
    "/",
    `{"jsonrpc":"2.0","method":"hmy_getDelegationsByValidator","params":["${address}"],"id":1}`
  );
  cache[DELEGATIONS_BY_VALIDATOR][address] = res.data;
  // console.log("getDelegationsByValidatorData ${address}", res.data);
  return res.data;
};

const update = async () => {
  try {
    await getActiveValidatorAddressesData();
    cache[ACTIVE_VALIDATORS].result.forEach(async address => {
      await getValidatorInfoData(address);
      await getDelegationsByValidatorData(address);
    });
    await getAllValidatorAddressesData();
    cache[VALIDATORS].result.forEach(async address => {
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
}, 8000);

module.exports = {
  validators: () => cache[VALIDATORS],
  activeValidators: () => cache[ACTIVE_VALIDATORS],
  validatorInfo: address => cache[VALIDATOR_INFO][address],
  delegationsByDelegator: address => cache[DELEGATIONS_BY_DELEGATOR][address],
  delegationsByValidator: address => cache[DELEGATIONS_BY_VALIDATOR][address]
};
