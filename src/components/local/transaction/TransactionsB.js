import * as React from 'react'
import styled from 'styled-components';
import ReactTable from 'react-table';
import { divideBigNumbers, transformToTokenName } from '../../../utilities/helpers';
import { config } from '../../../utilities/config';
import Pagination from '../../../components/global/Pagination';

export default class TransactionsB extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.dwRecords !== this.props.dwRecords){
            this.setState({data: this.props.dwRecords});
            console.log("**********************************************");
            console.log(this.props.dwRecords);
            console.log("**********************************************");
        }
    }

    constructTime = (timestamp) => {
        let dateString = new Date(timestamp * 1000);
        return dateString.getMonth()+1+ "." + dateString.getDate() + " " + dateString.getHours() + ":" + dateString.getMinutes();
      }

    render() {
        const {TRANSACTION, OPEN_ORDERS, TRADES,ACCOUNT_TRANSACTIONS} = this.props.languageConfig;

        return this.state.isLogin ? (
          <Transaction>
            <div className="table table-hover">
              <ReactTable
                PaginationComponent={Pagination}
                data={this.state.data}
                columns={[
                        {
                            Header: ACCOUNT_TRANSACTIONS.TYPE,
                            id: ACCOUNT_TRANSACTIONS.TYPE,
                            class: "headerW",
                            accessor: (d) => d.isDeposit ? <span style={{color:"red"}}>{ACCOUNT_TRANSACTIONS.DEPOSIT}</span> : <span style={{color:"blue"}}>{ACCOUNT_TRANSACTIONS.WITHDRAW}</span>
                        },
                        {
                            Header: OPEN_ORDERS.INSTRUMENT_TEXT,
                            id: OPEN_ORDERS.INSTRUMENT_TEXT,
                            class: "headerW",
                            accessor: d => transformToTokenName(+d.prCode).productName
                        },
                        {
                            Header: TRADES.QUANTITY_TEXT,
                            id: TRADES.QUANTITY_TEXT,
                            class: "headerW",
                            accessor:"qtys"
                        },
                        // {
                        //     Header: OPEN_ORDERS.PRICE_TEXT,
                        //     id: OPEN_ORDERS.PRICE_TEXT,
                        //     class: "headerW",
                        //     accessor: "price"
                        // },{
                        //     Header: OPEN_ORDERS.REMAINING_TEXT,
                        //     id: OPEN_ORDERS.REMAINING_TEXT,
                        //     class: "headerW",
                        //     accessor: OPEN_ORDERS.REMAINING_TEXT
                        // },
                        {
                            Header: OPEN_ORDERS.TIME_TEXT,
                            id: OPEN_ORDERS.TIME_TEXT,
                            class: "headerW",
                            accessor: d => this.constructTime(+d.timestamp)
                        },
                        // {
                        //     Header: OPEN_ORDERS.CANCEL,
                        //     id: OPEN_ORDERS.CANCEL,
                        //     class: "headerW",
                        //     accessor: d => <button>Cancel</button>
                        // },

                    ]}
                defaultPageSize={10}
                className="-striped -highlight"
              />

            </div>
          </Transaction>
        ) : <div className="no-data-wrap"><p>{TRANSACTION.LOGIN_REQUIRED}</p></div>;
    }
}

const Transaction = styled.div`
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
            
        }
    }
    .-pagination{
        box-shadow:unset;
        border-top:none;
    }
  }
`
