
var ChartAPI = {};
var instrumentsArray = [
    {
        "OMSId":1,"InstrumentId":3,"Symbol":"BATETH","Product1":3,"Product1Symbol":"BAT","Product2":1,"Product2Symbol":"ETH","InstrumentType":"Standard","VenueInstrumentId":3,"VenueId":1,"SortIndex":0,"SessionStatus":"Running","PreviousSessionStatus":"Paused","SessionStatusDateTime":"2018-12-15T08:24:42Z","SelfTradePrevention":false,"QuantityIncrement":0.001
    },
    {
        "OMSId":1,"InstrumentId":3,"Symbol":"BTCBETH","Product1":3,"Product1Symbol":"BTCB","Product2":1,"Product2Symbol":"ETH","InstrumentType":"Standard","VenueInstrumentId":3,"VenueId":1,"SortIndex":0,"SessionStatus":"Running","PreviousSessionStatus":"Paused","SessionStatusDateTime":"2018-12-15T08:24:42Z","SelfTradePrevention":false,"QuantityIncrement":0.001
    },
    {
        "OMSId":1,"InstrumentId":3,"Symbol":"BNBETH","Product1":3,"Product1Symbol":"BNB","Product2":1,"Product2Symbol":"ETH","InstrumentType":"Standard","VenueInstrumentId":3,"VenueId":1,"SortIndex":0,"SessionStatus":"Running","PreviousSessionStatus":"Paused","SessionStatusDateTime":"2018-12-15T08:24:42Z","SelfTradePrevention":false,"QuantityIncrement":0.001
    },
    {
        "OMSId":1,"InstrumentId":3,"Symbol":"ICONETH","Product1":3,"Product1Symbol":"ICON","Product2":1,"Product2Symbol":"ETH","InstrumentType":"Standard","VenueInstrumentId":3,"VenueId":1,"SortIndex":0,"SessionStatus":"Running","PreviousSessionStatus":"Paused","SessionStatusDateTime":"2018-12-15T08:24:42Z","SelfTradePrevention":false,"QuantityIncrement":0.001
    },
    {
        "OMSId":1,"InstrumentId":3,"Symbol":"NDIETH","Product1":3,"Product1Symbol":"NDI","Product2":1,"Product2Symbol":"ETH","InstrumentType":"Standard","VenueInstrumentId":3,"VenueId":1,"SortIndex":0,"SessionStatus":"Running","PreviousSessionStatus":"Paused","SessionStatusDateTime":"2018-12-15T08:24:42Z","SelfTradePrevention":false,"QuantityIncrement":0.001
    },
    {
        "OMSId":1,"InstrumentId":3,"Symbol":"OMGETH","Product1":3,"Product1Symbol":"OMG","Product2":1,"Product2Symbol":"ETH","InstrumentType":"Standard","VenueInstrumentId":3,"VenueId":1,"SortIndex":0,"SessionStatus":"Running","PreviousSessionStatus":"Paused","SessionStatusDateTime":"2018-12-15T08:24:42Z","SelfTradePrevention":false,"QuantityIncrement":0.001
    },
    {
        "OMSId":1,"InstrumentId":3,"Symbol":"VIKKYETH","Product1":3,"Product1Symbol":"VIKKY","Product2":1,"Product2Symbol":"ETH","InstrumentType":"Standard","VenueInstrumentId":3,"VenueId":1,"SortIndex":0,"SessionStatus":"Running","PreviousSessionStatus":"Paused","SessionStatusDateTime":"2018-12-15T08:24:42Z","SelfTradePrevention":false,"QuantityIncrement":0.001
    },
    {
        "OMSId":1,"InstrumentId":3,"Symbol":"VATETH","Product1":3,"Product1Symbol":"VAT","Product2":1,"Product2Symbol":"ETH","InstrumentType":"Standard","VenueInstrumentId":3,"VenueId":1,"SortIndex":0,"SessionStatus":"Running","PreviousSessionStatus":"Paused","SessionStatusDateTime":"2018-12-15T08:24:42Z","SelfTradePrevention":false,"QuantityIncrement":0.001
    },
    {
        "OMSId":1,"InstrumentId":3,"Symbol":"BNBLNC","Product1":3,"Product1Symbol":"BNB","Product2":1,"Product2Symbol":"LNC","InstrumentType":"Standard","VenueInstrumentId":3,"VenueId":1,"SortIndex":0,"SessionStatus":"Running","PreviousSessionStatus":"Paused","SessionStatusDateTime":"2018-12-15T08:24:42Z","SelfTradePrevention":false,"QuantityIncrement":0.001
    },
    {
        "OMSId":1,"InstrumentId":3,"Symbol":"ICONLNC","Product1":3,"Product1Symbol":"ICON","Product2":1,"Product2Symbol":"LNC","InstrumentType":"Standard","VenueInstrumentId":3,"VenueId":1,"SortIndex":0,"SessionStatus":"Running","PreviousSessionStatus":"Paused","SessionStatusDateTime":"2018-12-15T08:24:42Z","SelfTradePrevention":false,"QuantityIncrement":0.001
    },
    {
        "OMSId":1,"InstrumentId":3,"Symbol":"NDILNC","Product1":3,"Product1Symbol":"NDI","Product2":1,"Product2Symbol":"LNC","InstrumentType":"Standard","VenueInstrumentId":3,"VenueId":1,"SortIndex":0,"SessionStatus":"Running","PreviousSessionStatus":"Paused","SessionStatusDateTime":"2018-12-15T08:24:42Z","SelfTradePrevention":false,"QuantityIncrement":0.001
    },
    {
        "OMSId":1,"InstrumentId":3,"Symbol":"VATLNC","Product1":3,"Product1Symbol":"VAT","Product2":1,"Product2Symbol":"LNC","InstrumentType":"Standard","VenueInstrumentId":3,"VenueId":1,"SortIndex":0,"SessionStatus":"Running","PreviousSessionStatus":"Paused","SessionStatusDateTime":"2018-12-15T08:24:42Z","SelfTradePrevention":false,"QuantityIncrement":0.001
    },
];

