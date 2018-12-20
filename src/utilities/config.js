import * as contractJson2 from '../utilities/DEXHIGH2.json';
import * as contractJson3 from '../utilities/DEXHIGH3.json';
export const config = {
    basePrice: 10000000000,
    trades: [
        {
            productName: "BAT",
            decimal: 18,
            productId: 2,
            tokenAddress: "0x4514fd2f873b859a5d713eba6dd9047a58a0da5e",
            logo: ""
        },
        {
            productName: "OMG",
            decimal: 18,
            productId: 3,
            tokenAddress: "0x6dae0a8f648a5b5fadc443bb01ce25eda1046933",
            logo: ""
        },
        {
            productName: "VIKKY",
            decimal: 18,
            productId: 4,
            tokenAddress: "0xae94b3e45eb554f434f6f06f73348b65d4f26615",
            logo: ""
        },
        {
            productName: "BTCB",
            decimal: 18,
            productId: 5,
            tokenAddress: "0xfb4209e6ee5f58540788bbb70e816068f45146b8",
            logo: ""
        },
        {
            productName: "NDI",
            decimal: 18,
            productId: 6,
            tokenAddress: "0x1f3ee54e2aa01b8239a2860751a500edf8b5b601",
            logo: ""
        },
        {
            productName: "VAT",
            decimal: 18,
            productId: 7,
            tokenAddress: "0x1304279a438adcde99e92e692e532765f6fa7eec",
            logo: ""
        },
        {
            productName: "BNB",
            decimal: 18,
            productId: 8,
            tokenAddress: "0x2a555f01f3097e2256dc9428d6b62b6ca5f0d8fd",
            logo: ""
        },
        {
            productName: "ICON",
            decimal: 18,
            productId: 9,
            tokenAddress: "0x5c1b571629b3d60f0c345995784148d2dbffbb50",
            logo: ""
        },
        {
            productName: "TUSD",
            decimal: 18,
            productId: 10,
            tokenAddress: "0x2ed3eaf6c5a361a1b2d6f4f7ab30ed9eebc73ecf",
            logo: ""
        },
        {
            productName: "VIEN",
            decimal: 18,
            productId: 11,
            tokenAddress: "0x9a6f9b846d518162b549aa4d321a3e0de2daf1b4",
            logo: ""
        },
        {

        }
    ],
    base: [
        {
            productName: "ETH",
            productId: 1,
            tokenAddress: "0x0000000000000000000000000000000000000000",
            decimal: 18
        },
        {
            productName: "LNC",
            productId: 2,
            tokenAddress: "0x873f4f3105377427c47c643221e7f250a5b4ddcf",
            decimal: 18
        }
    ],
    market: [
        {
            base: 1,
            trade: [2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        {
            base: 2,
            trade: [7, 8, 9, 10]
        }
    ]
};

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
            market: {
                productName: base.productName,
                productId: base.productId,
                tokenAddress: base.tokenAddress,
                decimal: base.decimal,
                trades: trades
            }
        });
    });
    return markets;
}


export const contractList = [
    {
        name: "Latest",
        address: "0x31b84d572616cde8ab53f9e42654028c7ac4ad59",
        abifile: contractJson2.default
    },
    {
        name: "Order",
        address: "0x6be6a4bdc15e8ce8986dd58677f93c312484cdc0",
        abifile: contractJson3.default
    }
]


