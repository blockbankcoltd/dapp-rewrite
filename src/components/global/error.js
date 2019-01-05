import * as React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import dexhiLogo from "../../assets/images/DexHi_logo_1.png";
import metamask from "../../assets/images/metamask.png";

export default class Error extends React.Component {
    constructor(props) {
        super(props);
        this.activeButton = this.activeButton.bind(this);
    }

    async activeButton(route) {
        if(route === "https://metamask.io") {
            window.open(route);
        } else if(route !== "login"){
            window.location.href = route;
        } else {
            try {
                // Request account access if needed
                await window.ethereum.enable();
                // Acccounts now exposed
                window.location.reload();
            } catch (error) {
                alert('Y')
            }
        }

    }

    render() {
        const {footMsgKr, footMsgEn, msgKr, msgEn, route, buttonMsgKr, buttonMsgEn, infoOn} = this.props;
        return (
            <ErrorComp>
                <div className="cont">
                    <img className="logo" src={dexhiLogo}/>
                    <p className="logoText">Operate Your Funds In A Decentralized Way</p>
                    <p className="msg">{msgKr}</p>
                    <p className="msg">{msgEn}</p>
                    {infoOn && <div className="info">
                        <div className="title"><img className="metamask" src={metamask} alt=""/><p className="info_text">란?</p></div>
                        <div className="kr"><p>MetaMask는 이더리움(ETH) 전자 지갑으로, 이더리움 송금과 토큰을 관리할 수 있는 Chrome 확장 프로그램입니다. Chrome, Firefox, Opera 브라우저를 지원합니다.</p></div>
                        <div className="en"><p>MetaMask is a Google Chrome extension wallet that lets users manage and transfer their Ethereum. MetaMask is compatible with Chrome, Firefox and Opera</p></div>
                    </div>}
                    {route !== "" &&
                    <button className="errBtn" type="button" onClick={() => this.activeButton(route)}>
                        <strong>{buttonMsgKr}</strong>
                        <p>{buttonMsgEn}</p>
                    </button>
                    }
                    <p className="footMsg">{footMsgKr}</p>
                    <p className="footMsg">{footMsgEn}</p>
                </div>
            </ErrorComp>
        )
    }
}

Error.propTypes = {
    footMsgKr : PropTypes.string,
    footMsgEn : PropTypes.string,
    buttonMsgKr : PropTypes.string,
    buttonMsgEn : PropTypes.string,
    infoOn : PropTypes.bool,
    msgKr: PropTypes.string,
    msgEn: PropTypes.string,
    buttonMsg: PropTypes.string,
    route: PropTypes.string
};
Error.defaultProps = {
    footMsgKr : "",
    footMsgEn : "",
    buttonMsgKr : "",
    buttonMsgEn : "",
    infoOn : false,
    msgKr: "",
    msgEn: "",
    buttonMsg: "",
    route: "/"
};

const ErrorComp = styled.div`
    background: #fff;
    width:100%;
    padding:55px 0;
    margin-top : 55px;
    text-align: center;
    height: 500px;
    display : table;
    p {
        margin: 0;
        padding : 0;
    }
    
    .cont {
        width : 100%;
        display: table-cell;
        vertical-align: middle;
        .logo {
            width: 300px;
        }
        .logoText {
            padding: 0;
            margin: 0;
            font-size: 13px;
            color: #364985;
            margin-bottom: 30px;
        }
        .info {
            width: 454px;
            height: 115px;
            background: #f9fbfd;
            margin: 20px auto;
            padding: 15px;
            color : #666666;
            .title {
                float: left;
                width: 100%;
                img {
                    float: left;
                }
                p {
                    float: left;
                    width: 50px;
                    height: 24px;
                    line-height: 24px;
                    margin-left : 5px;
                }
            }
            .kr {
                width: 100%;
                float: left;
                margin-top : 10px;
                p {
                    font-size : 13px;
                    text-align: left;
                    font-weight : 600;
                }
            }
            .en {
                width: 100%;
                float: left;
                margin-top : 10px;
                p {
                    font-size : 11px;
                    text-align: left;
                    font-weight : 600;
                }
            }
            .info_text {
                padding: 0;
                margin: 0;
                text-align : left;
                color : #666666;
                strong {
                  letter-spacing: 0.5px;
                  margin-left: 30px;
                }
            }
        }
        .msg {
            margin-top : 10px;
            font-size: 18px;
            font-weight: bold;
            color : #1a1a1a;
        }
        .footMsg {
            margin: 0 auto;
            margin-top : 10px;
            font-size : 14px;
            color : #3c92ca;
            width: 484px;
            text-align : left;
        }
        .errBtn {
            width : 484px;
            height : 60px;
            outline : 0;
            border : 0;
            background : #2f6291;
            color : #ffffff;
            margin-top : 10px;
            cursor: pointer;
            strong {
                font-size: 20px;
            }
            p {
                font-size : 14px;
            }
        }
    }
`