var amcid = 0;
var connected = false;
var tryReconnect = false;
var _amsynchro = {};
var callback;
var lastBar;
var subscriptionIntervalMs;
var unsubscribeReqObj = {};

ChartAPI.UDFCompatibleDatafeed = function(feedInfo) {
    this._configuration = undefined;
    
    this._symbolSearch = null;
    this._symbolsStorage = null;
    this._protocolVersion = 2;
    
    this._enableLogging = false;
    this._initializationFinished = false;
    this._callbacks = {};
    this._initialize(this);
    
    this.fetchURL = feedInfo.fetchURL;
};

ChartAPI.UDFCompatibleDatafeed.prototype.onMessage = function(ev) {
    
};

ChartAPI.UDFCompatibleDatafeed.prototype.defaultConfiguration = function() {
    return {
        supports_search: true,
        supports_group_request: false,
        supported_resolutions: [60, 240, 720, 'D', 'W', 'M'],
        supports_marks: false,
        supports_timescale_marks: false
    };
};

ChartAPI.UDFCompatibleDatafeed.prototype.getServerTime = function(callback) {
    
};

ChartAPI.UDFCompatibleDatafeed.prototype.on = function (event, callback) {
    
    if (!this._callbacks.hasOwnProperty(event)) {
        this._callbacks[event] = [];
    }
    
    this._callbacks[event].push(callback);
    return this;
};

ChartAPI.UDFCompatibleDatafeed.prototype._fireEvent = function(event, argument) {
    if (this._callbacks.hasOwnProperty(event)) {
        var callbacksChain = this._callbacks[event];
        for (var i = 0; i < callbacksChain.length; ++i) {
            callbacksChain[i](argument);
        }
        
        this._callbacks[event] = [];
    }
};

