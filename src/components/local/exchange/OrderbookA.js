import * as React from 'react'
import styled from 'styled-components';

export default class OrderbookA extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        const { BUTTONS } = this.props.languageConfig;
        const setRowAmount = 15; //amount of show
        const testArray = [];
        for(let i=0; i<setRowAmount; i++ ){
            testArray.push(i);
        }
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
                                    testArray.map(item => {
                                        return(
                                        <span className="bookrow" key={item}>
                                            <div className="CellMyOrders price">*user's bid order</div>
                                            <div className="CellBidPrice CellPrice">*price</div>
                                            <div className="CellPublicOrders">-</div>
                                        </span>
                                        )
                                    })
                                }
                            </div>
                            <div id="bidRows">
                                {
                                    testArray.map(item => {
                                        return(
                                            <span className="bookrow" key={item*100}>
                                            <div className="CellMyOrders price">-</div>
                                            <div className="CellBidPrice CellPrice">*price</div>
                                            <div className="CellPublicOrders">*user's ask order</div>
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
