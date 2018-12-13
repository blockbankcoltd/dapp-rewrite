import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import englishConfig from '../lang/en.json';
import koreanConfig from '../lang/kr.json';
import Routes from '../router/routes';
import links from '../router/navLinks';
import HeaderComponent from '../components/global/header';
import store from '../store/reduxStore';

import actions from '../actions/index';

class RootContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLanguage: "kr",
            languageConfig: koreanConfig
        };
    }

    componentDidMount(){
        if(window.web3){
            this.props.putWeb3ToStore();
            this.props.putSmartContractObjectToStore();
        }else{
            // render an Error Page if window.web3 is not available
        }
        if(!localStorage.getItem('lang')){
            localStorage.setItem('lang', 'kr');
            this.setState({activeLanguage: 'kr', languageConfig: koreanConfig});
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
    
    render() {
        const switchLanguage = (code) => {
            localStorage.setItem('lang', code);
            return this.setState({ activeLanguage: code, languageConfig: code === "kr" ? koreanConfig : englishConfig });
        };
        
        return (
            <div className="App">
                <HeaderComponent switchLanguage={switchLanguage} navLinks={links}/>
                <Routes language={this.state.languageConfig ? this.state.languageConfig : koreanConfig} navLinks={links}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    GlobalWeb3Object : state.main.GlobalWeb3Object
})

const mapDispatchToProps = (dispatch) => {
    return {
        putWeb3ToStore: () => dispatch(actions.global.putWeb3ToStore()),
        putSmartContractObjectToStore: () => dispatch(actions.smartContract.putSmartContractToStore())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RootContainer));