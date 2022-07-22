import { configureStore } from '@reduxjs/toolkit'

import user from './reducers/auth'
import basket from './reducers/basket'

export const store = configureStore({
  reducer: {
    basket,
    user,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
