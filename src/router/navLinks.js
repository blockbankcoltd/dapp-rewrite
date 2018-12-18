import HomeContainer from '../containers/homeContainer';
import ExchangeContainer from '../containers/exchangeContainer';
import WalletContainer from '../containers/walletContainer';
import TransactionContainer from '../containers/transactionContainer';

const links = [
    {
        name: "Home",
        path: "/",
        component: HomeContainer
    },
    {
        name: "Exchange",
        path: "/exchange",
        component: ExchangeContainer
    },
    {
        name: "Wallet",
        path: "/wallet",
        component: WalletContainer
    },
    {
        name: "TransactionDetails",
        path: "/transactionDetails",
        component: TransactionContainer
    }
];

export default links;