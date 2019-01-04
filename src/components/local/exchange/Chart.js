/* global TradingView */
import React from 'react';
import ChartAPI from './ChartAPI';
import { connect } from 'react-redux';

const graphData = {
    eth: {
        bat: "http://localhost:3010/geteth",
        btcb: "http://ec2-54-180-123-66.ap-northeast-2.compute.amazonaws.com:8000/fetch/fetchGraphData?interval=1&trade=3&base=1",
        bnb: "http://ec2-54-180-123-66.ap-northeast-2.compute.amazonaws.com:8000/fetch/fetchGraphData?interval=4&trade=3&base=1",
        icon: "http://ec2-54-180-123-66.ap-northeast-2.compute.amazonaws.com:8000/fetch/fetchGraphData?interval=4&trade=3&base=1",
        ndi: "http://ec2-54-180-123-66.ap-northeast-2.compute.amazonaws.com:8000/fetch/fetchGraphData?interval=4&trade=3&base=1",
        omg: "http://ec2-54-180-123-66.ap-northeast-2.compute.amazonaws.com:8000/fetch/fetchGraphData?interval=4&trade=3&base=1",
        vikky: "http://ec2-54-180-123-66.ap-northeast-2.compute.amazonaws.com:8000/fetch/fetchGraphData?interval=4&trade=3&base=1",
        vat: "http://ec2-54-180-123-66.ap-northeast-2.compute.amazonaws.com:8000/fetch/fetchGraphData?interval=4&trade=3&base=1",
    },
    lnc: {
        bnb: "http://ec2-54-180-123-66.ap-northeast-2.compute.amazonaws.com:8000/fetch/fetchGraphData?interval=4&trade=3&base=1",
        icon: "http://ec2-54-180-123-66.ap-northeast-2.compute.amazonaws.com:8000/fetch/fetchGraphData?interval=4&trade=3&base=1",
        ndi: "http://ec2-54-180-123-66.ap-northeast-2.compute.amazonaws.com:8000/fetch/fetchGraphData?interval=4&trade=3&base=1",
        vat: "http://ec2-54-180-123-66.ap-northeast-2.compute.amazonaws.com:8000/fetch/fetchGraphData?interval=4&trade=3&base=1"
    }
}

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: 'eth',
      currentPair: 'ETHKRW',
      display: 'none'
    };
  }

  componentDidMount() {
  }

  componentDidUpdate(){
    const baseName = this.props.baseName?this.props.baseName.toLowerCase():'';
    const tradeName = this.props.tradeName?this.props.tradeName.toLowerCase():'';
    if(baseName && tradeName){
        let fetchURL = graphData[baseName][tradeName];
        const dataFeed = new ChartAPI.UDFCompatibleDatafeed({
            fetchURL: fetchURL
            // fetchURL: `http://ec2-54-180-123-66.ap-northeast-2.compute.amazonaws.com:8000/fetch/fetchGraphData?interval=4&trade=${tradeName}&base=${baseName}`
        });
        this.createChart(dataFeed, baseName, tradeName);
    }
  }

  componentWillUnmount() {
    if(this.chart._ready) this.chart.remove();
  }

  createChart = (dataFeed, baseName, tradeName) => {
    const chartOptions = {
        symbol: tradeName.toUpperCase()+baseName.toUpperCase()|| '',
        datafeed: dataFeed,
        library_path: "/static/js/libs/charting_library_new/",
        width: '100%',
        autosize: true,
        interval: '60',
        container_id: 'ap-trading-view-chart',
        timezone: 'Asia/Seoul',
        disabled_features: [
            'timeframes_toolbar',
            'control_bar',
            'edit_buttons_in_legend',
            'context_menus',
            'left_toolbar',
        ],
        studies: [
            "MASimple@tv-basicstudies"
        ],
        overrides: {
            'mainSeriesProperties.style': 3,
            "paneProperties.background": "#131722",
            'mainSeriesProperties.areaStyle.linewidth': 2,
            'scalesProperties.lineColor': '#e3e3e3',
            'scalesProperties.textColor': '#414040',
            'symbolWatermarkProperties.transparency': 100,
        },
        locale: "en"
    };
    this.chart = new TradingView.widget(chartOptions); // eslint-disable-line new-cap
  }

  render() {
    return (
      <div>
        <div id="ap-trading-view-chart"
             style={{height: '500px'}}>
          {!global.jQuery &&
          <h1 style={{textAlign: 'center', lineHeight: '400px'}}>
            {'jQuery needed for this widget.'}
          </h1>
          }
        </div>
      </div>
    );
  }
}

export default Chart;
