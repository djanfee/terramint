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

export default terraClassic;
