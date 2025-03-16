import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./slices/client-slice";

export const store = configureStore({
  reducer: {
    clients: clientsReducer,
  },
});
