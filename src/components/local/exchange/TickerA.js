import * as React from 'react'
import styled from 'styled-components';
// import {inject, observer} from "mobx-react";

// @inject("Language")
// @observer
export default class TickerA extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        const {EXCHANGE, EXCHANGE_PAGE, INSTRUMENTS} = this.props.languageConfig;
        return (
            <Ticker className="ticker-wrapper down">
                {/*
                        className = up or down
                        it is mean the direction of prices
                    */}
                <div className="currentCoin">
                    <div className="marketInfo">
                        <h3
                            style={{
                                // background: '25x25size symbol url' 0 1px no-repeat`,
                                fontSize: '21px'
                            }}
                        >*Name of coin</h3>
                        <h4>*Symbol of coin/ETH</h4>
                    </div>

                    <div className="currentCurrency">
                        <div className='currentCurrencyLh'>
                            <div className="lastPrice">
                                *last price
                                &nbsp;<span>ETH</span>
                            </div>
                            <div className="currentDayPx">
                                <p className="dayBeforeTxt">{EXCHANGE_PAGE.CURRENT_DAY_PX_CHANGE}</p>
                                <div
                                    className="cuKrw"
                                >*in/decrease price
                                </div>
                                <div className="cuPer">*in/decrease percent</div>
                            </div>
                        </div>
                        <div className="currentCurrencyRh">
                            <div className="priceToKrw">*KRW conversion price</div>
                        </div>
                    </div>
                    <div className='priceStatus'>
                        <div className="priceHigh priceStatusRoot">
                            <p className="remark">{EXCHANGE_PAGE.HIGH}</p>
                            <div className="dataNumber">
                                *High price

                                <p className="priceToKrw">*KRW conversion price</p>
                            </div>
                        </div>
                        <div className="priceLow priceStatusRoot">
                            <p className="remark">{EXCHANGE_PAGE.LOW}</p>
                            <div className="dataNumber">
                                *Low price

                                <p className="priceToKrw">*KRW conversion price</p>
                            </div>
                        </div>
                    </div>

                    <div className="volStatus">
                        <div className="vol volStatusRoot">
                            <span>{EXCHANGE_PAGE.VOLUME}</span>
                            <span
                                className="dataNumber">0 *Coinsymbol</span>
                        </div>
                        <div className="trade volStatusRoot">
                            <span>{INSTRUMENTS.COIN_VOLUME}</span>
                            <span
                                className="dataNumber">0 ETH</span>
                        </div>
                    </div>
                </div>
            </Ticker>
        )
    }
}

const Ticker = styled.div`

`
