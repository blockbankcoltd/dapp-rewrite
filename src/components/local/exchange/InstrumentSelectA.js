import * as React from 'react'
import styled from 'styled-components';
import {isMobile} from 'react-device-detect';
import updown_1 from '../../../../src/assets/images/updown_1.png';
import updown_2 from '../../../../src/assets/images/updown_2.png';
import updown_3 from '../../../../src/assets/images/updown_3.png';


export default class InstrumentSelectA extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            sortType: 'up-char',
            activeTabData: [],
            activeBaseToken: null,
            activeTab: 0
        }
    }


    onViewMarketList() {
        document.querySelector('#mobileInst').classList.toggle('on');
    }

    selectImage(type) { //get Image by sortType
        const sortType = this.state.sortType;
        if (sortType.indexOf(type) < 0) {
            return updown_1;
        } else if (sortType.indexOf('up') > -1) {
            return updown_2;
        }
        return updown_3;
    }

    selectSort(type) { //sortType change
        if (this.state.sortType === `up-${type}`) {
            this.setState({sortType: `down-${type}`});
        } else {
            this.setState({sortType: `up-${type}`});
        }
    }

    doSort(type, coin) {
        if (!coin) {
            return [];
        }

        if (type === 'up-char') {
            return coin.sort((a, b) => {
                const aChar = a.productName.substring(0, 1);
                const bChar = b.productName.substring(0, 1);
                if (aChar < bChar) return -1;
                if (aChar > bChar) return 1;
                return 0;
            });
        } else if (type === 'down-char') {
            return coin.sort((a, b) => {
                const aChar = a.productName.substring(0, 1);
                const bChar = b.productName.substring(0, 1);
                if (aChar < bChar) return 1;
                if (aChar > bChar) return -1;
                return 0;
            });
        }
        return [];
    }

    // renderTabs = (obj) => {
    //     let tabHeading = obj.productName;

    //     return (

    //     );
    // }

    componentDidMount() {
        let tradeData = this.props.data[0].market.trades;
        this.setState({activeTabData: tradeData, activeBaseToken: this.props.data[0].market.productId})
        this.props.handleTradeCurrencyChange(this.props.data[0].market.productId, tradeData[0].productId)
    }

    makeData(arr) {
        const parsedArr = arr.map(data => {
            return {
                coinName: arr.product,
                price: 0,
                percent: "0",
                volume: 0,
            };
        })
        return parsedArr;
    }

    render() {
        let timer = null;
        const {INSTRUMENTS} = this.props.languageConfig;
        const data = this.props.data;
        const sortedCoin = this.doSort(this.state.sortType, this.state.activeTabData);
        return (
            <Selector className="mobileWrapper">

                {this.state.isMobile ?
                    <button className="setCoinMarket" onClick={this.onViewMarketList}>
                        <span className="marketSelector"
                        />
                        <i className="xi-caret-down"/>
                    </button> : ''}
                <div id="mobileInst" className={this.state.isMobile ? 'coinsWrap mobile' : 'coinsWrap'}>
                    <div className="coinsTab">
                        {data.map((obj, idx) => {
                            return (
                                <button key={obj.market.productName} className={this.state.activeTab === idx ? "active" : ""}
                                        onClick={() => {
                                            this.setState({
                                                activeTabData: obj.market.trades,
                                                activeBaseToken: obj.market.productId,
                                                activeTab: idx
                                            })
                                        }}>{obj.market.productName}</button>
                            )
                        })}
                    </div>
                    <table className="coinTable">
                        <thead>
                        <tr>
                            <th width="34%" onClick={() => {
                                this.selectSort('char');
                            }}>{INSTRUMENTS.COIN_NAME}<img
                                src={this.selectImage('char')}/></th>
                            <th width="33%" onClick={() => {
                                this.selectSort('bid');
                            }}>{INSTRUMENTS.BEST_BID}<img
                                src={this.selectImage('price')}/></th>
                            <th width="33%" onClick={() => {
                                this.selectSort('ask');
                            }}>{INSTRUMENTS.BEST_ASK}<img
                                src={this.selectImage('percent')}/></th>

                        </tr>

                        </thead>
                        <tbody>
                        {sortedCoin.map((obj) => {
                            return (
                                <tr key={obj.productName}
                                    onClick={() => this.props.handleTradeCurrencyChange(this.state.activeBaseToken, obj.productId)}
                                    className={`instrument-*coinSymbol`}
                                    style={{border: "none", fontWeight: "bold", display: "table-row"}}>
                                    <td className={`coinSymbol`}>{obj.productName}</td>
                                    <td className={`up dataNumber`}>{obj.price}</td>
                                    <td className={`up dataNumber`}>{obj.change}</td>
                                </tr>
                            )
                        })}
                        </tbody>

                    </table>
                </div>
            </Selector>
        )
    }
}

const Selector = styled.div`
    background: #fff;
    table {
        border-collapse: collapse;
    }
    tr{
        cursor: pointer;
    }
`
