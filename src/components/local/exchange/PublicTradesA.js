import * as React from 'react'
import styled from 'styled-components';

export default class PublicTradesA extends React.Component {

    constructor(props) {
        super(props);

    }

    state = {
        page : 0
    }

    gotoPage = (page) => this.setState({ page });

    render() {
        const {PUBLIC_TRADES} = this.props.languageConfig;
        return (
            <Public>
                <table className="table table-hover minFont recent-trades-table">
                    <thead>
                    <tr>
                        <th>{PUBLIC_TRADES.TIME_TEXT}</th>
                        <th dangerouslySetInnerHTML={{__html: `${PUBLIC_TRADES.PRICE_TEXT}<span>(${this.props.baseName})</span>`}}/>
                        <th dangerouslySetInnerHTML={{__html: `${PUBLIC_TRADES.SIZE}<span>(${this.props.tradeName})</span>`}}/>
                    </tr>

                    </thead>
                </table>
                <div className="rowDataWrap">
                    <table>
                        <colgroup>
                            <col width="33%"/>
                            <col width="33%"/>
                            <col width="33%"/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <td className="timeData">*time</td>
                                <td className="priceData" >*price</td>
                                <td className="numberData" >*quantity</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Public>
        )
    }
}

const Public = styled.div`

`
