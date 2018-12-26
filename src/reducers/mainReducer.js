import Constants from '../constants/constants';
import {fetchAccounts, fetchNetwork} from '../utilities/helpers';

export default (state = {}, action) => {
    switch (action.type) {
        /* REACT-WEB3 Actions */
        case "FETCH_ACCOUNTS_FROM_WEB3":
        console.log("Caught fetch accounts");
        return {
            ...state,
            accounts: fetchAccounts()
        };
        case "FETCH_NETWORK_FROM_WEB3":
        console.log("Caught fetch Network");
            return {
                ...state,
                network: fetchNetwork()
            };
        case "web3/RECEIVE_ACCOUNT":
            return {
                ...state,
                ethAddress: action.address
            }
        case "web3/CHANGE_ACCOUNT":
            return {
                ...state,
                ethAddress: action.address
            }
        case "web3/LOGOUT":
            return {
                ...state,
                ethAddress: null
            }
        case Constants.Requests.WEB3_OBJECT_REQUEST:
            return {
                ...state
            }
        case Constants.Success.WEB3_OBJECT_SUCCESS:
        console.log("SUCCESS ON WEB3 OBJECT --> ", action.web3Object)
            return {
                ...state,
                GlobalWeb3Object: action.web3Object
            }
        case Constants.Failure.WEB3_OBJECT_FAILURE:
            return {
                ...state,
                GlobalWeb3Object: action.error
            }
        /* END */
        case "FETCH_PRODUCTS_LIST": 
            return {
                ...state
            }
        case "RECEIVED_PRODUCTS_LIST":
            // Check if productsLists exists as it's saga is being called within generateOwner saga and this returns undefined as this action is generated multiple times in 1 go 
            if(action.productsList){
                localStorage.setItem('products', JSON.stringify(action.productsList));    
                return {
                    ...state,
                    productsList: action.productsList
                }
            }
        break;
        default:
            return state;
    }
}