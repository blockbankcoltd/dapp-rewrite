import * as React from 'react'
import styled from 'styled-components';

export default class BalanceA extends React.Component {

    constructor(props) {
        super(props);

    }
    getBalance (bal) {
        const balance = {
            baseAmount : 0,
            tradeAmount : 0,
            baseHold : 0,
            tradeHold : 0
        }
        if(!bal){
            return balance;
        }
        const baseBalance = bal.find(data => data.product === this.props.baseFullName);
        const tradeBalance = bal.find(data => data.product === this.props.tradeFullName);

        if(!baseBalance || !tradeBalance) {
            return balance;
        } else {
            return {
                baseAmount : baseBalance.balance.total,
                tradeAmount : tradeBalance.balance.total,
                baseHold : baseBalance.balance.hold,
                tradeHold : tradeBalance.balance.hold
            }
        }
    }
    render() {
        const balances = this.getBalance(this.props.balance);
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
                        <td className="symbol">{this.props.baseName}</td>
                        <td className="able">
                            <p>{balances.baseAmount - balances.baseHold}</p>
                        </td>
                        <td className="total">
                            <p>{balances.baseAmount}</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="symbol">{this.props.tradeName}</td>
                        <td className="able">
                            <p>{balances.tradeAmount-balances.tradeHold}</p>
                        </td>
                        <td className="total">
                            <p>{balances.tradeAmount}</p>
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