ChartAPI.UDFCompatibleDatafeed.prototype.onInitialized = function() {
    this._initializationFinished = true;
    this._fireEvent('initialized');
};

ChartAPI.UDFCompatibleDatafeed.prototype._logMessage = function(message) {
    if (this._enableLogging) {
        var now = new Date();
    }
};

ChartAPI.UDFCompatibleDatafeed.prototype._send = function(url, params) {
    
};

ChartAPI.UDFCompatibleDatafeed.prototype._initialize = function(that) {
    that._setupWithConfiguration(that.defaultConfiguration());
};

ChartAPI.UDFCompatibleDatafeed.prototype.onReady = function(callback) {
    var that = this;
    if (this._configuration) {
        setTimeout(function() {
            callback(that._configuration);
        }, 0);
    } else {
        this.on('configuration_ready', function() {
            callback(that._configuration);
        });
    }
};

ChartAPI.UDFCompatibleDatafeed.prototype._setupWithConfiguration = function(configurationData) {
    this._configuration = configurationData;
    
    if (!configurationData.exchanges) {
        configurationData.exchanges = [];
    }
    
    var supportedResolutions = configurationData.supported_resolutions || configurationData.supportedResolutions;
    configurationData.supported_resolutions = supportedResolutions;
    
    var symbolsTypes = configurationData.symbols_types || configurationData.symbolsTypes;
    configurationData.symbols_types = symbolsTypes;
    
    if (!configurationData.supports_search && !configurationData.supports_group_request) {
        throw 'Unsupported datafeed configuration. Must either support search, or support group request';
    }
    
    if (!configurationData.supports_search) {
        this._symbolSearch = new ChartAPI.SymbolSearchComponent(this);
    }
    
    if (configurationData.supports_group_request) {
    } else {
        this.onInitialized();
    }
    
    this._fireEvent('configuration_ready');
    this._logMessage('Initialized with ' + JSON.stringify(configurationData));
};

//	===============================================================================================================================
//	The functions set below is the implementation of JavaScript API.


ChartAPI.UDFCompatibleDatafeed.prototype.searchSymbolsByName = function(suserInput, exchange, symbolType, onResultReadyCallback) {
    console.log("searchSymbolsByName");
    
}


ChartAPI.UDFCompatibleDatafeed.prototype.searchSymbols = function(searchString, exchange, type, onResultReadyCallback) {
    var MAX_SEARCH_RESULTS = 30;
    
    if (!this._configuration) {
        onResultReadyCallback([]);
        return;
    }
    
    if (this._configuration.supports_search) {
        
        this._send(this._datafeedURL + '/search', {
            limit: MAX_SEARCH_RESULTS,
            query: searchString.toUpperCase(),
            type: type,
            exchange: exchange
        })
        .done(function (response) {
            var data = JSON.parse(response);
            
            for (var i = 0; i < data.length; ++i) {
                if (!data[i].params) {
                    data[i].params = [];
                }
            }
            
            if (typeof data.s == 'undefined' || data.s != 'error') {
                onResultReadyCallback(data);
            } else {
                onResultReadyCallback([]);
            }
            
        })
        .fail(function(reason) {
            onResultReadyCallback([]);
        });
    } else {
        
        if (!this._symbolSearch) {
            throw 'Datafeed error: inconsistent configuration (symbol search)';
        }
        
        var searchArgument = {
            searchString: searchString,
            exchange: exchange,
            type: type,
            onResultReadyCallback: onResultReadyCallback
        };
        
        if (this._initializationFinished) {
            this._symbolSearch.searchSymbols(searchArgument, MAX_SEARCH_RESULTS);
        } else {
            
            var that = this;
            
            this.on('initialized', function() {
                that._symbolSearch.searchSymbols(searchArgument, MAX_SEARCH_RESULTS);
            });
        }
    }
};

