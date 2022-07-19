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
  orders: [
    { id: 'test', name: 'Pizza', image: '/food/pizza/various.webp', piece: 2, amount: 14 },
    { id: 'test', name: 'Tadım Pizza', image: '/food/pizza/various.webp', piece: 5, amount: 4 },
  ],
  paymentMethods: null,
}

export const basketSlice = createSlice({
  initialState,
  name: 'basket',
  reducers: {
    addOrder: (state, action: PayloadAction<IOrder>) => {
      state.orders.push(action.payload)
    },
    increasePieceOfOrder: (state, action: PayloadAction<IPieceAction>) => {
      const order = state.orders.find(order => order.id === action.payload.id)
      if (order) order.piece += action.payload.piece
    },
    reducePieceOfOrder: (state, action: PayloadAction<IPieceAction>) => {
      const order = state.orders.find(order => order.id === action.payload.id)

      if (!order) return

      if (order.piece !== 1) {
        order.piece -= action.payload.piece
        return
      }

      state.orders = state.orders.filter(order => order.id !== action.payload.id)
    },
    setPaymentMethod: (state, action: PayloadAction<IPaymentMethod>) => {
      state.paymentMethods = action.payload
    },
  },
})

export const basketReduceActions = basketSlice.actions
export default basketSlice.reducer
