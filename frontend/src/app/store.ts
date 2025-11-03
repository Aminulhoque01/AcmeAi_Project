import { configureStore } from "@reduxjs/toolkit";
import { legalApi } from "../features/legal/legalApi";
import legalReducer  from "../features/legal/legalSlice";
 

export const store = configureStore({
  reducer: {
    [legalApi.reducerPath]: legalApi.reducer,
    legal: legalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(legalApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
