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

class RootContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLanguage: "en",
            languageConfig: englishConfig
        };
    }

    componentDidMount(){
        if(window.web3){
            // this.props.putWeb3ToStore();
            // this.props.putSmartContractObjectToStore();
        }else{
            // render an Error Page if window.web3 is not available
        }
        if(!localStorage.getItem('lang')){
            localStorage.setItem('lang', 'kr');
            this.setState({activeLanguage: 'kr', languageConfig: koreanConfig});
        }
        // this.props.getAccoutId();
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
    
    render() {
        console.log(this.props);
        const switchLanguage = (code) => {
            localStorage.setItem('lang', code);
            return this.setState({ activeLanguage: code, languageConfig: code === "kr" ? koreanConfig : englishConfig });
        };
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
        
        return (
            <div className="App">
                <HeaderComponent switchLanguage={switchLanguage} navLinks={links} titleSrc="/assets/images/bitnaruLogo.png" language={this.state.languageConfig ? this.state.languageConfig : koreanConfig}/>
                <Routes language={this.state.languageConfig ? this.state.languageConfig : koreanConfig} navLinks={links}/>
                <FooterComponent FooterData={FooterData} language={this.state.languageConfig ? this.state.languageConfig : koreanConfig}/>
            </div>
        )
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