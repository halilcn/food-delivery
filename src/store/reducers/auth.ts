import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../index'

export interface IUser {
  username: string
  image: string
}

export interface IAuthState {
  user: IUser | null
}

const initialState: IAuthState = {
  user: null,
}

const LOCAL_STORAGE_USER = 'USER'

export const authSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      //localStorage.setItem(LOCAL_STORAGE_USER,'D')
      state.user = action.payload
    },
  },
})

export const authReduceActions = authSlice.actions
export default authSlice.reducer
