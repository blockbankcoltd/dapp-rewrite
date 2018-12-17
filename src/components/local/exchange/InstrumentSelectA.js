import * as React from 'react'
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import updown_1_image from '../../../../src/assets/images/updown_1.png';
import updown_2_image from '../../../../src/assets/images/updown_2.png';
import updown_3_image from '../../../../src/assets/images/updown_3.png';


export default class InstrumentSelectA extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            sortType: 'up-volume',
            activeTabData: [],
            activeBaseToken: null
        }
    }


    onViewMarketList() {
        document.querySelector('#mobileInst').classList.toggle('on');
    }

    selectImage(type) { //get Image by sortType
        const sortType = this.state.sortType;
        if (sortType.indexOf(type) < 0) {
            return 'updown_1.png';
        } else if (sortType.indexOf('up') > -1) {
            return 'updown_2.png';
        }
        return 'updown_3.png';
    }

    selectSort(type) { //sortType change
        if (this.state.sortType === `up-${type}`) {
            this.setState({ sortType: `down-${type}` });
        } else {
            this.setState({ sortType: `up-${type}` });
        }
    }

    // renderTabs = (obj) => {
    //     let tabHeading = obj.productName;

    //     return (

    //     );
    // }

    componentDidMount() {
        let tradeData = this.props.data.default.productList[0].prTrade;
        this.setState({ activeTabData: tradeData, activeBaseToken: this.props.data.default.productList[0].productId })
        this.props.handleTradeCurrencyChange(this.props.data.default.productList[0].productId, tradeData[0].productId)
    }

    render() {
        let timer = null;
        const { INSTRUMENTS } = this.props.languageConfig;
        const data = this.props.data.default;
        // console.log(data);
        return (
            <Selector className="mobileWrapper">

                {this.state.isMobile ?
                    <button className="setCoinMarket" onClick={this.onViewMarketList}>
                        <span className="marketSelector"
                        // style={{background: `#fff url('20x20 coin symbol') 0 50% no-repeat`}}>{`${coinName}(${coinSymbol/ETH})`}
                        ></span>
                        <i className="xi-caret-down" />
                    </button> : ''}
                <div id="mobileInst" className={this.state.isMobile ? 'coinsWrap mobile' : 'coinsWrap'}>
                    <table style={{ width: "100%", background: "#fff" }}>
                        <thead style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "grey" }}>
                            <tr style={{ fontSize: 10, fontWeight: "bold", display: "table-row" }}>
                                {data.productList.map((obj) => {
                                    return (
                                        <th key={obj.productName} style={{ width: '50%' }} onClick={() => {
                                            this.setState({ activeTabData: obj.prTrade, activeBaseToken: obj.productId })
                                        }}>{obj.productName}</th>
                                    )
                                })}
                            </tr>
                            {/* <tr style={{border:"none", fontWeight: "bold", display: "table-row"}}>
                                <th onClick={() => {
                                    this.selectSort('char');
                                }}>{INSTRUMENTS.COIN_NAME}<img
                                    src={`../../assets/images/${this.selectImage('char')}`}/></th>
                                <th onClick={() => {
                                    this.selectSort('price');
                                }}>{INSTRUMENTS.COIN_PRICE}<img
                                    src={`../../assets/images/${this.selectImage('price')}`}/></th>
                                <th onClick={() => {
                                    this.selectSort('percent');
                                }}>{INSTRUMENTS.COIN_DAY_BEFORE}<img
                                    src={`../../assets/images/${this.selectImage('percent')}`}/></th>
                                <th onClick={() => {
                                    this.selectSort('volume');
                                }}>{INSTRUMENTS.COIN_VOLUME}<img
                                    src={`../../assets/images/${this.selectImage('volume')}`}/></th>
                            </tr> */}
                        </thead>
                        <tbody>
                            {this.state.activeTabData.map((obj) => {
                                return (
                                    <tr key={obj.productName} onClick={ () => this.props.handleTradeCurrencyChange(this.state.activeBaseToken, obj.productId)} className={`instrument-*coinSymbol`} style={{ border: "none", fontWeight: "bold", display: "table-row" }}>
                                        <td className={`coinSymbol`} style={{ fontSize: 10, padding: "10px", margin: "0px", borderStyle: "none" }}>{obj.productName}</td>
                                        <td className={`up dataNumber`} style={{ fontSize: 10, padding: "10px", margin: "0px", borderStyle: "none" }}>{obj.price}</td>
                                        <td className={`up dataNumber dataPer`} style={{ fontSize: 10, padding: "10px", margin: "0px", borderStyle: "none" }}>{obj.change}</td>
                                        <td className="volume" style={{ fontSize: 10, padding: "10px", marginLeft: "0px", marginRight: "0px", borderStyle: "none" }}>{obj.volume}</td>
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
    tr{
        cursor: pointer;
    }
`
