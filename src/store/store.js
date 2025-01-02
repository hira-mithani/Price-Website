import { configureStore } from '@reduxjs/toolkit';
import earbudReducer from '../features/productSlice';
import mobileReducer from '../features/mobileSlice';

export const store = configureStore({
  reducer: {
    earbud: earbudReducer,
    mobile: mobileReducer,
  },
});