import * as React from 'react'
import styled from 'styled-components';
import { transformToTokenName } from '../../../utilities/helpers';

export default class PrivateTradesA extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            page : 0
        }

    }

    componentDidUpdate(prevProps){
      // if(prevProps.records !== this.props.records){
      //   let _array = [];
      //   this.props.records.isDeposit.forEach( (o, i) => {
      //     _array.push({
      //       isDeposit: o,
      //       prCode: this.props.records.prCode[i],
      //       qty: this.props.records.qty[i],
      //       timestamp: new Date(this.props.records.timestamp[i] * 1000).toDateString()
      //     });
      //   })
      //   this.setState((state, props) => { 
      //     return {data: _array}
      //   });
      // }
    }


    gotoPage = (page) => this.setState({ page });

    render() {
        const {TRADES, TRANSACTION} = this.props.languageConfig;
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
                    <th className="headerW">Token</th>
                    <th className="headerW">{TRADES.TIME_TEXT}</th>
                    <th className="headerW">{TRADES.SIDE_TEXT}</th>
                    {/* <th className="headerW">{TRADES.PRICE_TEXT}</th> */}
                    <th className="headerW">{TRADES.QUANTITY_TEXT}</th>
                    {/* <th className="headerW">{TRADES.TOTAL_TEXT}</th> */}
                  </tr>
                </thead>
                <tbody>
                  {/* {this.state.page} */}
                  {this.props.data && this.props.data.length > 0 ? this.props.data.map( (o, i) => {
                    return (
                      <tr key={i}>
                        <td>{o.instruement}</td>
                        <td>{o.timestamp}</td>
                        <td>{o.side}</td>
                        <td>{o.qty}</td>
                      </tr>
                    )
                  }) : <tr><td colSpan={5} className="no-data">{TRANSACTION.NO_TRANSACTION_DATA}</td></tr>}
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
