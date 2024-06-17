import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../components/interfase";
export interface CounterState {
  product: [Product];
  amout: number;
}
let dataFromLoclaStore = (): CounterState => {
  const storedData = localStorage.getItem("counter");
  return storedData ? JSON.parse(storedData) : { amout: 0, product: [] };
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: dataFromLoclaStore,
  reducers: {
    addAmount: (state, { payload }: PayloadAction<Product>) => {
      let findProduct = state.product.find((prev) => {
        return prev.id == payload.id;
      });
      if (findProduct) {
        state.amout += payload.total;
        findProduct.total += payload.total;
      } else {
        state.product.push(payload);
        state.amout += payload.total;
      }
      counterSlice.caseReducers.setLocal(state);
    },
    setLocal: (state) => {
      localStorage.setItem("counter", JSON.stringify(state));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAmount } = counterSlice.actions;

export default counterSlice.reducer;
