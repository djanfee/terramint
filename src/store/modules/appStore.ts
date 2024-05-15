import { AppStore } from "@/types/state";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/store";
import { SigningStargateClient } from "@cosmjs/stargate";
import terra from "@/config/terraClassic";

const initialState: AppStore = {
    client: {} as SigningStargateClient,
    address: "",
    chain: terra,
    allBalances: [],
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
    },
});

const { setClient, setAddress, setChain, setAllBalances } = appStore.actions;

const appReducer = appStore.reducer;

export { setClient, setAddress, setChain, setAllBalances };
export const selectClient = (state: RootState) => state.app.client;
export default appReducer;
