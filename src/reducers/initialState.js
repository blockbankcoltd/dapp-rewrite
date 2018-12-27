import Web3 from 'web3';
import { contractList } from '../utilities/config';

// const CheckProvider = () => {
//     return window.web3 && window.web3.currentProvider ? window.web3.currentProvider : (Web3.givenProvider ? Web3.givenProvider : null);
// };
// const ProvidersWeb3 = CheckProvider();
let Web3Object = null;
let selectedContract = null;
let contract_address = null;
let Contract = null;
let selectedAddress = null;

try{
    Web3Object =  new Web3(window.web3.currentProvider);


    selectedContract = contractList[(+localStorage.getItem('contract') || 0)];
    contract_address = selectedContract.address;
    Contract = new Web3Object.eth.Contract(selectedContract.abifile.abi, contract_address);

    if(Contract.givenProvider && Contract.givenProvider.selectedAddress && Contract.givenProvider.selectedAddress !== null && Contract.givenProvider.selectedAddress !== undefined){
        localStorage.setItem('selectedAddress', Contract.givenProvider.selectedAddress);
    }
    selectedAddress = Contract.givenProvider.selectedAddress || localStorage.getItem('selectedAddress');

} catch(e) {
    console.log(e)
}


export default {
    GlobalWeb3Object: Web3Object,
    GlobalSmartContractObject: Contract,
    selectedAddress
}