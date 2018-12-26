import * as React from 'react'
import styled from 'styled-components';
import ReactTable from 'react-table';

export default class OpenOrdersB extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }
    }

    componentDidUpdate(prevProps) {
        console.log("Received the data here from props --> ", this.props.data);
        if(prevProps.data !== this.props.data){
            let _array = [];
            this.props.data.orderId.forEach((o, i) => {
                _array.push({
                    orderId: o,
                    prBase: this.props.data.prBase[i],
                    prTrade: this.props.data.prTrade[i],
                    price: this.props.data.prices[i],
                    qty: this.props.data.qtys[i],
                    isSell: this.props.data.sells[i]
                })
            });
            this.setState({ data: _array });
            console.log("Parsed Data ==> ", _array);
        }

    }

    render() {
        const { TRANSACTION, OPEN_ORDERS } = this.props.languageConfig;

        return this.state.isLogin ? (
            <OpenOrder>
                <div className="table table-hover">
                    <ReactTable
                        data={this.state.data}
                        columns={[
                            {
                                Header: OPEN_ORDERS.INSTRUMENT_TEXT,
                                id: OPEN_ORDERS.INSTRUMENT_TEXT,
                                class: "headerW",
                                accessor: (d) => `${d.prTrade}/${d.prBase}`
                            },
                            {
                                Header: OPEN_ORDERS.TYPE_TEXT,
                                id: OPEN_ORDERS.TYPE_TEXT,
                                class: "headerW",
                                accessor: (d) => d.isSell ? "Sell" : "Buy"
                            }, {
                                Header: OPEN_ORDERS.PRICE_TEXT,
                                id: OPEN_ORDERS.PRICE_TEXT,
                                class: "headerW",
                                accessor: "price"
                            }, {
                                Header: OPEN_ORDERS.TOTAL_TEXT,
                                id: OPEN_ORDERS.TOTAL_TEXT,
                                class: "headerW",
                                accessor: "qty"
                            }, {
                                Header: OPEN_ORDERS.REMAINING_TEXT,
                                id: OPEN_ORDERS.REMAINING_TEXT,
                                class: "headerW",
                                accessor: OPEN_ORDERS.REMAINING_TEXT
                            }, {
                                Header: OPEN_ORDERS.TIME_TEXT,
                                id: OPEN_ORDERS.TIME_TEXT,
                                class: "headerW",
                                accessor: OPEN_ORDERS.TIME_TEXT
                            }, {
                                Header: OPEN_ORDERS.CANCEL,
                                id: OPEN_ORDERS.CANCEL,
                                class: "headerW",
                                accessor: OPEN_ORDERS.CANCEL
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
  
`
