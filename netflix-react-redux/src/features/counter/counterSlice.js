import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    setSimpsons: (state, action) => {
      state.simpson = action.payload;
    },
  },
});

export const { setSimpsons, increment, decrement, reset } =
  counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export const selectSimpson = (state) => state.counter.simpson;

export default counterSlice.reducer;
