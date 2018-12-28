import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { Link } from 'react-router-dom';
import Actions from '../actions/index';
import OpenOrdersB from '../components/local/transaction/OpenOrdersB';
import PrivateTradesB from '../components/local/transaction/PrivateTradesB';
import TransactionsB from '../components/local/transaction/TransactionsB';

class TransactionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            notice: true,
            auth: false,
            selectedTab: 0,
            myOrders: [],
            tabs: [
                {
                    text: "Filled Orders",
                    ap: this.props.languageConfig.TRANSACTION.ORDERSHISTORY
                },
                {
                    text: "Open Orders",
                    ap: this.props.languageConfig.TRANSACTION.OUTSTANDING
                },
                {
                    text: "Transfer History",
                    ap: this.props.languageConfig.TRANSACTION.TRANSHISTORY
                }
            ]
        };
    }

    componentDidMount() {
        this.props.getMyAccountId();
        this.props.getMyOrders();
    }

    componentDidUpdate(prevProps){
        if(this.props.myOrders !== prevProps.myOrders){
            this.setState( {
                myOrders: this.props.myOrders
            });
        }

        if(prevProps.myAccountId !== this.props.myAccountId){
            this.props.getDWRecords(this.props.myAccountId);
            this.props.fetchOrderHistory(this.props.myAccountId, 3, 1);
        }
        
        if(prevProps.orderHistory !== this.props.orderHistory){
            this.setState({orderHistory: this.props.orderHistory});
        }

        if(prevProps.dwRecords !== this.props.dwRecords){
            // let _array = [];
            // this.props.dwRecords.isDeposit.forEach( (o, i) => {
            //     _array.push({
                    // isDeposit: o,
                    // prCode: this.props.dwRecords.prCode[i],
                    // qty: this.props.dwRecords.qty[i],
                    // timestamp: new Date(this.props.dwRecords.timestamp[i] * 1000).toDateString()
            //     });
            // })
            this.setState((state, props) => { 
                return {dwRecords: this.props.dwRecords}
            });
        }
    }

    cancelOpenOrder = (data) => {
        this.props.cancelOrderRequest(data.orderID);
    }

    fetchData = (index) =>  {
        if(index === 1){
            this.props.fetchOrderHistory(this.props.myAccountId, 3, 1);
        }
        else if(index === 2){
            this.props.getMyOrders();
        }
        else if(index === 3){
            this.props.getDWRecords(this.props.myAccountId);
        }
    }

    render() {
        const { WALLET, TRANSACTION } = this.props.languageConfig;
        return (
            <Transaction>
                <section className="main" role="">
                    <div id="transactionDetails" className="wallet_wrap">
                        <div className="container">
                            <div className="page_link">
                                <ul>
                                    <li><Link to="/wallet">{WALLET.DEPOSIT}</Link></li>
                                    <li className="active">
                                        <Link
                                            to="/transactionDetails"
                                        >
                                            {WALLET.ORDERS}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <pre>{JSON.stringify(this.props.cancelledOrderStatus)}</pre>
                            <div className={`tab_container ${this.state.container}`}>
                                <div className="tab_list">
                                    <ul>
                                        {
                                            this.state.tabs.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        onClick={() => {
                                                            this.fetchData(index);
                                                            this.setState({
                                                                container: "tab_container tab" + index,
                                                                selectedTab: index
                                                            })
                                                        }}
                                                        className={`trans_tab ${this.state.selectedTab === index ? "active" : ""}`}
                                                    >
                                                        {item.ap}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className={`tab_content tab${this.state.selectedTab}`}>
                                    <div id="tab0" className="tab_cont">
                                        <PrivateTradesB languageConfig={this.props.languageConfig} data={this.props.orderHistory} />
                                    </div>
                                    <div id="tab1" className="tab_cont">
                                        <OpenOrdersB languageConfig={this.props.languageConfig} data={this.props.myOrders} cancelOrder={this.cancelOpenOrder}/>
                                    </div>
                                    <div id="tab2" className="tab_cont">
                                        <TransactionsB languageConfig={this.props.languageConfig} dwRecords={this.props.dwRecords}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Transaction>
        )
    }
}


const mapStateToProps = (state) => ({
    myOrders: state.smartContract.myOrders,
    dwRecords: state.smartContract.depositWithdrawlRecords,
    myAccountId: state.smartContract.accountId,
    cancelledOrderStatus: state.smartContract.calcelOrderStatus,
    orderHistory: state.main.orderHistory
})

