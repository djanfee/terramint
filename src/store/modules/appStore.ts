import { AppStore } from "@/types/state";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/store";
import { SigningStargateClient } from "@cosmjs/stargate";
import terra from "@/config/terraClassic";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

const initialState: AppStore = {
    client: {} as SigningStargateClient,
    address: "",
    chain: terra,
    allBalances: [],
    cosmCli: {} as SigningCosmWasmClient,
    allTokenBalances: [],
};

const appStore = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setClient(state, action) {
            state.client = action.payload;
        },
        setAddress(state, action) {
            state.address = action.payload;
        },
        setChain(state, action) {
            state.chain = action.payload;
        },
        setAllBalances(state, action) {
            state.allBalances = action.payload;
        },
        setCosmCli(state, action) {
            state.cosmCli = action.payload;
        },
        setAllTokenBalances(state, action) {
            state.allTokenBalances = action.payload;
        },
    },
});

const {
    setClient,
    setAddress,
    setChain,
    setAllBalances,
    setCosmCli,
    setAllTokenBalances,
} = appStore.actions;

const appReducer = appStore.reducer;

export {
    setClient,
    setAddress,
    setChain,
    setAllBalances,
    setCosmCli,
    setAllTokenBalances,
};
export const selectClient = (state: RootState) => state.app.client;
export default appReducer;
