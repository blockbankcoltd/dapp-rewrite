import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import englishConfig from '../lang/en.json';
import koreanConfig from '../lang/kr.json';
import Routes from '../router/routes';
import links from '../router/navLinks';
import HeaderComponent from '../components/header';

class RootContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLanguage: "kr",
            languageConfig: koreanConfig
        };

    }

    componentDidMount(){
        if(!localStorage.getItem('lang')){
            localStorage.setItem('lang', 'kr');
            this.setState({activeLanguage: 'kr', languageConfig: koreanConfig});
        }
    }
    
    render() {
        const switchLanguage = (code) => {
            localStorage.setItem('lang', code);
            return this.setState({ activeLanguage: code, languageConfig: code === "kr" ? koreanConfig : englishConfig });
			// return code === "kr" ? koreanConfig : englishConfig;
        };
        
        const { languages } = this.props;
        console.log("LANGUAGE CONFIG Root -------------------------------------->>>>>>>> ", this.props);
        return (
            <div className="App">
                <HeaderComponent switchLanguage={switchLanguage} navLinks={links}/>
                <Routes language={this.state.languageConfig} navLinks={links}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RootContainer));