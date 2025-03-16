import { createSlice } from "@reduxjs/toolkit";
import { getMockDataTable } from "../../utils/get-mock-data-table";

const initialState = getMockDataTable();

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    editClientInfo: (state, action) => {
      return state.map((client) => {
        if (client.id == action.payload.id) {
          return action.payload;
        } else return client;
      });
    },
    addClient: (state, action) => [...state, action.payload],
  },
});

export const { editClientInfo, addClient } = clientsSlice.actions;

export default clientsSlice.reducer;
