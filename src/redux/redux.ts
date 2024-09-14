import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

interface StateType {
  count: number;
}
const initialState: StateType = {
  count: 0,
};

const increment = createAction("Increment");
const decrement = createAction("Decrement");

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state) => {
    state.count += 1;
  });

  builder.addCase(decrement, (state) => {
    state.count -= 1;
  });
});

export const store = configureStore({ reducer: rootReducer });
