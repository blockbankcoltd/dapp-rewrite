// import { bindActionCreators } from "redux";
import * as Constants from '../constants/constants';


export default (state = {}, action) => {
    switch (action.type) {
        case Constants.default.Requests.GENERATE_SMARTCONTRACT_OBJECT:
            return {
                ...state
            }
        case Constants.default.Success.GENERATED_SMARTCONTRACT_OBJECT:
            return {
                ...state,
                GlobalSmartContractObject: action.GlobalSmartContractObject
            }
        default:
            return state;
    }
}