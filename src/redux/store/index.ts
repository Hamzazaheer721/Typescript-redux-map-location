import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import { userSignupSlice } from '../features/userSignupSlice'
import { userSigninSlice } from '../features/userSigninSlice/index'
import { activationSlice } from '../features/activationSlice'
import { resendActivationLinkSlice } from '../features/resendActivationLinkSlice'

const reducers = combineReducers({
  user: userSigninSlice.reducer,
  registerUser: userSignupSlice.reducer,
  activation: activationSlice.reducer,
  resendActivation: resendActivationLinkSlice.reducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['registerUser'] // only registerUser will be persisted
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
