import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface LegalState {
  query: string;
}

const initialState: LegalState = {
  query: "",
};

const legalSlice = createSlice({
  name: "legal",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = legalSlice.actions;
export default legalSlice.reducer;
