import React from 'react';
import * as Constants from '../constants/constants';
import initState from './initialState';
import { toast } from 'react-toastify';
import ToastComponent from '../components/global/toastComponent'

export default (state = initState, action) => {
    if(!state) {
        return null;
    }
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
            toast.success(<ToastComponent message={"Buy Order Placed Successfully."} />, {
                position: toast.POSITION.BOTTOM_CENTER
            })
            return {
                ...state,
                buyOrderStatus: action.buyOrderStatus
            }
        case Constants.default.Success.PLACE_SELL_ORDER_SUCCESS:
            toast.success(<ToastComponent message={"Sell Order Placed Successfully."} />, {
                position: toast.POSITION.BOTTOM_CENTER
            })
            return {
                ...state,
                sellOrderStatus: action.sellOrderStatus
            }
        case Constants.default.Success.CANCEL_ORDER_SUCCESS:
            toast.success(<ToastComponent message={"Order Cancelled Successfully."} />, {
                position: toast.POSITION.BOTTOM_CENTER
            })
            return {
                ...state,
                cancelOrderStatus: action.cancelOrderStatus
            }
        case Constants.default.Success.GET_DEPOSIT_WITHDRAWL_RECORDS_SUCCESS:
            return {
                ...state,
                depositWithdrawlRecords: action.depositWithdrawlRecords
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
        case Constants.default.Success.GET_BESTBID_BESTASK_SUCCESS:
            return {
                ...state,
                bestBidBestAsk: action.bestBidBestAsk
            }
        
        case Constants.default.Failure.PLACE_BUY_ORDER_FAILURE:
            toast.error(<ToastComponent message={action.e.message} />, {
                position: toast.POSITION.BOTTOM_CENTER
            })
            return {
                ...state,
                error: action.e.message
            }
        case Constants.default.Failure.GET_ORDERBOOK_FAILURE:
            toast.error(<ToastComponent message={action.e.message} />, {
                position: toast.POSITION.BOTTOM_CENTER
            })
            return {
                ...state,
                error: action.e.message
            }
        case Constants.default.Failure.GET_MY_ORDERS_FAILURE:
            toast.error(<ToastComponent message={action.e.message} />, {
                position: toast.POSITION.BOTTOM_CENTER
            })
            return {
                ...state,
                error: action.e.message
            }
        case Constants.default.Failure.PLACE_SELL_ORDER_FAILURE:
            toast.error(<ToastComponent message={action.e.message} />, {
                position: toast.POSITION.BOTTOM_CENTER
            })
            return {
                ...state,
                error: action.e.message
            }
        case Constants.default.Failure.DEPOSIT_ETH_FAILURE:
            toast.error(<ToastComponent message={action.e.message} />, {
                position: toast.POSITION.BOTTOM_CENTER
            })
            return {
                ...state,
                error: action.e.message
            }
        case Constants.default.Failure.WITHDRAW_ETH_FAILURE:
            toast.error(<ToastComponent message={action.e.message} />, {
                position: toast.POSITION.BOTTOM_CENTER
            })
            return {
                ...state,
                error: action.e.message
            }
        case Constants.default.Failure.DEPOSIT_TOKEN_FAILURE:
            toast.error(<ToastComponent message={action.e.message} />, {
                position: toast.POSITION.BOTTOM_CENTER
            })
            return {
                ...state,
                error: action.e.message
            }
        case Constants.default.Failure.WITHDRAW_TOKEN_FAILURE:
            toast.error(<ToastComponent message={action.e.message} />, {
                position: toast.POSITION.BOTTOM_CENTER
            })
            return {
                ...state,
                error: action.e.message
            }
        case Constants.default.Failure.GET_BALANCE_FAILURE:
            toast.error(<ToastComponent message={action.e.message} />, {
                position: toast.POSITION.BOTTOM_CENTER
            })
            return {
                ...state,
                error: action.e.message
            }
        case Constants.default.Failure.GET_MY_ACCOUNTID_FAILURE:
            toast.error(<ToastComponent message={action.e.message} />, {
                position: toast.POSITION.BOTTOM_CENTER
            })
            return {
                ...state,
                error: action.e.message
            }
        case Constants.default.Failure.GET_BESTBID_BESTASK_FAILURE:
            toast.error(<ToastComponent message={action.e.message} />, {
                position: toast.POSITION.BOTTOM_CENTER
            })
            return {
                ...state,
                error: action.e.message
            }
        case Constants.default.Failure.GET_DEPOSIT_WITHDRAWL_RECORDS_FAILURE:
            toast.error(<ToastComponent message={action.e.message} />, {
                position: toast.POSITION.BOTTOM_CENTER
            })
            return {
                ...state,
                error: action.e.message
            }
        case Constants.default.Failure.FETCH_TRADE_HISTORY_FAILURE:
            toast.error(<ToastComponent message={action.e.message} />, {
                position: toast.POSITION.BOTTOM_CENTER
            })
            return {
                ...state,
                error: action.e.message
            }
        case Constants.default.Failure.FETCH_ORDER_HISTORY_FAILURE:
            toast.error(<ToastComponent message={action.e.message} />, {
                position: toast.POSITION.BOTTOM_CENTER
            })
            return {
                ...state,
                error: action.e.message
            }
        case Constants.default.Failure.CANCEL_ORDER_FAILURE:
            toast.error(<ToastComponent message={action.e.message} />, {
                position: toast.POSITION.BOTTOM_CENTER
            })
            return {
                ...state,
                error: action.e.message
            }
        default:
            return state;
    }
}