import * as Constants from '../constants/constants';
export const getActivelanguage = () => ({
    type: Constants.default.Requests.FETCH_ACTIVE_LANGUAGE
});

export const putWeb3ToStore = () => {
    console.log("In Action Creator");
    return {type: Constants.default.Requests.WEB3_OBJECT_REQUEST}
};