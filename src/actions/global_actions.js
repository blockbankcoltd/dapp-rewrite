import * as Constants from '../constants/constants';

export const getActivelanguage = () => ({
    type: Constants.default.Requests.FETCH_ACTIVE_LANGUAGE
});

export const putWeb3ToStore = () => {
    console.log("In Action Creator");
    return {type: Constants.default.Requests.WEB3_OBJECT_REQUEST}
};

export const putSmartContractToStore = () => {
    return {type: Constants.default.Requests.SMARTCONTRACT_OBJECT_REQUEST}
};

export const fetchAccounts = () => {
    console.log("Fetching accounts. Global Event Triggered.");
    return {type: "FETCH_ACCOUNTS_FROM_WEB3"}
};

export const fetchNetwork = () => {
    console.log("Fetching Network Status. Global Event Triggered.");
    return {type: "FETCH_NETWORK_FROM_WEB3"}
};