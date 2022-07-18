import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IBasketState {
  valueTest: number
}

const initialState: IBasketState = {
  valueTest: 0,
}

export const basketSlice = createSlice({
  initialState,
  name: 'basket',
  reducers: {
    increment: state => {
      state.valueTest++
    },
    customAdd: (state, action: PayloadAction<number>) => {
      state.valueTest += action.payload
    },
  },
})

export const basketReduceAction = basketSlice.actions
export default basketSlice.reducer
