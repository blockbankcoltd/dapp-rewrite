import Web3 from 'web3';
import { contractList } from '../utilities/config';

// const CheckProvider = () => {
//     return window.web3 && window.web3.currentProvider ? window.web3.currentProvider : (Web3.givenProvider ? Web3.givenProvider : null);
// };
// const ProvidersWeb3 = CheckProvider();

const Web3Object =  new Web3(window.web3.currentProvider);


const selectedContract = contractList[(+localStorage.getItem('contract') || 0)];
const contract_address = selectedContract.address;
const Contract = new Web3Object.eth.Contract(selectedContract.abifile.abi, contract_address);

if(Contract.givenProvider && Contract.givenProvider.selectedAddress && Contract.givenProvider.selectedAddress !== null && Contract.givenProvider.selectedAddress !== undefined){
    localStorage.setItem('selectedAddress', Contract.givenProvider.selectedAddress);
}

const selectedAddress = Contract.givenProvider.selectedAddress || localStorage.getItem('selectedAddress'); 

export default {
    GlobalWeb3Object: Web3Object,
    GlobalSmartContractObject: Contract,
    selectedAddress
}