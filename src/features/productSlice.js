import { createSlice } from '@reduxjs/toolkit';
import earbudData from '../data/earbudData';

const initialState = {
  products: earbudData,
  selectedProduct: null,
};

export const earbudSlice = createSlice({
  name: 'earbud',
  initialState,
  reducers: {
    setSelectedEarbud: (state, action) => {
      state.selectedProduct = state.products.find(product => product.id === action.payload) || null;
    },
  },
});

export const { setSelectedEarbud } = earbudSlice.actions;

export const selectEarbuds = (state) => state.earbud.products;
export const selectSelectedEarbud = (state) => state.earbud.selectedProduct;

export default earbudSlice.reducer;