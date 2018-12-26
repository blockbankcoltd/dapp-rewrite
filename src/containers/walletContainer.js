import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import {isMobile} from "react-device-detect";
import { Link } from 'react-router-dom';
import Actions from '../actions/index';
import ModalA from "../components/local/wallet/ModalA";

class WalletContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            notice: true,
            auth: false,
            balances: [],
            depositAmount: 0,
            showPrompt: false,
            open : false
        };

        this.called = false
    }


    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };


    componentDidMount() {
        this.props.getMyAccountId();
        this.props.getBalance();
    }

    // componentDidUpdate = (prevProps) => {
    //     if(this.props.balance !== prevProps.balance){
    //         let _array = [];
    //         this.props.balance.available.forEach( (o, i) => {
    //             _array.push({
    //                 name: o.,
    //                 hold: "",
    //                 total: ""
    //             });
    //         })
    //         this.setState({balances: _array});
    //     }
    // }

    callFunction(id) {
        if(id && this.called === false){
            // this.props.getMyOrders();
            // this.props.getBalance(+id);
            this.called = true;
        }
    }

    deposit = (e, cellInfo) => {
        let amount = window.prompt("Enter the deposit amount");
        let tokenObj = cellInfo.original;
        
        if(amount !== null && tokenObj.name === 'ETH'){
            this.props.depositEth(amount);
            
        }else if(amount !== null && tokenObj.name !== 'ETH'){
            console.log("Token address --> ", tokenObj);
            this.props.depositToken(tokenObj.tokenAddress, amount);
        }else{
            console.log("Cancelled")
        }
    }

    withdraw = (e, cellInfo) => {
        let amount = window.prompt("Enter the deposit amount");
        let tokenObj = cellInfo.original;
        
        if(amount !== null && tokenObj.product === 'ETH'){
            this.props.withdrawEth(amount);
            
        }else if(amount !== null && tokenObj.product !== 'ETH'){
            this.props.withdrawToken(tokenObj.tokenAddress, amount);
        }else{
            console.log("Cancelled")
        }
    }


    renderEditable(cellInfo, flag) {
        if (flag === "deposit") {
            return <div><button onClick={(e) => this.deposit(e, cellInfo)} type="button">Deposit</button></div>
        } else {
            return <div><button onClick={(e) => this.withdraw(e, cellInfo)} type="button">Withdraw</button></div>
        }
    }

    renderTable() {
        const { WALLET } = this.props.languageConfig;
        return(
          <ReactTable
            data={this.props.balance}
            columns={[
                {
                    Header: WALLET.COIN_NAME,
                    id: "product",
                    accessor: "name"
                },
                {
                    Header: WALLET.TOTAL,
                    id: "total_balance",
                    accessor: d => d.total.toString()
                },
                {
                    Header: WALLET.AVAILABLE,
                    id: "hold",
                    accessor: d => d.hold.toString()
                },
                {
                    Header: WALLET.IN,
                    id: "deposit_buttons",
                    // accessor: d => <div><button type="button">Deposit</button></div>,
                    Cell: (d) => this.renderEditable(d, "deposit")
                },
                {
                    // Header: "Pending Deposits",
                    id: "withdraw_buttons",
                    // accessor: d => <div><button type="button">Withdraw</button></div>,
                    Cell: (d) => this.renderEditable(d, "withdraw")
                }

            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        );
    }

    render() {
        const { WALLET } = this.props.languageConfig;
        // this.callFunction(this.props.accountId);

        return (
          <Wallet>
            <section className="main" role="">
              <div id="wallet" className="wallet_wrap">
                  <button type="button" onClick={this.onOpenModal}>모달test</button>
                  <ModalA open={this.state.open} onClose={this.onCloseModal}>
                      <div>test modal</div>
                  </ModalA>
                <div className="container">
                  <div className="page_link">
                    <ul>
                      <li className="active">
                        <Link to="/wallet">{WALLET.DEPOSIT}</Link>
                      </li>
                      <li><Link to="/transactionDetails">{WALLET.ORDERS}</Link></li>
                    </ul>
                  </div>

                  <div className="asset_balance">

                    <div>
                      <div className="tab_list" />
                      <div className="wallet_info">
                        <h3>

                          <div className="first">{WALLET.TOTAL_ASSET}</div>

                          <div className="second">
                            <strong id="balanceTxt">0</strong>
                            <span className="krw"> KRW</span>
                          </div>
                        </h3>

                      </div>
                      {this.renderTable()}
                    </div>

                    {/* onClick={(e) => {
                                                e.target.className.indexOf('market-button') !== -1 && e.target.className.indexOf('marketLOCUS') === -1
                                                && setTimeout(() => {Router.push('/exchange');
                                                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                                                }, 500)
                                            }} */}
                    <div className="balances_list">
                      <div className="total_balance" />
                      <div className="products_list_balances">
                        <div className="row2">
                          <div className="balance">
                            <div
                                    className="balances_name"
                                    onMouseEnter={() => this.mouseEnter('name')}
                                    onMouseLeave={this.mouseLeave}
                                  />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Wallet>
        )
    }
}


const mapStateToProps = (state) => ({
    balance: state.smartContract.balance,
    myOrders: state.smartContract.myOrders,
    accountId: state.smartContract.accountId
})

const mapDispatchToProps = (dispatch) => {
    return {
        getBalance: (id) => dispatch(Actions.smartContract.getBalanceRequest(id)),
        depositEth: (amt) => dispatch(Actions.smartContract.placeDepositEthRequest(amt)),
        withdrawEth: (amt) => dispatch(Actions.smartContract.placeWithdrawEthRequest(amt)),
        depositToken: (address, amount) => dispatch(Actions.smartContract.placeDepositTokenRequest(address, amount)),
        withdrawToken: (address, amount) => dispatch(Actions.smartContract.placeWithdrawTokenRequest(address, amount)),
        getMyOrders: () => dispatch(Actions.smartContract.getMyOrdersRequest()),
        getMyAccountId : () => dispatch(Actions.smartContract.getMyAccountIdRequest())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WalletContainer));


const Wallet = styled.div`
    background:#fff;
    width:100%;
    padding:55px 0 ;
    .wallet_wrap{
    padding:55px 0 0 0;
    }
    .main {
        width:1200px;
        margin:0 auto;
    }

    .page_link {
        width: 100%;
        overflow: hidden;
        margin: 0 0 80px;
        ul {
            display:flex;
            flex-direction: row;
            list-style: none;
            padding-inline-start:unset;
            li {
                width:50%;
                text-align:center;
                padding:10px 0;
                a {
                    font-size:18px;
                    font-weight:700;
                    color : #999999;
                    text-decoration:none;
                }
                &.active {
                    border-bottom: 3px solid #003366;
                    a {
                        color: #003366;
                    }
                }
            }
        }
    }
    
    .wallet_info {
        width: 100%;
        overflow: hidden;
        margin: 0 0 80px;
        h3 {
            padding: 10px 40px;
            display: table;
            border: 1px solid #ccc;
            margin: 0 auto;
            font-size: 26px;
            font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
            text-align: center;
            font-weight: bold;
            line-height: 34px;
            width:600px;
            .first {
                width:40%;
                float:left
            }
            .second {
                width:60%;
                float:left;
                strong {
                    font-size: 30px;
                    color: #ED1C24;
                    font-weight: 900;
                    // margin-left: 50px;
                }
                .krw {
                    font-size: 24px;
                }
            }
        }
    }
    
    .wallet_info2 {
        h5 {
            padding: 20px 60px;
            display: table;
            margin: 0 auto;
            font-size: 20px;
            color: red;
            font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
            text-align: center;
            font-weight: bold;
        }
    }
    
    .asset_balance {
        width: 100%;
        overflow: hidden;
        .ap-header-actions {
            width: 100%;
            overflow: hidden;
        }
        .ap-title {
            display:none;
        }
        .tab_list {
            float: right;
            margin: 0 0 20px;
            span {
                display: block;
                background: #999;
                color: #fff;
                padding: 5px 10px;
                float: left;
                cursor: pointer;
                margin-left: 10px;
                &:first-child {
                    margin-left: 0;
                }
                &.active {
                    background: #036;
                }
            }
        }
        .tit_list {
            width: 100%;
            overflow: hidden;
            border-bottom: 2px solid #036;
            padding: 5px 0;
            ul {
                display:flex;
                flex-direction: row;
                place-content:center flex-start;
                justify-content: flex-start;
                align-items:center;
                height:40px;
                margin-block-start: unset;
                margin-block-end: unset;
                li {
                list-style-type:none;
                    font-size: 18px;
                    font-weight: 700;
                    box-sizing: border-box;
                    color:#1a1a1a;
                    padding:8px 0;
                    text-align: center;
                    width:27%;
                    &.coinName{
                        width:15%;
                    }
                    &.totalBalance {
                        width:23%;
                    }
                    &.hold {
                        width:18%;
                    }
                    &.pending {
                        width:25%;
                    }
                }
            }
        }
        .ap-balances {
            width: 100%;
            overflow: hidden;
            .balances_list {
                width: 100%;
                overflow: hidden;
                border-bottom: 1px solid #cbcbcb;
                max-height:48px;
                height:48px;
                &:nth-child(even) {
                    background:#f2f2f2;
                }
                .row2 {
                    height:100%;
                    display:flex;
                    flex-direction: row;
                    place-content:center flex-start;
                    align-items:center;
                    justify-content: flex-start;
                    .currency-name {
                        background-repeat: no-repeat;
                        background-position: 5px 50%;
                        padding-left: 35px;
                        font-size: 18px;
                        font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                        font-weight: 700;
                        &.long{
                          letter-spacing: -1.5px;
                        }
                    }
                    .balances_name {
                        width: 23%;
                        box-sizing: border-box;
                        padding:0 0 0 20px;
                    }
                    .balances_num {
                        width: 23%;
                        text-align: center;
                        .coinAmount {
                            display:flex;
                            flex-direction:row;
                            place-content:center;
                            align-items: center;
                            justify-content: center;
                            p {
                                text-align:right;
                                width:65%;
                                margin:0 5% 0 0;
                                font-size:15px;
                                color:#036;
                                font-weight: bold;
                            }
                            strong {
                                text-align:left;
                                width:30%;
                                color:#1a1a1a;
                            }
                        }
                        .cointoKRW {
                            display:flex;
                            flex-direction:row;
                            place-content:center;
                            align-items: center;
                            justify-content: center;
                            font-size:12px;
                            color:#666;
                            p {
                                text-align:right;
                                width:65%;
                                margin:0 5% 0 0;
                                font-weight: bold;
                            }
                            strong {
                                text-align:left;
                                width:30%;
                            }
                        }
                    }
                    .balances_hold {
                        width: 25%;
                        text-align: center;
                        font-weight: bold;
                    }
                    .balances_wait {
                        width: 25%;
                        text-align: center;
                        font-weight: bold;
                    }
                    .balances_btn {
                        width: 27%;
                        text-align: center;
                        button {
                            border:1px solid #dadada;
                            background: #fff;
                            border-radius: 5px;
                            font-weight:bold;
                            padding: 0 7px;
                            height:30px;
                            font-size:16px;
                            min-width:60px;
                            cursor:pointer;
                            outline: 0;
                            font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                        }
                        .deposit-button {
                            color: #0066cc;
                            margin-left: 10px;
                        }
                        .market-button {
                            color: #003366;
                            margin-left: 10px;
                        }
                        .withdraw-button {
                            color: #ff3333;
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
    }
    @media(max-width: 1024px) {
        width:100%;
        overflow:hidden;
        padding:20px 0 0 0;
        .main {
            width: 100%;
            .container {
                .page_link {
                    margin-bottom: 2rem;
                    ul {
                        li {
                            padding: 0;
                            a {
                                font-size: 1.2rem;
                            }
                        }
                    }
                }
                .asset_balance {
                    .wallet_info {
                        width: 100%;
                        margin: 0 0 2rem;
                        h3 {
                            width: 99%;
                            padding:0.6rem 0;
                            font-size: 1.2rem;
                            .idChk {
                                margin-right: 1rem;
                            }
                            .first {
                                width:100%;
                                float:left;
                            }
                            .second{
                                width:100%;
                                float:left;
                                 #balanceTxt {
                                    font-size: 1.2rem;
                                    margin: 0;
                                    // display: block;
                                    // width: 50%;
                                    text-align: right;
                                    // float:left;
                                }
                                .krw {
                                    font-size: 1.2rem;
                                    // display: block;
                                    // width: 45%;
                                    text-align: left;
                                    padding-left:0;
                                    // padding-left: 1rem;
                                    // float:left;
                                }
                            }
                        }
                    }
                    .tit_list {
                        ul {
                            li {
                                padding: 0;
                                font-size: 0.9rem;
                                font-weight: bold;
                                width:25%;
                            }
                        }
                    }
                    .balances_list {
                        // max-height: 150px;
                        max-height: 100%;
                        height: auto;
                        padding-top: 0.8rem;
                        padding-bottom: 0.3rem;
                        box-sizing: border-box;
                        .row2 {
                            flex-wrap: wrap;
                            .balance{
                                flex:1;align-self:flex-start;
                                
                                .wallet_title{
                                    align-self:flex-start;font-size:1.1rem;font-weight:bold;color:gray;line-height:1.5rem;
                                }
                                
                                .wallet_cnt{
                                    align-self:flex-start;margin:0.2rem 0 0 0;font-size:1.2rem;line-height:1.25rem;
                                }
                            }
                            .balances_name {
                                width: 100%;
                                // margin: 1rem 0 0 0;
                                padding:0 0 0 1rem;
                                text-align:left;
                                span {
                                    font-size: 1.2rem;
                                    // padding-left:2.5rem;
                                    padding-left:0;
                                    line-height:1.5rem; 
                                    display: block;
                                }
                            }
                            .balances_num {
                                width: 100%;
                                margin: 1rem 0 0 0;
                                padding:0 0 0 1rem;
                                line-height: 1.3rem;
                                text-align:left;
                                .coinAmount {
                                    justify-content: left;
                                    p, strong {
                                        font-size: 1.1rem;
                                    }
                                    p {
                                        width:auto;
                                    }
                                    strong {
                                        width:auto;
                                    }
                                }
                                .cointoKRW {
                                    justify-content: left;
                                    p, strong {
                                        font-size: 1rem;
                                    }
                                    p {
                                        width:auto;
                                    }
                                    strong {
                                        width:auto;
                                    }
                                }
                            }
                            .balances_hold {
                                width: 100%;
                                // margin: 1rem 0 0 0;
                                padding:0 0 0 1rem;text-align:left;font-weight:normal;
                                
                                .tip{
                                    font-size:0.8rem;
                                }
                            }
                            .balances_wait {
                                width: 100%;
                                margin: 1rem 0 0 0;
                                padding:0 0 0 1rem;text-align:left;font-weight:normal;
                            }
                            .balances_btn {
                                width: 100%;
                                text-align: right;
                                margin-top: 1rem;
                                margin-bottom: 0.5rem;
                                padding-right: 1rem;
                                button {
                                    min-width: 0;
                                    width: 7rem;
                                    height:2rem;
                                    font-size:1rem;
                                }
                                .deposit-button {
                                    margin: 0;
                                }
                                .withdraw-button {
                                    margin: 0;
                                    margin-left: 0.5rem;
                                }
                                .market-button {
                                    margin: 0;
                                    margin-left: 0.5rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
