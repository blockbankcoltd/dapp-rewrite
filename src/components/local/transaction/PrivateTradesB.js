import * as React from 'react'
import styled from 'styled-components';
import ReactTable from 'react-table';

export default class PrivateTradesB extends React.Component{

    constructor(props) {
        super(props);

    }

    state = {
        isLogin: true,
    }

    gotoPage (page) {
        this.setState({ page })
    }

    render() {
        const {TRANSACTION, TRADES} = this.props.languageConfig;

        return this.state.isLogin ? (
            <PrivateOrder>
                <div className="table table-hover">
                    <ReactTable  columns={[
                        {
                            Header: TRADES.INSTRUMENT_TEXT,
                            id: TRADES.INSTRUMENT_TEXT,
                            class: "headerW",
                            accessor: TRADES.INSTRUMENT_TEXT
                        },
                        {
                            Header: TRADES.SIDE_TEXT,
                            id: TRADES.SIDE_TEXT,
                            class: "headerW",
                            accessor: TRADES.SIDE_TEXT
                        },{
                            Header: TRADES.QUANTITY_TEXT,
                            id: TRADES.QUANTITY_TEXT,
                            class: "headerW",
                            accessor: TRADES.QUANTITY_TEXT
                        },{
                            Header: TRADES.PRICE_TEXT,
                            id: TRADES.PRICE_TEXT,
                            class: "headerW",
                            accessor: TRADES.PRICE_TEXT
                        },{
                            Header: TRADES.TOTAL_TEXT,
                            id: TRADES.TOTAL_TEXT,
                            class: "headerW",
                            accessor: TRADES.TOTAL_TEXT
                        },{
                            Header: TRADES.FEE_TEXT,
                            id: TRADES.FEE_TEXT,
                            class: "headerW",
                            accessor: TRADES.FEE_TEXT
                        },{
                            Header: TRADES.TIME_TEXT,
                            id: TRADES.TIME_TEXT,
                            class: "headerW",
                            accessor: TRADES.TIME_TEXT
                        },{
                            Header: TRADES.STATUS,
                            id: TRADES.STATUS,
                            class: "headerW",
                            accessor: TRADES.STATUS
                        },

                    ]} defaultPageSize={10} className="-striped -highlight" />

                </div>
            </PrivateOrder>
        ) : <div className="no-data-wrap"><p>{TRANSACTION.LOGIN_REQUIRED}</p></div>;
    }
}

const PrivateOrder = styled.div`
  
`
