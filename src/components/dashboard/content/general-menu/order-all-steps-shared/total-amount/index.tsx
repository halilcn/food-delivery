import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../../../../../store'
import './TotalAmount.scss'

interface IProps {}

const TotalAmount: React.FC<IProps> = props => {
  const basketState = useSelector((state: RootState) => state.basket)

  //todo:!
  const totalBasketAmount = basketState.orders.reduce((a: any, b) => {
    return a.piece + b.piece
  })
  console.log('total basket')
  console.log(totalBasketAmount)

  return (
    <div className="total-amount">
      Total Amount:
      <span className="total-amount__number">$12</span>
    </div>
  )
}

export default TotalAmount
