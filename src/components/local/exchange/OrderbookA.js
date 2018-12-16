import * as React from 'react'
import styled from 'styled-components';

export default class OrderbookA extends React.Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate(prevProps){
        if(this.props.data != prevProps.data){
            this.setState({data: this.props.data});
        }
    }

    render() {
        const { BUTTONS } = this.props.languageConfig;
        const { priceA = [], priceB = [], volumeA = [], volumeB = [] } = this.state.data ? this.state.data : [[],[],[],[]];
        let _obj = {
            bidOrder: [],
            askOrder: []
        };
        priceA.forEach( (o, i) => {
            _obj.bidOrder.push({
                priceA: o,
                volume: volumeA[i]
            });
            _obj.askOrder.push({
                priceB: priceB[i],
                volume: volumeB[i]
            });
        })

        const setRowAmount = 15; //amount of show
        
        return (
            <Book id="moduleOrderBook" className="bookview">
                <div id="orderBookActions" className="buttons-holder">
                    <span id="cancelBids" onClick={() => {
                        //cancel all bid order
                    }}>
                    {BUTTONS.TEXT_BUYS_CANCEL}
                    </span>
                    <span onClick={() => {
                        //cancel all order
                    }}>
                    {BUTTONS.TEXT_ALL_CANCEL}
                    </span>
                    <span id="cancelAsks" onClick={() => {
                        //cancel all ask order
                    }}>
                    {BUTTONS.TEXT_SELLS_CANCEL}
                    </span>

                </div>
                <div id="bookHolder">
                    <div id="book" className="noselect">
                        <div id="bookTable" className="booktable">
                            <div id="askRows">
                                {
                                   _obj.bidOrder.map( (item, i) => {
                                        return(
                                            <span className="bookrow" key={i}>
                                                <div className="CellMyOrders price">{item.volume}</div>
                                                <div className="CellBidPrice CellPrice">{item.priceA}</div>
                                                <div className="CellPublicOrders">-</div>
                                            </span>
                                        )
                                    })
                                }
                            </div>
                            <div id="bidRows">
                                {
                                    _obj.askOrder.map( (item, i) => {
                                        return(
                                            <span className="bookrow" key={i}>
                                                <div className="CellMyOrders price">-</div>
                                                <div className="CellBidPrice CellPrice">{item.priceB}</div>
                                                <div className="CellPublicOrders">{item.volume}</div>
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
      }
  }
`
