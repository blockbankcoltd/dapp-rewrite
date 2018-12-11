import { put, takeLatest, all } from 'redux-saga/effects';
// const awsNodeServerURL = `http://ec2-54-180-123-66.ap-northeast-2.compute.amazonaws.com:3000`;
const awsNodeServerURL = `192.168.0.40:3000`;



function* getProductsList() {

    let data = [];
    /* const json = yield axios.get(`${awsNodeServerURL}/GetProductList`)
        .then(response => {
            return response.data;
        }).catch(err => err);
    localStorage.setItem('products', JSON.stringify(json));
    TODO: Create an array of API Calls by looping over the productList response passing different product/owner addresses for each call.
    let _array = [
        axios.post(`${awsNodeServerURL}/GetProductInfo', {product: json.productList.products[1]}`,
        axios.post(`${awsNodeServerURL}/GetProductInfo', {product: json.productList.products[1]}`,

    ];
    let _array = [];
    let _products = [];
    json.forEach( (o, index) => {
        if(index > 0){
            _array.push(axios.post(`${awsNodeServerURL}/GetProductInfo', {product: o})`;
        }
    });
    for (let c of _array) {
        let x = yield c
        data.push({productInfo: x.data, product: c});
    }
    localStorage.setItem('products', JSON.stringify(json)); */
    yield put({ type: "RECEIVED_PRODUCTS_LIST", productsList: {value: true} });
}

function* actionWatcher() {
    yield takeLatest('FETCH_PRODUCTS_LIST', getProductsList)
}

export default function* blockchainSaga() {
    yield all([
        actionWatcher()
    ]);
}