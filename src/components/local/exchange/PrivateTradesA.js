import * as React from 'react'
import styled from 'styled-components';

export default class PrivateTradesA extends React.Component{

    constructor(props) {
        super(props);

    }

    state = {
        page : 0
    }

    gotoPage = (page) => this.setState({ page });

    render() {
        const {TRADES, TRANSACTION} = this.props.languageConfig;
        const rows = [];
        return (
            <Private>
                <div className="table-responsive">
                    <table className='table table-hover minFont'>
                        <colgroup>
                            <col width="20%" />
                            <col width="20%" />
                            <col width="20%" />
                            <col width="20%" />
                            <col width="20%" />
                        </colgroup>
                        <thead>
                        <tr>
                            <th className="headerW">{TRADES.TIME_TEXT}</th>
                            <th className="headerW">{TRADES.SIDE_TEXT}</th>
                            <th className="headerW">{TRADES.PRICE_TEXT}</th>
                            <th className="headerW">{TRADES.QUANTITY_TEXT}</th>
                            <th className="headerW">{TRADES.TOTAL_TEXT}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rows.length !== 0  ? rows : <tr><td colSpan={5} className="no-data">{TRANSACTION.NO_TRANSACTION_DATA}</td></tr>}
                        </tbody>
                    </table>
                </div>
                {/*Here is Paging component*/}
            </Private>
        )
    }
}

const Private = styled.div`

`
