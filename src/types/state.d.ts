import { SigningStargateClient } from "@cosmjs/stargate";
import terra from "@/config/terraClassic";
import { Coin } from "@cosmjs/stargate";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

export interface AppStore {
    client: SigningStargateClient;
    address: string;
    chain: terra;
    allBalances: Coin[];
    cosmCli: SigningCosmWasmClient;
    allTokenBalances: { amount: number; symbol: string }[];
}
export interface State {
    app: AppStore;
}
