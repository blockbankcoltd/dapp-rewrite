import isEmpty from 'lodash/isEmpty';
import { config } from './config';
import { Decimal } from 'decimal.js';
import BN from 'bn.js';

export const fetchNetwork = () => {
	console.log("Inside network")
	return new Promise((resolve, reject) => {
		const { web3 } = window;
		console.log("Returned Promise", web3)
		web3 && web3.version && web3.version.getNetwork((err, netId) => {
			console.log("Inside getNetwork", err, netId);
			if (err) {
				reject(err);
			} else {
				resolve(netId);
			}
		});
	});
};

export const transformToTokenName = (tokenId) => {
  tokenId = +tokenId;
  const markets = filterMarkets();
	let tokenIndex = markets.findIndex(x => x.market.productId === tokenId);
	let token;
	if (tokenIndex > -1) {
		token = markets[tokenIndex].market;
	}
	else {
		markets.some(m => {
			tokenIndex = m.market.trades.findIndex(x => x.productId === tokenId);
			token = m.market.trades[tokenIndex];
			if(tokenIndex > -1) return true;
		})
	}
	return token;
}

export const filterMarkets = () => {
	let markets = [];
	config.market.forEach(obj => {
		let trades = [];
		let base = config.base.find(o => o.productId === obj.base);
		obj.trade.forEach(y => {
			let tradeObject = config.trades.find(x => x.productId === y);
			trades.push(tradeObject);
		});

		markets.push({
			market: Object.assign({}, {
				productName: base.productName,
				productId: base.productId,
				tokenAddress: base.tokenAddress,
				decimal: base.decimal,
				trades: trades
			})
		});
	});
	return markets;
}

export const fetchAccounts = () => {
	return new Promise((resolve, reject) => {
		const { web3 } = window;
		const ethAccounts = getAccounts();

		if (isEmpty(ethAccounts)) {
			web3 && web3.eth && web3.eth.getAccounts((err, accounts) => {
				if (err) {
					reject(err);
				} else {
					resolve(accounts);
				}
			});
		} else {
			resolve(ethAccounts);
		}
	});
};

function getAccounts() {

  try {
    const { web3 } = window;
    // throws if no account selected
    return web3.eth.accounts;
  } catch (e) {
    return [];
  }
}
//BN Does not handle fractions, move to BN when it supports so.
//https://github.com/indutny/bn.js/issues/182
export const divideBigNumbers = (number, divisor) => {
  try {
    let numerator = new Decimal(number); //BN.js does not handle deciaml places.
    let denominator = new Decimal(divisor);
    return ((numerator).dividedBy(denominator)).toString(10);
  } catch (e) {
    console.log(e);
  }
}

//BN Does not handle fractions, move to BN when it supports so.
//https://github.com/indutny/bn.js/issues/182
export const multiplyBigNumbers = (num, mul) => {
  try {
    let result = new Decimal(num).mul(new Decimal(mul));
    return new BN(result.toString(10));
  } catch (e) {
    console.log(e);
  }
}

export const convertPriceArray = (arr) => {
    return arr.map( obj => {
         return divideBigNumbers(obj, config.basePrice);
    })
}

export const convertVolumeArray = (arr, prTradeDecimal) => {
    return arr.map( obj => {
      return divideBigNumbers(obj, prTradeDecimal);
    })
}

export const convertQtyEach = (element, prTradeDecimal) => {
      return divideBigNumbers(element, prTradeDecimal);
}

export const convertPriceEach = (element, prTradeDecimal) => {
      return divideBigNumbers(element, config.basePrice);
}
