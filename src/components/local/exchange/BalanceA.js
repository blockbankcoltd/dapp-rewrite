import * as React from 'react'
import styled from 'styled-components';

export default class BalanceA extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const {ACCOUNT_BALANCES} = this.props.languageConfig;
        return (
            <Balance>
                <table className="ap-list">
                    <colgroup>
                        <col width="96" />
                        <col width="177" />
                        <col width="160" />
                    </colgroup>
                    <thead>
                    <tr>
                        <th>{ACCOUNT_BALANCES.PRODUCT}</th>
                        <th>{ACCOUNT_BALANCES.AVAIL_BALANCE_TEXT}</th>
                        <th>{ACCOUNT_BALANCES.TOTAL_BALANCE_TEXT}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="first-row">
                        <td className="symbol">ETH</td>
                        <td className="able">
                            <p>*ETH available</p>
                        </td>
                        <td className="total">
                            <p>*ETH total</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="symbol">*Symbol</td>
                        <td className="able">
                            <p>*coin available</p>
                        </td>
                        <td className="total">
                            <p>*coin total</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Balance>
        )
    }
}

const Balance = styled.div`
  
`
