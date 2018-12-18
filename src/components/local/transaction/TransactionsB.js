import * as React from 'react'
import styled from 'styled-components';
import ReactTable from 'react-table';

export default class TransactionsB extends React.Component{

    constructor(props) {
        super(props);

    }

    state = {
        isLogin: true
    }

    render() {
        const {TRANSACTION, OPEN_ORDERS} = this.props.languageConfig;

        return this.state.isLogin ? (
            <Transaction>
                <div className="table table-hover">
                    <ReactTable  columns={[
                        {
                            Header: OPEN_ORDERS.INSTRUMENT_TEXT,
                            id: OPEN_ORDERS.INSTRUMENT_TEXT,
                            class: "headerW",
                            accessor: OPEN_ORDERS.INSTRUMENT_TEXT
                        },
                        {
                            Header: OPEN_ORDERS.TYPE_TEXT,
                            id: OPEN_ORDERS.TYPE_TEXT,
                            class: "headerW",
                            accessor: OPEN_ORDERS.TYPE_TEXT
                        },{
                            Header: OPEN_ORDERS.PRICE_TEXT,
                            id: OPEN_ORDERS.PRICE_TEXT,
                            class: "headerW",
                            accessor: OPEN_ORDERS.PRICE_TEXT
                        },{
                            Header: OPEN_ORDERS.TOTAL_TEXT,
                            id: OPEN_ORDERS.TOTAL_TEXT,
                            class: "headerW",
                            accessor: OPEN_ORDERS.TOTAL_TEXT
                        },{
                            Header: OPEN_ORDERS.REMAINING_TEXT,
                            id: OPEN_ORDERS.REMAINING_TEXT,
                            class: "headerW",
                            accessor: OPEN_ORDERS.REMAINING_TEXT
                        },{
                            Header: OPEN_ORDERS.TIME_TEXT,
                            id: OPEN_ORDERS.TIME_TEXT,
                            class: "headerW",
                            accessor: OPEN_ORDERS.TIME_TEXT
                        },{
                            Header: OPEN_ORDERS.CANCEL,
                            id: OPEN_ORDERS.CANCEL,
                            class: "headerW",
                            accessor: OPEN_ORDERS.CANCEL
                        },

                    ]} defaultPageSize={10} className="-striped -highlight" />

                </div>
            </Transaction>
        ) : <div className="no-data-wrap"><p>{TRANSACTION.LOGIN_REQUIRED}</p></div>;
    }
}

const Transaction = styled.div`
  
`
