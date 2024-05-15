import { SigningStargateClient } from "@cosmjs/stargate";
import terra from "@/config/terraClassic";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";

export interface AppStore {
    client: SigningStargateClient;
    address: string;
    chain: terra;
    allBalances: Coin[];
}
export interface State {
    app: AppStore;
}
