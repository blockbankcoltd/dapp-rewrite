import isEmpty from 'lodash/isEmpty';
import { config } from './config';

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
	const markets = filterMarkets();
	let tokenIndex = markets.findIndex(x => x.market.productId === tokenId);
	let tokenName;
	if (tokenIndex > -1) {
		tokenName = markets[tokenIndex].market.productName;
	}
	else {
		markets.some(m => {
			tokenIndex = m.market.trades.findIndex(x => x.productId === tokenId);
			tokenName = m.market.trades[tokenIndex].productName;
		})
	}
	return tokenName;
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