import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watches: [
    { id: 1, name: "Watch 1", image: "path/to/watch1.jpg" },
    { id: 2, name: "Watch 2", image: "path/to/watch2.jpg" },
  ],
  selectedWatch: null,
};

const watchSlice = createSlice({
  name: "watch",
  initialState,
  reducers: {
    selectWatch: (state, action) => {
      state.selectedWatch = action.payload;
    },
  },
});

export const { selectWatch } = watchSlice.actions;
export default watchSlice.reducer;
