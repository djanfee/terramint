const terraClassic = {
    chainId: "columbus-5",
    chainName: "columbus-5",
    // rpc: "https://rpc-test.osmosis.zone",
    rpc: "https://terra-classic-rpc.publicnode.com:443",
    rest: "https://terra-classic-lcd.publicnode.com",
    stakeCurrency: {
        coinDenom: "LUNA",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
    },
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "terra",
        bech32PrefixAccPub: "terrapub",
        bech32PrefixValAddr: "terravaloper",
        bech32PrefixValPub: "terravaloperpub",
        bech32PrefixConsAddr: "terravalcons",
        bech32PrefixConsPub: "terravalconspub",
    },
    currencies: [
        {
            coinDenom: "LUNA",
            coinDecimals: 6,
            coinMinimalDenom: "uluna",
        },
    ],
    feeCurrencies: [
        {
            coinDenom: "LUNA",
            coinMinimalDenom: "uluna",
            coinDecimals: 6,
        },
    ],
    gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.04,
    },
};

export const balancesTokens: {
    [key: string]: { address: string; logo: string };
} = {
    MINT: {
        address:
            "terra1fr59paklwuqse3c5lskltyd4sgpflu49z6wc2qgzflezkwqv9g6qqzrvah",
        logo: "",
    },
    USDM: {
        address:
            "terra14fd7muveu6zw28qwwckfxcs87njncfst8vte5gtz6klmpu2t9qnsc2jkyw",
        logo: "",
    },
};

export const balancesCoins: {
    [key: string]: { display: string; logo: string };
} = {
    uluna: {
        display: "LUNC",
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/4172.png",
    },
    uusd: {
        display: "USTC",
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/7129.png",
    },
};

export default terraClassic;