ChartAPI.UDFCompatibleDatafeed.prototype._symbolResolveURL = '/symbols';

//	BEWARE: this function does not consider symbol's exchange
ChartAPI.UDFCompatibleDatafeed.prototype.resolveSymbol = function(symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
    //console.log('Resolve Symbol - ' +  symbolName);
    var symbol = {};
    var instrument = instrumentsArray.filter(function(instrument) {
        return instrument.Symbol === symbolName;
    })[0];
    
    if (instrument) {
        symbol.omsId = instrument.OMSId;
        symbol.name = instrument.Symbol;
        symbol.full_name = instrument.Symbol;
        symbol.description = instrument.Symbol;
        symbol.instrumentId = instrument.InstrumentId;
        symbol.ticker = instrument.Symbol;
        symbol.has_intraday = true;
        setTimeout(function() { onSymbolResolvedCallback(symbol); }, 0);
    } else {
        onResolveErrorCallback('');
    }
};

ChartAPI.UDFCompatibleDatafeed.prototype.getBars = function(symbolInfo, resolution, rangeStartDate, rangeEndDate, onDataCallback, onErrorCallback) {
    var that = this;
    if (rangeStartDate > 0 && (rangeStartDate + '').length > 10) {
        throw ['Got a JS time instead of Unix one.', rangeStartDate, rangeEndDate];
    }
    
    var interval = 60;
    switch (resolution) {
        case "1":
        interval = 60;
        break;
        case "5":
        interval = 300;
        break;
        case "15":
        interval = 900;
        break;
        case "30":
        interval = 1800;
        break;
        case "60":
        interval = 3600;
        break;
        case "360":
        interval = 21600;
        break;
        case "720":
        interval = 43200;
        break;
        case "D":
        interval = 86400;
        break;
        case "W":
        interval = 604800;
        break;
        case "M":
        interval = 2592000;
        break;
        default:
        interval = 60;
    }
    
    var req = {};
    req.OMSId = symbolInfo.omsId;
    req.InstrumentId = symbolInfo.instrumentId;
    req.Interval = interval; // interval is seconds
    req.IncludeLastCount = 5000;
    subscriptionIntervalMs = interval * 1000;
    
    fetch(this.fetchURL)
    .then(res => res.json())
    .then(data => {
        var nodata = false;
        var bars = [];
        if(data[0].year){
            // dexhi format
            bars = data.map(elem => {
                let bar = {}
                bar.time = +(elem.date +'000');
                console.log(elem.date +'000')
                bar.high = elem.high;
                bar.low = elem.low;
                bar.open = elem.open;
                bar.close = elem.close;
                bar.volume = elem.volume;
                return bar
            });
        }else{
            // bitnaru format
            var barsCount = data.length;
            for (var i = 0; i < barsCount; ++i) {
                var barData = data[i];
                var barValue = buildBar(barData);
                bars.push(barValue);
            }
        }
        
        onDataCallback(bars, {version: that._protocolVersion, noData: nodata, nextTime: data.nb || data.nextTime || null});
    }).catch( err => {
        console.error("There isn't graph data!!!")
    })
};

function buildBar(barData) {
    var barValue = {
        time: barData[0],
        high: barData[1],
        low: barData[2],
        open: barData[3],
        close: barData[4], 
        volume: barData[5] // close
    };
    return barValue;
}


ChartAPI.UDFCompatibleDatafeed.prototype.subscribeBars = function(symbolInfo, resolution, onRealtimeCallback, listenerGUID) {
    callback = onRealtimeCallback;
    unsubscribeReqObj.OMSId = symbolInfo.omsId;
    unsubscribeReqObj.InstrumentId = symbolInfo.instrumentId;
};

ChartAPI.UDFCompatibleDatafeed.prototype.unsubscribeBars = function(listenerGUID) {
    var req = unsubscribeReqObj;
};

module.exports = ChartAPI;