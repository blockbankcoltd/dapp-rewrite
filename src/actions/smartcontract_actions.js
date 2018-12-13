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
    type: Constants.default.Requests.GENERATE_SMARTCONTRACT_OBJECT
});