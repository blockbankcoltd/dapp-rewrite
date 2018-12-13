import * as React from 'react'
import styled from 'styled-components';
import {isMobile} from 'react-device-detect';

export default class InstrumentSelectA extends React.Component{

    constructor(props) {
        super(props);
    }

    state = {
        isMobile,
        sortType: 'up-volume'
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
            this.setState({sortType: `down-${type}`});
        } else {
            this.setState({sortType: `up-${type}`});
        }
    }

    render() {
        let timer = null;
        const {INSTRUMENTS} = this.props.languageConfig;
        return (
            <Selector className="mobileWrapper">

                {this.state.isMobile ?
                    <button className="setCoinMarket" onClick={this.onViewMarketList}>
                        <span className="marketSelector"
                            // style={{background: `#fff url('20x20 coin symbol') 0 50% no-repeat`}}>{`${coinName}(${coinSymbol/ETH})`}
                        ></span>
                        <i className="xi-caret-down"/>
                    </button> : ''}
                <div id="mobileInst" className={this.state.isMobile ? 'coinsWrap mobile' : 'coinsWrap'}>
                    <table className="coinTable">
                        <colgroup>
                            <col width="32%"/>
                            <col width="25%"/>
                            <col width="20%"/>
                            <col width="23%"/>
                        </colgroup>
                        <thead>
                        <tr>
                            <th onClick={() => {
                                this.selectSort('char');
                            }}>{INSTRUMENTS.COIN_NAME}<img
                                src={`/static/images/${this.selectImage('char')}`}/></th>
                            <th onClick={() => {
                                this.selectSort('price');
                            }}>{INSTRUMENTS.COIN_PRICE}<img
                                src={`/static/images/${this.selectImage('price')}`}/></th>
                            <th onClick={() => {
                                this.selectSort('percent');
                            }}>{INSTRUMENTS.COIN_DAY_BEFORE}<img
                                src={`/static/images/${this.selectImage('percent')}`}/></th>
                            <th onClick={() => {
                                this.selectSort('volume');
                            }}>{INSTRUMENTS.COIN_VOLUME}<img
                                src={`/static/images/${this.selectImage('volume')}`}/></th>
                        </tr>
                        </thead>
                        <tbody className="coinList">
                        <tr
                            key=""
                            className={`instrument-*coinSymbol`}
                            // className = {`instrument-${item.symbol} `}
                            onClick={(e) => {
                                e.preventDefault();
                                if (timer) {
                                    clearTimeout(timer);
                                }
                                timer = setTimeout(() => {
                                    // this.selectInstrument(item.InstrumentId);
                                    this.onViewMarketList();
                                }, 50);
                            }}
                        >
                            <td
                                className={`coinSymbol`}
                                style={{
                                    // background: (20x20 symbol image) 13px 50% no-repeat`,
                                }}
                            >
                                <p className={`coinSymbolText ${localStorage.getItem('lang')}`}>
                                    *coinName
                                </p>
                                <p className="marketSymbol">
                                    *coinSymbol/ETH
                                </p>
                            </td>
                            <td className={`up dataNumber`}>
                                {/* up or down or normal*/}
                                *Last trade price
                                <p className="coinToKrw">*KRW conversion price</p>
                            </td>
                            <td className={`up dataNumber dataPer`}>
                                {/* up or down or normal*/}
                                %
                                *price change percent
                            </td>
                            <td className="volume">
                                *volume
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </Selector>
        )
    }
}

const Selector = styled.div`

`
