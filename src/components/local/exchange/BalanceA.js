import * as React from 'react'
import styled from 'styled-components';
import { addBigNumbers } from "../../../utilities/helpers";

export default class BalanceA extends React.Component {

    constructor(props) {
        super(props);

    }
    getBalance (bal) {
        const balance = {
            baseAvailable : 0,
            tradeAvailable : 0,
            baseTotal : 0,
            tradeTotal : 0
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
                baseAvailable : baseBalance.available,
                tradeAvailable : tradeBalance.available,
                baseTotal : addBigNumbers(baseBalance.available, baseBalance.hold),
                tradeTotal : addBigNumbers(tradeBalance.available, tradeBalance.hold)
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
                    <p>{balances.baseAvailable}</p>
                  </td>
                  <td className="total">
                    <p>{balances.baseTotal}</p>
                  </td>
                </tr>
                <tr>
                  <td className="symbol">{this.props.tradeName}</td>
                  <td className="able">
                    <p>{balances.tradeAvailable}</p>
                  </td>
                  <td className="total">
                    <p>{balances.tradeTotal}</p>
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
