// this file:
// Combines all reducers
// Enables saving state in local storage
// Configures middleware

// NOTE: 
// redux-persist → saves Redux state in browser storage
// storage → uses localStorage by default

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";

import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",      //name of stored data in localStorage
  version: 1,       //used for migrations (advanced use later)
  storage,          //where data is saved (localStorage)
}

const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);            //Saves state to localStorage & Restores it when app reloads

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    },
  })
})

export let persistor = persistStore(store)