import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import modaltest1 from "../../../assets/images/modaltestimg.png";
import modaltest2 from "../../../assets/images/modaltestimg2.png";
import modalupdown_1 from "../../../assets/images/modalupdown_1.png";
import modalupdown_2 from "../../../assets/images/modalupdown_2.png";
import modalupdown_3 from "../../../assets/images/modalupdown_3.png";
import modalupdown_4 from "../../../assets/images/modalupdown_4.png";

export default class ModalContent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            topArrow : modalupdown_1,
            bottomArrow : modalupdown_3,
            gasTopArrow : modalupdown_1,
            gasBottomArrow : modalupdown_3
        }
    }

    changeArrow(direction, isGas) {
        if(isGas){
            if(direction === "up"){
                this.setState({
                    gasTopArrow : modalupdown_2,
                    gasBottomArrow : modalupdown_3
                })
            } else if(direction === "down"){
                this.setState({
                    gasTopArrow : modalupdown_1,
                    gasBottomArrow : modalupdown_4
                })
            } else {
                this.setState({
                    gasTopArrow : modalupdown_1,
                    gasBottomArrow : modalupdown_3
                })
            }
        } else {
            if(direction === "up"){
                this.setState({
                    topArrow : modalupdown_2,
                    bottomArrow : modalupdown_3
                })
            } else if(direction === "down"){
                this.setState({
                    topArrow : modalupdown_1,
                    bottomArrow : modalupdown_4
                })
            } else {
                this.setState({
                    topArrow : modalupdown_1,
                    bottomARrow : modalupdown_3
                })
            }
        }
    }

    render() {
        const { type, close } = this.props;
        const { topArrow, bottomArrow, gasTopArrow, gasBottomArrow } = this.state;
        return(
            <React.Fragment>
                {
                    type === "deposit" && <ModalBoxB>
                        <div className="modaltitle">Deposit <span>ETH</span></div>
                        <div className="modal_inbox_B">
                            <div><img src={modaltest1}/></div>
                            <ul>
                                <li><div>
                                    Amount
                                    <div className='UpDownright_1'>ETH</div>
                                    <div className='Data_text'>
                                        <input
                                            type='number'
                                        />
                                    </div>
                                </div></li>
                                <li>
                                    <button>25%</button>
                                    <button>50%</button>
                                    <button>75%</button>
                                    <button>100%</button>
                                </li>
                            </ul>
                            <div>
                                <div className='ul_div'>Gas Price (GWEI)
                                    <div className='UpDownright_2'>
                                        <img className="Upbtn_2" src={topArrow} onClick={() => this.changeArrow("up")}/>
                                        <img className="Downbtn_2" src={bottomArrow} onClick={() => this.changeArrow("down")}/>
                                    </div>
                                    <div className="Data_Deposit">0</div>
                                </div>
                            </div>
                            <button className='settings'>Settings</button>
                            <div className='settingText'>Gas Fee &#60; 0.00000000 ETH</div>
                            <div>
                                <button className='cancel' onClick={close}>Cancel</button>
                                <button className='save'>Deposit</button>
                            </div>
                        </div>
                    </ModalBoxB>
                }
                {
                    type === "withdraw" &&  <ModalBoxC>
                        <div className="modaltitle">Withdraw <span>ETH</span></div>
                        <div className="modal_inbox_C">
                            <div><img src={modaltest2}/></div>
                            <ul>
                                <li><div>
                                    Amount
                                    <div className='UpDownright_1'>ETH</div>
                                    <div className='Data_text'>0.00000000</div>
                                </div></li>
                                <li>
                                    <button>25%</button>
                                    <button>50%</button>
                                    <button>75%</button>
                                    <button>100%</button>
                                </li>
                                <li className='btnunder_text'>* Minimum withdrawal amount (equivalent): 0.02062500 EHT</li>
                            </ul>
                            <div>
                                <div className='ul_div'>Gas Price (GWEI)
                                    <div className='UpDownright_2'>
                                        <img className="Upbtn_2" src={topArrow} onClick={() => this.changeArrow("up")}/>
                                        <img className="Downbtn_2" src={bottomArrow} onClick={() => this.changeArrow("down")}/>
                                    </div>
                                    <div className="Data_Deposit">0</div>
                                </div>
                            </div>
                            <button className='settings'>Settings</button>
                            <div className='settingText'>Gas Fee &#60; 0.00000000 ETH</div>
                            <div>
                                <button className='cancel' onClick={close}>Cancel</button>
                                <button className='save'>Withdraw</button>
                            </div>
                        </div>
                    </ModalBoxC>
                }
                {
                    type === "gas" && <ModalBoxA>
                        <div className="modaltitle">Settings <span>Gas Fee</span></div>
                        <div className="modal_inbox_A">
                            <ul>
                                <li><div>
                                    Gas Price (GWEI)
                                    <div className='UpDownright_1'>
                                        <img className="Upbtn_1" src={topArrow} onClick={() => this.changeArrow("up")}/>
                                        <img className="Downbtn_1" src={bottomArrow} onClick={() => this.changeArrow("down")}/>
                                    </div>
                                    <div className='Data_text'>0</div>
                                </div></li>
                                <li>네트워크 성공률을 기반으로 적합한 가스 가격을 계산합니다.</li>
                            </ul>
                            <ul>
                                <li><div>
                                    Gas Limit
                                    <div className='UpDownright_2'>
                                        <img className="Upbtn_2" src={gasTopArrow} onClick={() => this.changeArrow("up", true)}/>
                                        <img className="Downbtn_2" src={gasBottomArrow} onClick={() => this.changeArrow("down", true)}/>
                                    </div>
                                    <div className='Data_text'>0</div>
                                </div></li>
                                <li>네트워크 성공률을 기반으로 적합한 가스 리밋을 계산합니다.</li>
                            </ul>
                            <div>
                                <button className='cancel' onClick={close}>Cancel</button>
                                <button className='save'>Save</button>
                            </div>
                        </div>
                    </ModalBoxA>
                }
            </React.Fragment>
        )
    }
}

