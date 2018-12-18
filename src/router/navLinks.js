import HomeContainer from '../containers/homeContainer';
import ExchangeContainer from '../containers/exchangeContainer';
import WalletContainer from '../containers/walletContainer';

const links = [
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
        name: "Customer Service",
        path: "/",
        component: HomeContainer
    },
];

export default links;