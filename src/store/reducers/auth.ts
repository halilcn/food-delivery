import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const LOCAL_STORAGE_USER = 'user'

export interface IUser {
  username: string
  image: string
}

export interface IAuthState {
  user: IUser | null
}

const initialState: IAuthState = {
  user: localStorage.getItem(LOCAL_STORAGE_USER) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER) || '{}') : null,
}

//todo:! auth manage problem
export const authSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(action.payload))
      state.user = action.payload
    },
    deleteUser: state => {
      localStorage.removeItem(LOCAL_STORAGE_USER)
      state.user = null
    },
  },
})

export const authReduceActions = authSlice.actions
export default authSlice.reducer
