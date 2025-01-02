import { createSlice } from '@reduxjs/toolkit';
import mobileData from '../data/mobileData';

const initialState = {
  products: mobileData,
  selectedProduct: null,
};

export const mobileSlice = createSlice({
  name: 'mobile',
  initialState,
  reducers: {
    setSelectedMobile: (state, action) => {
      state.selectedProduct = state.products.find(product => product.id === action.payload) || null;
    },
  },
});

export const { setSelectedMobile } = mobileSlice.actions;

export const selectMobiles = (state) => state.mobile.products;
export const selectSelectedMobile = (state) => state.mobile.selectedProduct;

export default mobileSlice.reducer;