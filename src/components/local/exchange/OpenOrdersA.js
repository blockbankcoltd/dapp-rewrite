import * as React from 'react'
import styled from 'styled-components';

export default class OpenOrdersA extends React.Component{

    constructor(props) {
        super(props);

    }

    state = {
        isLogin: true,
        page : 0
    }

    gotoPage (page) {
        this.setState({ page })
    }

    render() {
        const {TRANSACTION, OPEN_ORDERS} = this.props.languageConfig;
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
        return this.state.isLogin ? (
            <OpenOrder>
                <div>
                    <table className="table table-hover">
                        <colgroup>
                            <col width="16%"/>
                            <col width="16%"/>
                            <col width="16%"/>
                            <col width="16%"/>
                            <col width="16%"/>
                            <col width="16%"/>
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
                        {rows.length !== 0 ? rows : <tr>
                            <td colSpan={6}
                                className="no-data">{TRANSACTION.NO_TRANSACTION_DATA}</td>
                        </tr>}
                        </tbody>
                    </table>
                    {pages.length > 1 &&
                    <div className="clearfix pad-x paging-wrap">
                        <ul className="paging">
                            <li><a onClick={() => this.gotoPage(0)}>&lt;</a></li>
                            {pages}
                            <li><a onClick={() => this.gotoPage(totalPages - 1)}>&gt;</a></li>
                        </ul>
                    </div>}
                </div>
            </OpenOrder>
        ) : <div className="no-data-wrap"><p>{TRANSACTION.LOGIN_REQUIRED}</p></div>;
    }
}

const OpenOrder = styled.div`
  
`
