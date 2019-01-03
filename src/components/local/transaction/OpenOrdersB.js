import * as React from 'react'
import styled from 'styled-components';
import ReactTable from 'react-table';
import { transformToTokenName } from '../../../utilities/helpers';
import Pagination from '../../../components/global/Pagination';

export default class OpenOrdersB extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }
    }

    cancelOrder = (event, cellInfo) => {
        let dataObject = cellInfo.original;
        console.log("Cancelling Order -> ", dataObject, this.props.data);
        return this.props.cancelOrder(dataObject);
    }

    render() {
        const { TRANSACTION, OPEN_ORDERS } = this.props.languageConfig;
        /* 
            orderID: obj,
            instrumentPair: transformToTokenName(myOrders.prTrade[i]).productName + '/'+ transformToTokenName(myOrders.prBase[i]).productName,
            prices: convertPriceArray(myOrders.prices),
            qtys: convertVolumeArray(myOrders.qtys, transformToTokenName(myOrders.prTrade[i]).decimal),
            sells: myOrders.sells[i]
        */
        console.log("DATA IN aaaprivate trades --> ", this.props.data)
        return this.state.isLogin ? (
            <OpenOrder>
                <div className="table table-hover">
                    <ReactTable
                        PaginationComponent={Pagination}
                        data={this.props.data}
                        columns={[
                            {
                                Header: OPEN_ORDERS.INSTRUMENT_TEXT,
                                id: OPEN_ORDERS.INSTRUMENT_TEXT,
                                class: "headerW",
                                accessor: "instrumentPair"
                            },
                            {
                                Header: OPEN_ORDERS.TYPE_TEXT,
                                id: OPEN_ORDERS.TYPE_TEXT,
                                class: "headerW",
                                accessor: (d) => d.sells ? <span style={{color:"blue"}}>{OPEN_ORDERS.SELL}</span>:<span style={{color:"red"}}>{OPEN_ORDERS.SELL}</span>
                            }, {
                                Header: OPEN_ORDERS.TOTAL_TEXT,
                                id: OPEN_ORDERS.TOTAL_TEXT,
                                class: "headerW",
                                accessor: "qtys"
                            },{
                                Header: OPEN_ORDERS.PRICE_TEXT,
                                id: OPEN_ORDERS.PRICE_TEXT,
                                class: "headerW",
                                accessor: "prices"
                            },
                            //  {
                            //     Header: OPEN_ORDERS.REMAINING_TEXT,
                            //     id: OPEN_ORDERS.REMAINING_TEXT,
                            //     class: "headerW",
                            //     accessor: OPEN_ORDERS.REMAINING_TEXT
                            // }, {
                            //     Header: OPEN_ORDERS.TIME_TEXT,
                            //     id: OPEN_ORDERS.TIME_TEXT,
                            //     class: "headerW",
                            //     accessor: OPEN_ORDERS.TIME_TEXT
                            // }, 
                            {
                                Header: OPEN_ORDERS.CANCEL,
                                id: OPEN_ORDERS.CANCEL,
                                class: "headerW",
                                Cell: (cellInfo) => <button onClick={(e) => this.cancelOrder(e, cellInfo)} className="Cancel_BTN" type="button">{OPEN_ORDERS.CANCEL}</button>
                            },

                        ]}
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />

                </div>
            </OpenOrder>
        ) : <div className="no-data-wrap"><p>{TRANSACTION.LOGIN_REQUIRED}</p></div>;
    }
}

const OpenOrder = styled.div`
   .Cancel_BTN{
    width:60px;
    height:30px;
    font-size:13px;
    font-weight:600;
    background:#f2f2f2;
    border:none;
    outline:none;
    cursor:pointer;
    border-radius:6px;
    color:#364958;
    padding:unset;
    &:focus{
        background:#364958;
        color:#fff;
    }
   }
   .ReactTable{
        border:none;
        .rt-thead{
            .rt-th{
               outline:none;
            }
            .rt-th.-sort-asc{
               box-shadow:none;
            }
            .rt-th.-sort-desc{
               box-shadow:none;
            }    
        }
        .rt-thead.-header{
            font-size:18px;
            font-weight:600;
            color:#1a1a1a;
            box-shadow:none;
            border-bottom:2px solid #364958;
            .rt-th{
                border:none;
            }
        }
        .rt-tbody{
            .rt-tr.-odd{
                background:#fff;
            }
            .rt-tr.-padRow{
                background:#fff;
            }
            .rt-tr-group{
                border-bottom:none;
                background:#fff;
                &:hover{
                    background:rgb(249, 251, 253);
                }
            }
            .rt-td{
                border:none;
                border-bottom:1px solid #d9d9d9;
                font-size:15px;
                font-weight:600;
                padding:14px 5px;
                color:#1a1a1a;
                &:last-child{
                    padding:9px 5px;    
                }
            }
        }
        .-pagination{
            box-shadow:unset;
            border-top:none;
            margin-top:50px;
        }
   }
`
