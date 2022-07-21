import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IPieceAction {
  id: string
  piece: number
}

interface IOrder {
  id: string
  name: string
  image: string
  piece: number
  amount: number
}

export enum IPaymentMethod {
  CASH,
  CREDIT_CARD,
  FOOD_CARD,
}

export interface IBasketState {
  orders: IOrder[]
  paymentMethods: IPaymentMethod | null
}

const initialState: IBasketState = {
  orders: [],
  paymentMethods: null,
}

export const basketSlice = createSlice({
  initialState,
  name: 'basket',
  reducers: {
    addOrder: (state, action: PayloadAction<IOrder>) => {
      state.orders.push(action.payload)
    },
    updatePieceOfOrder: (state, action: PayloadAction<IPieceAction>) => {
      const order = state.orders.find(order => order.id === action.payload.id)
      const piece = action.payload.piece

      if (!order) return

      if (piece < 0 && order.piece === 1) {
        state.orders = state.orders.filter(order => order.id !== action.payload.id)
        return
      }

      order.piece += piece
    },
    setPaymentMethod: (state, action: PayloadAction<IPaymentMethod>) => {
      state.paymentMethods = action.payload
    },
  },
})

export const basketReduceActions = basketSlice.actions
export default basketSlice.reducer