/* 
export default {
    ownerId: 1,
    productList: [
        {
            productName: "ETH",
            symbolName: "ETH",
            productId: 1,
            tokenAddress: "0x0000000000000000000000000000000000000000",
            decimal: 18,
            prTrade: [
                {
                    productName: "BAT",
                    symbolName: "BAT",
                    decimal: 18,
                    productId: 2,
                    tokenAddress: "0x4514fd2f873b859a5d713eba6dd9047a58a0da5e",
                    logo: ""
                },
                {
                    productName: "OMG",
                    symbolName: "OMG",
                    decimal: 18,
                    productId: 3,
                    tokenAddress: "0x6dae0a8f648a5b5fadc443bb01ce25eda1046933",
                    logo: ""
                },
                {
                    productName: "VIKKY TOKEN",
                    symbolName: "VIKKY",
                    decimal: 18,
                    productId: 4,
                    tokenAddress: "0xae94b3e45eb554f434f6f06f73348b65d4f26615",
                    logo: ""
                },
                {
                    productName: "BTCB",
                    symbolName: "BTCB",
                    decimal: 18,
                    productId: 5,
                    tokenAddress: "0xfb4209e6ee5f58540788bbb70e816068f45146b8",
                    logo: ""
                },
                {
                    productName: "NDI",
                    symbolName: "NDI",
                    decimal: 18,
                    productId: 6,
                    tokenAddress: "0x1f3ee54e2aa01b8239a2860751a500edf8b5b601",
                    logo: ""
                },
                {
                    productName: "VAT",
                    symbolName: "VAT",
                    decimal: 18,
                    productId: 7,
                    tokenAddress: "0x1304279a438adcde99e92e692e532765f6fa7eec",
                    logo: ""
                },
                {
                    productName: "BNB",
                    symbolName: "BNB",
                    decimal: 18,
                    productId: 8,
                    tokenAddress: "0x2a555f01f3097e2256dc9428d6b62b6ca5f0d8fd",
                    logo: ""
                },
                {
                    productName: "ICON",
                    symbolName: "ICON",
                    decimal: 18,
                    productId: 9,
                    tokenAddress: "0x5c1b571629b3d60f0c345995784148d2dbffbb50",
                    logo: ""
                },
                {
                    productName: "TUSD",
                    symbolName: "TUSD",
                    decimal: 18,
                    productId: 10,
                    tokenAddress: "0x2ed3eaf6c5a361a1b2d6f4f7ab30ed9eebc73ecf",
                    logo: ""
                },
                {
                    productName: "VIEN",
                    symbolName: "VIEN",
                    decimal: 18,
                    productId: 11,
                    tokenAddress: "0x9a6f9b846d518162b549aa4d321a3e0de2daf1b4",
                    logo: ""
                }
            ]
        },
        {
            productName: "LNC",
            symbolName: "LNC",
            productId: 2,
            tokenAddress: "0x873f4f3105377427c47c643221e7f250a5b4ddcf",
            decimal: 18,
            prTrade: [
                {
                    productName: "BAT",
                    symbolName: "BAT",
                    decimal: 18,
                    productId: 2,
                    tokenAddress: "0x4514fd2f873b859a5d713eba6dd9047a58a0da5e",
                    logo: ""
                },
                {
                    productName: "OMG",
                    symbolName: "OMG",
                    decimal: 18,
                    productId: 3,
                    tokenAddress: "0x6dae0a8f648a5b5fadc443bb01ce25eda1046933",
                    logo: ""
                },
                {
                    productName: "VIKKY TOKEN",
                    symbolName: "VIKKY",
                    decimal: 18,
                    productId: 4,
                    tokenAddress: "0xae94b3e45eb554f434f6f06f73348b65d4f26615",
                    logo: ""
                },
                {
                    productName: "BTCB",
                    symbolName: "BTCB",
                    decimal: 18,
                    productId: 5,
                    tokenAddress: "0xfb4209e6ee5f58540788bbb70e816068f45146b8",
                    logo: ""
                },
                {
                    productName: "NDI",
                    symbolName: "NDI",
                    decimal: 18,
                    productId: 6,
                    tokenAddress: "0x1f3ee54e2aa01b8239a2860751a500edf8b5b601",
                    logo: ""
                },
                {
                    productName: "VAT",
                    symbolName: "VAT",
                    decimal: 18,
                    productId: 7,
                    tokenAddress: "0x1304279a438adcde99e92e692e532765f6fa7eec",
                    logo: ""
                },
                {
                    productName: "BNB",
                    symbolName: "BNB",
                    decimal: 18,
                    productId: 8,
                    tokenAddress: "0x2a555f01f3097e2256dc9428d6b62b6ca5f0d8fd",
                    logo: ""
                },
                // {
                //     productName: "ICON",
                //     symbolName: "ICON",
                //     decimal: 18,
                //     productId: 5,
                //     tokenAddress: "0x5c1b571629b3d60f0c345995784148d2dbffbb50",
                //     logo: ""
                // },
                // {
                //     productName: "TUSD",
                //     symbolName: "TUSD",
                //     decimal: 18,
                //     productId: 6,
                //     tokenAddress: "0x2ed3eaf6c5a361a1b2d6f4f7ab30ed9eebc73ecf",
                //     logo: ""
                // },
                // {
                //     productName: "VIEN",
                //     symbolName: "VIEN",
                //     decimal: 18,
                //     productId: 7,
                //     tokenAddress: "0x9a6f9b846d518162b549aa4d321a3e0de2daf1b4",
                //     logo: ""
                // }
            ]
        }],

}
*/