ModalContent.propTypes = {
    type : PropTypes.string,
    close : PropTypes.func
};

ModalContent.defaultProps = {
    type : "deposit",
    close : () => {}
};



const ModalBoxA = styled.div`
  width:350px;
  height:400px;
    .modaltitle{
    border-bottom:1px solid #364958;
    height:56px;
    font-size:25px;
    text-align:center;
    font-weight:500;
    color:#364958;
    width:390px;
    margin-left:-20px;
        span{
            color:#3c92ca;
        }
    }
    .modal_inbox_A{
        padding:13px;
        font-weight:600;
        ul{
            list-style: none;
            padding-inline-start:unset;
            margin-bottom:47px;
            li{
                color:#808080;
                line-height:42px;
                font-size:12px;
                :first-child{
                    border-bottom:1px solid #e9e9e9;
                    font-size:18px;
                    color:#364958;
                }
                .Data_text{
                    float:right;
                    margin-right:7px;
                    font-size:26px;
                }
                .UpDownright_1{
                    float:right;
                    img{
                        cursor:pointer;
                    }
                    .Upbtn_1{
                        vertical-align:9px;
                        &:focus{
                            content:url('../assets/images/modalupdown_2.png');
                        }
                    }
                    .Downbtn_1{
                        vertical-align:-4px;
                        right:10px;
                        position:relative;
                    }
                }
                .UpDownright_2{
                    float:right;
                    img{
                        cursor:pointer;
                    }
                    .Upbtn_2{
                        vertical-align:9px;
                    }
                    .Downbtn_2{
                        vertical-align:-4px;
                        right:10px;
                        position:relative;
                    }
                }
            }
        }
        button{
            width:145px;
            height:40px;
            font-size:20px
            border:none;
            cursor:pointer;
            &:focus{outline:0;}
            &.cancel{
                color:#364958;
                background:#e9e9e9;
            }
            &.save{
                float:right;
                color:#fff
                background:#364958;
            }
        }
    }
  `

