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
        const baseBalance = bal.find(data => data.name === this.props.baseName);
        const tradeBalance = bal.find(data => data.name === this.props.tradeName);
        if(!baseBalance || !tradeBalance) {
            return balance;
        } else {
            return {
                baseAmount : baseBalance.total,
                tradeAmount : tradeBalance.total,
                baseHold : baseBalance.hold,
                tradeHold : tradeBalance.hold
            }
        }
    }
    render() {
        const balances = this.getBalance(this.props.selectedTokensBalances);
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
                    <p>{+(+balances.baseAmount).toFixed(8)}</p>
                  </td>
                  <td className="total">
                    <p>{+(+balances.baseAmount + +balances.baseHold).toFixed(8)}</p>
                  </td>
                </tr>
                <tr>
                  <td className="symbol">{this.props.tradeName}</td>
                  <td className="able">
                    <p>{+(+balances.tradeAmount).toFixed(8)}</p>
                  </td>
                  <td className="total">
                    <p>{+(+balances.tradeAmount + +balances.tradeHold).toFixed(8)}</p>
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
