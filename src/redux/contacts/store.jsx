import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import contactsReducers from './contactsReducers';
import filterReducer from './filterReducer';
import authSlice from 'redux/auth/auth-slice';

const persistConfig = {
  key: 'auth',
  storage,
  blacklist: ['filter'],
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSlice),
    contacts: contactsReducers,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