const ModalBoxB = styled.div`
  width:410px;
  height:400px;
    .modaltitle{
    border-bottom:1px solid #364958;
    height:56px;
    font-size:25px;
    text-align:center;
    font-weight:500;
    color:#364958;
    width:449px;
    margin-left:-20px;
        span{
            color:#3c92ca;
        }
    }
    .modal_inbox_B{
        padding:13px;
        font-weight:600;
        ul{
            list-style: none;
            padding-inline-start:unset;
            margin-bottom:47px;
            margin-top:30px;
            li{
                color:#808080;
                line-height:42px;
                font-size:12px;
                margin-top:12px;
                button{
                    font-size:15px;
                    font-weight:600;
                    width:86px;
                    height:26px;
                    background:#e9e9e9;
                    color:#364958;
                    border-radius:3px;
                    margin-left:13px;
                    :first-child{
                        margin-left:unset;
                    }
                    &:focus{
                        background:#3c92ca;
                        color:#fff;
                    }
                }
                :first-child{
                    border-bottom:1px solid #e9e9e9;
                    font-size:18px;
                    color:#364958;
                }
                .Data_text{
                    float:right;
                    margin-right:15px;
                    font-size:26px;
                    line-height:36px;
                }
                .UpDownright_1{
                    float:right;
                    img{
                        cursor:pointer;
                    }
                    .Upbtn_1{
                        vertical-align:9px;
                    }
                    .Downbtn_1{
                        vertical-align:-4px;
                        right:10px;
                        position:relative;
                    }
                }
            }
        }
        .ul_div{
            border-bottom:1px solid #e9e9e9;
            padding:5px 0px;
            font-size:18px;
            color:#364958;
            width:288px;
            float:left;
            .Data_Deposit{
                float:right;
                margin-right:10px;
                margin-top:-7px;
                font-size:26px;
                color:#364958;
            }
            .UpDownright_2{
                float:right;
                img{
                        cursor:pointer;
                    }
                    .Upbtn_2{
                        vertical-align:9px;
                    }
                    .Downbtn_2{
                        vertical-align:-4px;
                        right:10px;
                        position:relative;
                    }
            }
        }
        .settings{
            font-size:15px;
            color:#364958;
            background:#e9e9e9;
            width:86px;
            height:39px;
            font-weight:600;
            border-radius:3px;
            margin-left:10px;
        }
        .settingText{
            font-size:13px;
            font-weight:600;
            color:#808080;
            padding:12px 0px;
            margin-bottom:40px;
        }
        button{
            width:180px;
            height:44px;
            font-size:20px;
            border:none;
            cursor:pointer;
            &:focus{outline:0;}
            &.cancel{
                color:#364958;
                background:#e9e9e9;
            }
            &.save{
                float:right;
                color:#fff
                background:#364958;
            }
        }
    }
  `

const ModalBoxC = styled.div`
  width:410px;
  height:400px;
    .modaltitle{
    border-bottom:1px solid #364958;
    height:56px;
    font-size:25px;
    text-align:center;
    font-weight:500;
    color:#364958;
    width:449px;
    margin-left:-20px;
        span{
            color:#3c92ca;
        }
    }
    .modal_inbox_C{
        padding:13px;
        font-weight:600;
        ul{
            list-style: none;
            padding-inline-start:unset;
            margin-bottom:47px;
            margin-top:30px;
            .btnunder_text{
                line-height:0px;
                margin-top:7px;
                color:#3c92ca;
                font-size:12px;
                font-weight:700;
            }
            li{
                color:#808080;
                line-height:42px;
                font-size:12px;
                margin-top:12px;
                button{
                    font-size:15px;
                    font-weight:600;
                    width:86px;
                    height:26px;
                    background:#e9e9e9;
                    color:#364958;
                    border-radius:3px;
                    margin-left:13px;
                    :first-child{
                        margin-left:unset;
                    }
                    &:focus{
                        background:#3c92ca;
                        color:#fff;
                    }
                }
                :first-child{
                    border-bottom:1px solid #e9e9e9;
                    font-size:18px;
                    color:#364958;
                }
                .Data_text{
                    float:right;
                    margin-right:15px;
                    font-size:26px;
                    line-height:36px;
                }
                .UpDownright_1{
                    float:right;
                    img{
                        cursor:pointer;
                    }
                    .Upbtn_1{
                        vertical-align:9px;
                    }
                    .Downbtn_1{
                        vertical-align:-4px;
                        right:10px;
                        position:relative;
                    }
                }
            }
        }
        .ul_div{
            border-bottom:1px solid #e9e9e9;
            padding:5px 0px;
            font-size:18px;
            color:#364958;
            width:288px;
            float:left;
            .Data_Deposit{
                float:right;
                margin-right:10px;
                margin-top:-7px;
                font-size:26px;
                color:#364958;
            }
            .UpDownright_2{
                float:right;
                img{
                        cursor:pointer;
                    }
                    .Upbtn_2{
                        vertical-align:9px;
                    }
                    .Downbtn_2{
                        vertical-align:-4px;
                        right:10px;
                        position:relative;
                    }
            }
        }
        .settings{
            font-size:15px;
            color:#364958;
            background:#e9e9e9;
            width:86px;
            height:39px;
            font-weight:600;
            border-radius:3px;
            margin-left:10px;
        }
        .settingText{
            font-size:13px;
            font-weight:600;
            color:#808080;
            padding:12px 0px;
            margin-bottom:40px;
        }
        button{
            width:180px;
            height:44px;
            font-size:20px;
            border:none;
            cursor:pointer;
            &:focus{outline:0;}
            &.cancel{
                color:#364958;
                background:#e9e9e9;
            }
            &.save{
                float:right;
                color:#fff
                background:#364958;
            }
        }
    }
  `


