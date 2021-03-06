import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import englishConfig from '../lang/en.json';
import koreanConfig from '../lang/kr.json';
import Routes from '../router/routes';
import links from '../router/navLinks';
import HeaderComponent from '../components/global/header';
import store from '../store/reduxStore';
import Actions from '../actions/index';
import FooterComponent from "../components/global/footer";
import { Web3Provider } from '../components/global/web3provider';
import { fetchAccounts, fetchNetwork } from '../utilities/helpers';
import Error from "../components/global/error";
import Loading from "../components/global/loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  
class RootContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLanguage: "en",
            languageConfig: englishConfig,
            metamask : ""
        };
    }

    componentDidMount(){
        this.checkMetamask();
        this.switchLanguage(localStorage.getItem('lang') || 'en');
        // this.props.getAccoutId();
    }

    async checkMetamask() {
        if(!window.web3){
            this.setState({
                metamask : "install"
            })
            return;
        }
        const Web3 = require('web3');
        const web3 = new Web3(window.ethereum);
        const account = await web3.eth.getAccounts();
        const network = await web3.eth.net.getNetworkType();
        if(!account[0]) {
            this.setState({metamask : "account"});
        } else if(network !== "kovan"){
            this.setState({metamask : "network"})
        } else {
            this.setState({metamask : "ok"})
        }
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.GlobalWeb3Object !== prevProps.GlobalWeb3Object){
            let currentStore = store.getState();
            console.log("Current State of Store --> ", store.getState());
           
            // Dispatch action to set the current provider in the store
            // currentStore.main.GlobalWeb3Object.currentProvider.isMetaMask
            // The Above line will tell us if the provider is MetaMask or not (returns a Boolean Value)
            console.log("Is MetaMask --> ", currentStore.main.GlobalWeb3Object.currentProvider.isMetaMask);

            // console.log("Who is the Provider? --> ", currentStore.main.GlobalWeb3Object.givenProvider);
        }
    }

    switchLanguage = (code) => {
        localStorage.setItem('lang', code);
        return this.setState({ activeLanguage: code, languageConfig: code === "kr" ? koreanConfig : englishConfig });
    };
    
    render() {

        const {metamask} = this.state;
        const FooterData={
            titleLink:"",
            titleSrc:"/static/images/bitnaruLogo.png",
            chatUrl:"http://pf.kakao.com/_xkxbxbeC/chat",
            email:"https://bitnaru.com/mailto:support@bitnaru.com",
            sns:{
                facebook:{
                    src:"",
                    link:"https://www.facebook.com/Bitnaru"
                },
                twitter:{
                    src:"",
                    link:"https://twitter.com/bitnaru"
                },
                naver:{
                    src:"",
                    link:"https://blog.naver.com/bitnaru_official"
                },
                telegram: {
                    src : "",
                    link : "https://t.me/bitnaruofficial"
                }
            }
        }
        switch (metamask) {
            case "" :
                return (<Loading show={true} width={"100%"} height={"100%"}/>);

            case "network" :
                return (<Error msg="Please change network to Kovan and reload page" route={"/"} buttonMsg="reload" />);

            case "account" :
                return (<Error msg="Please login and reload page" route={"login"} buttonMsg="login"/>);

            case "install" :
                return (<Error msg="Please install metamask and reload page" route={"https://metamask.io"} buttonMsg="Metamask page"/>);

            case "ok":
                return (
                    <div className="App">
                        <ToastContainer autoClose={false}/>
                        <Web3Provider fetchAccounts={fetchAccounts} fetchNetwork={fetchNetwork}></Web3Provider>
                        <HeaderComponent switchLanguage={this.switchLanguage} navLinks={links} titleSrc="/assets/images/bitnaruLogo.png" language={this.state.languageConfig ? this.state.languageConfig : koreanConfig} />
                        <Routes language={this.state.languageConfig ? this.state.languageConfig : koreanConfig} navLinks={links} />
                        <FooterComponent FooterData={FooterData} language={this.state.languageConfig ? this.state.languageConfig : koreanConfig} />
                    </div>
                );
            default :
                return (<Loading show={true} width={"100%"} height={"100%"}/>);
        }
        
        // return (
        //   <div className="App">
        //     <Web3Provider fetchAccounts={fetchAccounts} fetchNetwork={fetchNetwork}></Web3Provider>
        //     <HeaderComponent switchLanguage={this.switchLanguage} navLinks={links} titleSrc="/assets/images/bitnaruLogo.png" language={this.state.languageConfig ? this.state.languageConfig : koreanConfig} />
        //     <Routes language={this.state.languageConfig ? this.state.languageConfig : koreanConfig} navLinks={links} />
        //     <FooterComponent FooterData={FooterData} language={this.state.languageConfig ? this.state.languageConfig : koreanConfig} />
        //   </div>
        // )
        // This code is unreachable code now. Check it please.
    }
}

const mapStateToProps = (state) => ({
    GlobalWeb3Object : state.main.GlobalWeb3Object,
    // GlobalSmartContractObject: state.smartContract.GlobalSmartContractObject,
    // myAccountId : state.smartContract.accountId
})

const mapDispatchToProps = (dispatch) => {
    return {
        putWeb3ToStore: () => dispatch(Actions.global.putWeb3ToStore()),
        // putSmartContractObjectToStore: () => dispatch(Actions.smartContract.putSmartContractToStore()),
        // getAccoutId: () => dispatch(Actions.smartContract.getMyAccountIdRequest())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RootContainer));