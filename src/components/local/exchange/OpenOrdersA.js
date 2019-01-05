import * as React from 'react'
import styled from 'styled-components';
import ReactTable from 'react-table';
import { transformToTokenName } from '../../../utilities/helpers';
import Pagination from "../../global/Pagination";

export default class OpenOrdersA extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      page: 0
    }

  }

  componentDidUpdate(prevProps) {
    console.log("Open Orders Updated --> ", this.props.data);
    // if(prevProps.data !== this.props.data){
    //   const filteredData = this.props.data && this.props.data.filter(obj => {
    //     return +obj.prBase === +this.props.base && +obj.prTrade === +this.props.trade
    //   });
    //   this.setState((state, props) => {return {data: filteredData}});
    // }

  }

  gotoPage(page) {
    this.setState({ page })
  }

  cancelOpenOrder = (event, data) => {
    this.props.cancelOrderRequest(data.original.orderID);
  }

  renderCancelButton = (val) => {
    
    return <button style={{
      backgroundColor: "red",
      color: "white",
      boxShadow: "none",
      backgroundImage: "none",
      border: 0,
      borderRadius: "2px",
      padding: "5px 10px"}} onClick={ (e) => this.cancelOpenOrder(e, val)}>Cancel</button>
  }

  render() {
    const { TRANSACTION, OPEN_ORDERS } = this.props.languageConfig;
    const maxLines = 5; // maximum of show orders

    const filterRows = []; // openOrder list
    const rows = filterRows
      .slice(maxLines * this.state.page, maxLines * (this.state.page + 1))
      .map(order => <div>open order detail</div>);
    const totalPages = Math.ceil(filterRows.length / maxLines);
    const start = (this.state.page - 2) > 0 ? this.state.page - 2 : 0;
    const end = (this.state.page + 3) <= totalPages ? this.state.page + 3 : totalPages;
    const pages = [];

    for (let x = start; x < end; x++) {
      const numButton = (
        <li key={x} className={this.state.page === x ? 'active' : null}>
          <a onClick={() => this.gotoPage(x)}>{x + 1}</a>
        </li>
      );
      pages.push(numButton);
    }
    const length_data = this.props.data;
    let pageSize = 0
    return this.state.isLogin ? (
      <OpenOrder>
        <div>
          <ReactTable
            PaginationComponent={Pagination}
            data={length_data}
            columns={[
              {
                Header: OPEN_ORDERS.INSTRUMENT_TEXT,
                id: OPEN_ORDERS.INSTRUMENT_TEXT,
                class: "headerW",
                accessor: (d) => d.instrumentPair,
                width: "auto"
              },
              {
                Header: OPEN_ORDERS.TYPE_TEXT,
                id: OPEN_ORDERS.TYPE_TEXT,
                class: "headerW",
                accessor: (d) => d.isSell ? "Sell" : "Buy",
                width: "auto"
              }, {
                Header: OPEN_ORDERS.PRICE_TEXT,
                id: OPEN_ORDERS.PRICE_TEXT,
                class: "headerW",
                accessor: "prices",
                width: "auto"
              }, {
                Header: OPEN_ORDERS.TOTAL_TEXT,
                id: OPEN_ORDERS.TOTAL_TEXT,
                class: "headerW",
                accessor: "qtys",
                width: "auto"
              }, 
              // {
              //   Header: OPEN_ORDERS.REMAINING_TEXT,
              //   id: OPEN_ORDERS.REMAINING_TEXT,
              //   class: "headerW",
              //   accessor: OPEN_ORDERS.REMAINING_TEXT
              // }, {
              //   Header: OPEN_ORDERS.TIME_TEXT,
              //   id: OPEN_ORDERS.TIME_TEXT,
              //   class: "headerW",
              //   accessor: OPEN_ORDERS.TIME_TEXT
              // }, 
              {
                Header: OPEN_ORDERS.CANCEL,
                id: OPEN_ORDERS.CANCEL,
                class: "headerW",
                Cell: (d) => this.renderCancelButton(d),
                width: "auto"
              }

            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
          {/* <table className="table table-hover">
            <colgroup>
              <col width="16%" />
              <col width="16%" />
              <col width="16%" />
              <col width="16%" />
              <col width="16%" />
              <col width="16%" />
            </colgroup>
            <thead>
              <tr>
                <th className="headerW">{OPEN_ORDERS.TIME_TEXT}</th>
                <th className="headerW">{OPEN_ORDERS.TYPE_TEXT}</th>
                <th className="headerW">{OPEN_ORDERS.PRICE_TEXT}</th>
                <th className="headerW">{OPEN_ORDERS.TOTAL_TEXT}</th>
                <th className="headerW">{OPEN_ORDERS.REMAINING_TEXT}</th>
                <th className="headerW">{OPEN_ORDERS.CANCEL}</th>
              </tr>
            </thead>
            <tbody>
              {rows.length !== 0 ? rows : (
                <tr>
                  <td
                    colSpan={6}
                    className="no-data"
                  >
                    {TRANSACTION.NO_TRANSACTION_DATA}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {pages.length > 1 && (
            <div className="clearfix pad-x paging-wrap">
              <ul className="paging">
                <li><a onClick={() => this.gotoPage(0)}>&lt;</a></li>
                {pages}
                <li><a onClick={() => this.gotoPage(totalPages - 1)}>&gt;</a></li>
              </ul>
            </div>
          )} */}
        </div>
      </OpenOrder>
    ) : <div className="no-data-wrap"><p>{TRANSACTION.LOGIN_REQUIRED}</p></div>;
  }
}

const OpenOrder = styled.div`
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
        .rt-resizable-header-content{
           font-size:15px;
           line-height:30px;
        }
    }
    .rt-thead.-header{
            font-size:18px;
            font-weight:600;
            color:#1a1a1a;
            box-shadow:none;
            border-bottom:2px solid #364958;
            height:40px;
        .rt-th{
            border: none;
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
            padding:8px 5px;
            color:#1a1a1a;
            
        }
    }
    .-pagination{
        box-shadow:unset;
        border-top:none;
        margin-top:50px;
    }
    .pagination-bottom{
      .Table__pagination{
          margin-top:10px;
          margin-bottom:10px;
      }
    }  
 }
`
