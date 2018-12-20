// export const getProductInfo = (owner, product) => ({
//     type: "FETCH_PRODUCT_INFO",
//     payload:  {owner, product}
// });

// export const depositETH = (owner, product) => ({
//     type: "DEPOSIT_ETH",
//     payload:  {owner, product}
// });
import * as Constants from '../constants/constants';

export const putSmartContractToStore = () => ({
    type: Constants.default.Requests.SMARTCONTRACT_OBJECT_REQUEST
});

export const placeBuyOrderRequest = (price, total) => {
    console.log("Actions SC", price, total);
    return {
        type: Constants.default.Requests.PLACE_BUY_ORDER_REQUEST,
        payload: {price, total}
    }
};

export const placeSellOrderRequest = (price, total) => {
    console.log("Actions SC", price, total);
    return {
        type: Constants.default.Requests.PLACE_SELL_ORDER_REQUEST,
        payload: { price, total }
    }
};

export const getOrderBookRequest = (prTrade, prBase, numOfRecordsToFetch) => {
    console.log("Actions SC", prTrade, prBase, numOfRecordsToFetch);
    return {
        type: Constants.default.Requests.GET_ORDERBOOK_REQUEST,
        payload: { prTrade, prBase, numOfRecordsToFetch }
    }
};

export const getMyOrdersRequest = () => {
    return {
        type: Constants.default.Requests.GET_MY_ORDERS_REQUEST
    }
};

export const getBalanceRequest = (id) => {
    return {
        type: Constants.default.Requests.GET_BALANCE_REQUEST,
        payload: { id }
    }
};

export const placeDepositEthRequest = (amount) => {
    return {
        type: Constants.default.Requests.DEPOSIT_ETH_REQUEST,
        payload: { amount }
    }
};


export const placeWithdrawEthRequest = (amount) => {
    return {
        type: Constants.default.Requests.WITHDRAW_ETH_REQUEST,
        payload: { amount }
    }
};

export const placeDepositTokenRequest = (prAddress, amount) => {
    return {
        type: Constants.default.Requests.DEPOSIT_TOKEN_REQUEST,
        payload: { prAddress, amount }
    }
};

export const placeWithdrawTokenRequest = (prAddress, amount) => {
    return {
        type: Constants.default.Requests.WITHDRAW_TOKEN_REQUEST,
        payload: { prAddress, amount }
    }
};

export const getMyAccountIdRequest = () => {
    return {
        type: Constants.default.Requests.GET_MY_ACCOUNTID_REQUEST
    }
}