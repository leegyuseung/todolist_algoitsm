import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./data-slice";

const store = configureStore({
  reducer: { data: dataReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