const mapDispatchToProps = (dispatch) => {
    return {
        getMyOrders: () => dispatch(Actions.smartContract.getMyOrdersRequest()),
        getMyAccountId: () => dispatch(Actions.smartContract.getMyAccountIdRequest()),
        getDWRecords: (x) => dispatch(Actions.smartContract.getDWRecordsRequest(x)),
        cancelOrderRequest: (x) => dispatch(Actions.smartContract.cancelOrderRequest(x)),
        fetchOrderHistory: (x, y, z) => dispatch(Actions.global.fetchOrderHistory(x, y, z)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionContainer));


const Transaction = styled.div`
    background: #fff;
    width:100%;
    padding:55px 0;
    margin-top : 55px;
    .main{
        width:1200px;
        margin: 0 auto;
        .wallet_wrap {
            width: 100%;
            min-height: 530px;
            overflow: hidden;
            .page_link {
                width: 100%;
                overflow: hidden;
                margin: 0 0 80px;
                ul {
                    list-style: none;
                    display:flex;
                    flex-direction: row;
                    padding-inline-start:unset;
                    li {
                        width:50%;
                        text-align:center;
                        padding:10px 0;
                        a {
                            font-size:18px;
                            font-weight: 700;
                            color: #999999;
                            text-decoration: none;
                        }
                        &.active {
                            border-bottom: 3px solid #036;
                            a {
                                color: #036;
                            }
                        }
                    }
                }
            }
        }
        #transactionDetails {
            tbody {
                tr {
                    //display:none;
                }
                .tr_bb {
                    display: table-row;
                }
            }
            .tab_container {
                width: 100%;
                overflow: hidden;
                .tab_list {
                    width: 100%;
                    overflow: hidden;
                    margin: 0 0 40px;
                    ul {
                        border-top: 1px solid #ddd;
                        display: flex;
                        flex-direction: row;
                        place-content:center space-between;
                        align-items: center;
                        justify-content: space-between;
                        list-style: none;
                        padding: 0;
                        li {
                            width: 33.33%;
                            height:44px;
                            line-height:44px;
                            box-sizing: border-box;
                            text-align: center;
                            border-right: 1px solid #ddd;
                            font-size: 18px;
                            font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                            font-weight: bold;
                            color: #999999;
                            border-bottom: 1px solid #ddd;
                            cursor: pointer;
                            &:first-child {
                                border-left: 1px solid #ddd;
                            }
                            &.active {
                                color: #fff;
                                background:#036;
                                border-bottom: none;
                            }
                        }
                    }
                }
                .tab_content {
                    width: 100%;
                    overflow: hidden;
                    table {
                        width: 100%;
                        thead {
                            border-bottom: 2px solid #036;
                            tr {
                                th {
                                    font-size: 17px;
                                    font-family: "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
                                    padding: 10px 0;
                                    text-align : center;
                                    color:#1a1a1a;
                                    font-weight: 1000;
                                }
                            }
                        }
                        tbody {
                            tr {
                                td {
                                    height:48px;
                                    border-bottom: 1px solid #d9d9d9;
                                    text-align: center;
                                    font-size:15px;
                                    color:#1a1a1a;
                                    font-weight:500;
                                    &.stateRejected, &.stateCanceled {
                                        color: #e2242a;
                                    }
                                    &.stateWorking {
                                        color: #13901e;
                                    }
                                    &.stateFullyExecuted {
                                        color: #036;
                                    }
                                    &.buyFont {
                                        color: #de2026;
                                        font-weight: bold;
                                    }
                                    &.sellFont {
                                        color: #0467b4;
                                        font-weight: bold;
                                    }
                                    .btn_cancel {
                                        border:0 none;
                                        background:#f2f2f2;
                                        color:#003366;
                                        padding:0 17px;
                                        height:30px;
                                        font-size:14px;
                                        border-radius: 5px;
                                        cursor: pointer;
                                        font-weight: bold;
                                        &:hover {
                                            background:#003366;
                                            color:#ffffff;
                                        }
                                    }
                                    .TXId {
                                        cursor: pointer;
                                        text-decoration: underline;
                                    }
                                }
                            }
                        }
                    }
                    .pull-right {
                        margin: 20px 0 0;
                        float: none;
                        text-align: center;
                    }
                    .pagi {
                        overflow: hidden;
                        float: none;
                        display: table;
                        margin: 40px auto 0;
                        li {
                            display: inline-block;
                            margin: 0 7px;
                            cursor: pointer;
                            a {
                                color: #999999;
                                font-size: 15px;
                            }
                            &.active {
                                a {
                                    color: #036;
                                    font-weight:bold;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .tab_cont {
        width: 100%;
        display: none;
    }
    .tab0 {
        #tab0 {
            display:block;
        }
    }
    
    .tab1 {
        #tab1 {
            display:block;
        }
    }
        
    .tab2 {
        #tab2 {
            display:block;
        }
    }
    @media(max-width: 1024px) {
        width: 100%;
        padding:20px 0 0 0;
        .main {
            width: 100%;
            #transactionDetails {
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
                    .tab_container {
                        .tab_list {
                            margin-bottom : 1rem;
                             ul {
                                li {
                                    font-size: 1.2rem;
                                    height: 3rem;
                                    line-height: 3rem;
                                }
                            }
                        }
                        .tab_content {
                            .table-responsive {
                                overflow-x: scroll;
                                -webkit-overflow-scrolling: touch;
                                table {
                                    width:160%; 
                                    thead {
                                        tr {
                                            th {
                                                font-size: 1.2rem;
                                            }
                                        }
                                    }
                                    tbody {
                                        tr {
                                            td {
                                                font-size: 1rem;
                                            }
                                        }
                                    }
                                }
                            }
                            .pagi {
                                margin: 1rem auto;
                                li {
                                    margin: 0 0.5rem;
                                    a {
                                        font-size: 1rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
