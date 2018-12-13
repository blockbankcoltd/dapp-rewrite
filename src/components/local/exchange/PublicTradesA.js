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
                        <th dangerouslySetInnerHTML={{__html: `${PUBLIC_TRADES.PRICE_TEXT}<span>(ETH)</span>`}}/>
                        <th dangerouslySetInnerHTML={{__html: `${PUBLIC_TRADES.SIZE}<span>(symbol)</span>`}}/>
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


                {/*{pages.length > 1 &&*/}
                {/*<div className="clearfix pad-x">*/}
                    {/*<ul className="pagi pull-right">*/}
                        {/*<li><a onClick={() => this.gotoPage(0)}>&laquo;</a></li>*/}
                        {/*{pages}*/}
                        {/*<li onClick={() => this.gotoPage(totalPages - 1)}><a>&raquo;</a></li>*/}
                    {/*</ul>*/}
                {/*</div>}*/}
            </Public>
        )
    }
}

const Public = styled.div`

`
