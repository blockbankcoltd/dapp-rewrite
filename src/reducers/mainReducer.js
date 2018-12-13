import { bindActionCreators } from "redux";

// import { FETCH_DATA, RECEIVED_DATA } from '../actions/types';

// const setLang = async (type) => {
//     const language = type || (localStorage && localStorage.getItem('lang') || 'en');
//     localStorage.setItem('lang', language);
//     this.lang = language === 'en' ? en : kr;
// }

// const getLang = () => {
//     return toJS(this.lang);
// }


export default (state = {}, action) => {
    switch (action.type) {
        /* REACT-WEB3 Actions */
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
        case "SET_WEB3_TO_STORE":
            return {
                ...state,
                GlobalWeb3Object: window.web3
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