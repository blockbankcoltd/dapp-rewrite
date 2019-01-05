import * as React from 'react'
import styled from 'styled-components';
import {addBigNumbers, divideBigNumbers, multiplyBigNumbersToNumber} from "../../../utilities/helpers";

export default class OrderbookA extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    // componentDidUpdate(prevProps) {
    //   console.log("Order book in props --> ", this.props.data)
    //   if (this.props.data !== prevProps.data) {
    //     this.setState({ data: this.props.data });
    //   } else if (this.props.data === prevProps.data){
    //     this.forceUpdate();
    //   }
    // }

    handleChangePrice(val) {
        this.props.handleChangePrice(val);
    }

    cancelOrders(type) {
        const idArray = [];
        Promise.all(this.props.myOrders.map(item => {
            if (type === "all") {
                idArray.push(item.orderID);
            } else if (type === "buy" && !item.isSell) {
                idArray.push(item.orderID);
            } else if (type === "sell" && item.isSell) {
                idArray.push(item.orderID)
            }
        })).then(() => {
            if (idArray.length > 0) {
                this.props.cancelOrdersRequest(idArray);
            }
        });
    }

    zeroVolumeSort(arr, type) {
        if(type==="bid"){
            const newArr = arr.reduce((acc,val) => {
                if(val.volume === "0"){
                    return [{priceA:"0", volume:"0"},...acc];
                } else {
                    return [...acc,val];
                }
            },[])
            return newArr;
        } else {
            const newArr = arr.reduce((acc,val) => {
                if(val.volume === "0"){
                    return [...acc,{priceA:"0", volume:"0"}];
                } else {
                    return [val, ...acc];
                }
            },[])
            return newArr;
        }
    }

    render() {
        const {BUTTONS} = this.props.languageConfig;
        const {priceA = [], priceB = [], volumeA = [], volumeB = []} = this.props.data ? this.props.data : [[], [], [], []];
        let bidTotal = "0";
        let askTotal = "0";
        let _obj = {
            bidOrder: [],
            askOrder: []
        };
        priceA.forEach((o, i) => {
            if (_obj.bidOrder.length < 10) {
                _obj.bidOrder.push({
                    priceA: o,
                    volume: volumeA[i]
                });
                bidTotal = addBigNumbers(bidTotal, volumeA[i]);
                _obj.askOrder.push({
                    priceB: priceB[i],
                    volume: volumeB[i]
                });
                askTotal = addBigNumbers(askTotal, volumeB[i])
            }
        })

        const setRowAmount = 15; //amount of show

        return (
            <Book id="moduleOrderBook" className="bookview">
                <div id="orderBookActions" className="buttons-holder">
                    <span
                        id="cancelBids"
                        onClick={() => {
                            this.cancelOrders("buy");
                        }}
                    >
                        {BUTTONS.TEXT_BUYS_CANCEL}
                    </span>
                    <span onClick={() => {
                        this.cancelOrders("all");
                    }}
                    >
                        {BUTTONS.TEXT_ALL_CANCEL}
                    </span>
                    <span
                        id="cancelAsks"
                        onClick={() => {
                            this.cancelOrders("sell");
                        }}
                    >
                        {BUTTONS.TEXT_SELLS_CANCEL}
                    </span>

                </div>
                <div id="bookHolder">
                    <div id="book" className="noselect">
                        <div id="bookTable" className="booktable">
                            <div id="askRows">
                                {
                                    this.zeroVolumeSort(_obj.bidOrder.reverse(), "bid").map((item, i) => {

                                        let count = 0;
                                        const bar = `${item.volume / bidTotal * 100}%`;
                                        const amountMyOrder = this.props.myOrders.length > 0 ? this.props.myOrders.reduce((acc, val) => {
                                            if (val.prices == item.priceA && val.isSell) {
                                                count++;
                                                return addBigNumbers(acc, val.qtys);
                                            } else {
                                                return acc;
                                            }
                                        }, "0") : "0";
                                        const cancelId = this.props.myOrders.find(order => order.prices == item.priceA);
                                        return item.volume === "0" ? (
                                            <span className="bookrow" key={i}
                                                  onClick={() => this.handleChangePrice(item.priceA)}>
                                                <div className="CellMyOrders">-</div>
                                                <div className="CellBidPrice CellPrice">-</div>
                                                <div className="CellMyOrders price">-</div>
                                            </span>
                                        ) : (
                                            <span className="bookrow" key={i}
                                                  onClick={() => this.handleChangePrice(item.priceA)}>
                                                     <div className="CellPublicOrders">
                                                        <span className="volume">{item.volume}</span>
                                                        <span className="CellAskBar" style={{width: bar}}/>
                                                    </div>
                                                    <div className="CellBidPrice CellPrice">{item.priceA}</div>
                                                     <div className="CellMyOrders price">{amountMyOrder === "0" ? "-" :
                                                         <div>{`${amountMyOrder} (${count})`}<span
                                                             onClick={() => this.props.cancelOrderRequest(cancelId.orderID)}>X</span>
                                                         </div>}</div>
                                                </span>
                                        )
                                    })
                                }
                            </div>
                            <div id="bidRows">
                                {
                                    this.zeroVolumeSort(_obj.askOrder.reverse()).map((item, i) => {
                                        let count = 0;
                                        const bar = `${item.volume / askTotal * 100}%`;
                                        const amountMyOrder = this.props.myOrders.length > 0 ? this.props.myOrders.reduce((acc, val) => {
                                            if (val.prices == item.priceB && !val.isSell) {
                                                count++;
                                                return addBigNumbers(acc, val.qtys);
                                            } else {
                                                return acc;
                                            }
                                        }, "0") : "0";
                                        const cancelId = this.props.myOrders.find(order => order.prices == item.priceB);

                                        return item.volume === "0" ? (
                                            <span className="bookrow" key={i}
                                                  onClick={() => this.handleChangePrice(item.priceB)}>
                                                <div className="CellMyOrders price">-</div>
                                                <div className="CellBidPrice CellPrice">-</div>
                                                <div className="CellMyOrders">-</div>
                                            </span>
                                        ) : (
                                            <span className="bookrow" key={i}
                                                  onClick={() => this.handleChangePrice(item.priceB)}>
                                                    <div className="CellMyOrders price">{amountMyOrder === "0" ? "-" :
                                                        <div>{`${amountMyOrder} (${count})`}<span
                                                            onClick={() => this.props.cancelOrderRequest(cancelId.orderID)}>X</span>
                                                        </div>}</div>
                                                    <div className="CellBidPrice CellPrice">{item.priceB}</div>
                                                     <div className="CellPublicOrders">
                                                        <span className="volume">{item.volume}</span>
                                                        <span className="CellBidBar" style={{width: bar}}/></div>

                                                </span>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Book>
        )
    }
}

const Book = styled.div`
   .bookrow {
        height: 35px;
        .CellMyOrders, .CellBidPrice, .CellPublicOrders {
            line-height: 35px;
            position: relative;
            .volume {
                z-index: 2;
                position: relative;
            }
        }
        .CellAskBar {
            background-color: rgb(204, 227, 241);
            background-position: 50% center;
            position: absolute;
            height: 20px;
            top: 9px;
            right: -1px;
            z-index: 1;
        }
        .CellBidBar {
            background-color: rgb(241, 203, 202);
            background-position: 50% center;
            position: absolute;
            height: 20px;
            top: 9px;
            left: -1px;
            z-index: 1;
        }
    }
    `