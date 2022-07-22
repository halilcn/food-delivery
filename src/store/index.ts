import { configureStore } from '@reduxjs/toolkit'

import auth from './reducers/auth'
import basket from './reducers/basket'

export const store = configureStore({
  reducer: {
    basket,
    auth,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
