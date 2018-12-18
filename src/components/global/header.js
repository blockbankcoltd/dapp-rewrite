import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import bitnaruLogo from '../../../src/assets/images/bitnaruLogo.png';
import englishLangIcon from '../../../src/assets/images/icon/en.png';
import koreanLangIcon from '../../../src/assets/images/icon/kr.png';

export default class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerAdd: false,
            langActive: false,
            side: false
        }
    }

    viewSide = (e) => {

    }

    render() {
        const { navLinks, titleSrc, language } = this.props;
        // const {children,titleSrc,Language} = this.props;
        // const header=Language.HEADER;
        // const buttons=Language.BUTTONS;
        const { MENU_TEXT_HOME } = language.HEADER;
        return (
            <Header className={this.state.headerAdd ? 'header scr_on' : 'header'}>
                <HeaderContents>
                    <Title>
                        <Link to="/">
                           <TitleImage onClick={this.viewSide} id="logo" src={bitnaruLogo} alt={MENU_TEXT_HOME}/>
                           {/* <TitleImage onClick={this.viewSide} id="logo" src={titleSrc} alt={MENU_TEXT_HOME} /> */}
                        </Link>
                    </Title>
                    <HeaderLinks>
                        {navLinks.map(r => {
                            if(r.name === "Home") {
                                return null;
                            }
                            return <Link key={r.path} to={r.path} >{r.name}</Link>
                        })}
                    </HeaderLinks>
                    
                    <div className="lang_navi">
                        <p className={localStorage.getItem('lang') === "kr" ? "lang_kr" : "lang_en"} onClick={(e) => { this.setState({ langActive: !this.state.langActive }) }}>
                            <span>{localStorage.getItem('lang') === "kr" ? "KR" : "EN"}
                                <i className="xi-caret-down-min"></i>
                            </span>
                        </p>
                        <ul id="langSelect" className={"lang_" + (this.state.langActive ? "on" : "off")}>
                            <li className="lang_kr" onClick={(e) => { this.props.switchLanguage("kr") }}>KR</li>
                            <li className="lang_en" onClick={(e) => { this.props.switchLanguage("en") }}>EN</li>
                        </ul>
                    </div>

                    <MobileBars>
                        <i className={this.state.side ? 'xi-close' : 'xi-bars'} onClick={this.viewSide}></i>
                    </MobileBars>
                    <MobileMenu className={this.state.side ? 'on mSlide' : 'mSlide'}>
                        <div className="lang_navi">
                            <p className={localStorage.getItem('lang') === "kr" ? "lang_kr" : "lang_en"}
                                onClick={(e) => { this.setState({ langActive: !this.state.langActive }) }}><span>{localStorage.getItem('lang') === "kr" ? "KR" : "EN"}<i className="xi-caret-down-min"></i></span></p>
                            <ul id="langSelect" className={"lang_" + (this.state.langActive ? "on" : "off")}>
                                <li className="lang_kr" onClick={(e) => { this.props.switchLanguage("kr") }}>KR</li>
                                <li className="lang_en" onClick={(e) => { this.props.switchLanguage("en") }}>EN</li>
                            </ul>
                        </div>
                    </MobileMenu>
                </HeaderContents>
            </Header>
        )
    }
}


const Header = styled.section`
    z-index:99999;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:70px;
    background-color:#003366;
    transition:height .2s;
`

const HeaderLinks = styled.div`
    text-align: left;
    margin: 21px 0px 0px 160px;
    position: absolute;
    font-size: 20px;
        a{
            font-weight:700;
            color: white;
            padding: 0px 50px;
            text-decoration: none;
        }
`

const HeaderContents = styled.div`
    width:1200px;
    margin:0 auto;
    height:70px;
    .lang_navi {
        float: right;
        position: relative;
        right: 20%;
        top: 50%;
        transform: translateY(-50%);
    }

    .lang_navi p {
        color: #fff;
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: 0 50%;
        padding:5px 0 5px 30px;
    }

    .lang_navi p i {
        position: relative;
        top: 2px;
        font-size: 16px;
    }

    .lang_navi ul {
        width: 200%;
        position: absolute;
        background: rgba(0, 0, 0, .8);
        padding: 10px 10px;
        margin: 5px 0 0 -20%;
        box-sizing: border-box;
        font-size: 15px;
        font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
        
    }

    .lang_navi ul.lang_off {
        display: none;
    }

    .lang_navi ul.lang_on {
        display: block;
    }

    .lang_navi ul li {
    list-style-type : none;
        cursor: pointer;
        color: #fff;
        text-indent: 30px;
        background-repeat: no-repeat;
        background-position: 0 50%;
    }

    .lang_navi ul li:first-child {
        margin: 0 0 10px;
    }

    .lang_navi ul .lang_kr {
        background-image: url(${koreanLangIcon});
    }

    .lang_navi ul .lang_en {
        background-image: url(${englishLangIcon});
    }
    .lang_navi .lang_kr {
        background-image: url(${koreanLangIcon});
    }

    .lang_navi .lang_en {
        background-image: url(${englishLangIcon});
    }
    @media (max-width: 1024px) {
        width: 100%;
        .lang_navi {
            display:none;
        }
    }
`


const Title = styled.h1`
    width:150px;
    height:100%;
    float:left;
    margin:0 60px 0 0;
    a {
        display:block;
        width:100%;
        position:relative;
        top:50%;
        transform:translateY(-50%);
        img{
            width:100%;
            vertical-align:top;
        }
    }
    @media (max-width: 1024px) {
        float:none;
        position:absolute;
        left:10px;
        top:33%;
        height: unset;
        a {
            top:0;
            transform: none;
        }
    }
`


const TitleLink = styled.a`
    display:block;
    width:100%;
    position:relative;
    top:30%;
`


const TitleImage = styled.img`
`

const MobileBars = styled.div`
    display:none;
    @media (max-width: 1024px) {
        display:block;
        position:absolute;
        right:10px;
        top:25%;
        i {
            color:#fff;
            font-size:30px;
        }
    }
`

const MobileMenu = styled.div`
    display:none;
    @media (max-width: 1024px) {
        width:55%;
        height:100vh;
        background:#036;
        position:absolute;
        display:flex;
        flex-direction: column;
        right:-55%;
        transition: right .3s;
        top:70px;
        box-sizing: border-box;
        padding:0 0 0 10px;
        &.on {
            right:0;
            transition: right .3s;
        }
        .lang_navi {
            margin:10px 0 0 0;
            display:block;
            float:none;
            top:unset;
            z-index:9;
            #langSelect {
                width:90%;
                margin:10px 0 0 0;
            }
        }
        .m {
            display:flex;
            flex-direction:column;
            .gnb {
                display:block;
                float:none;
                top:unset;
                transform: unset;
                ul {
                    display:flex;
                    flex-direction:column;
                    li {
                        float:none;
                        margin:0 0 10px 0;
                    }
                }
            }
            .account_navi {
                display:block;
                float:none;
                top:unset;
                margin:0;
                transform: unset;
                ul {
                    display:flex;
                    flex-direction:row;
                }
            }
        }
    }
`