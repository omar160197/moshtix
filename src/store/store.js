import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import  artistSlice  from './artistSlice/artistSlice';


export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    artist:artistSlice,
  },
});
