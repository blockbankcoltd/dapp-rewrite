// import { bindActionCreators } from "redux";
import * as Constants from '../constants/constants';


export default (state = {}, action) => {
    switch (action.type) {
        case Constants.default.Success.SMARTCONTRACT_OBJECT_SUCCESS:
            return {
                ...state,
                GlobalSmartContractObject: action.GlobalSmartContractObject
            }
        case Constants.default.Failure.SMARTCONTRACT_OBJECT_FAILURE:
            return {
                ...state,
                GlobalSmartContractObject_Error: action.error
            }
        case Constants.default.Success.PLACE_BUY_ORDER_SUCCESS:
            return {
                ...state,
                buyOrderStatus: action.buyOrderStatus
            }
        case Constants.default.Success.PLACE_SELL_ORDER_SUCCESS:
            return {
                ...state,
                buyOrderStatus: action.sellOrderStatus
            }
        case Constants.default.Success.GET_ORDERBOOK_SUCCESS:
            return {
                ...state,
                orderBook: action.orderbook
            }
        case Constants.default.Success.GET_MY_ORDERS_SUCCESS:
            return {
                ...state,
                myOrders: action.myOrders
            }
        case Constants.default.Success.GET_BALANCE_SUCCESS:
            return {
                ...state,
                balance: action.balance
            }
        case Constants.default.Success.GET_MY_ACCOUNTID_SUCCESS:
            return {
                ...state,
                accountId: action.accountId
            }
        default:
            return state;
    }
}