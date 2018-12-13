import * as Constants from '../constants/constants';
export const getActivelanguage = () => ({
    type: Constants.default.Requests.FETCH_ACTIVE_LANGUAGE
});

export const putWeb3ToStore = () => ({
    type: Constants.default.Requests.SET_WEB3_TO_STORE
});