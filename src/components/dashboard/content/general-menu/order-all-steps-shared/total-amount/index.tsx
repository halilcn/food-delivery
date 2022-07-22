import React from 'react'
import { useSelector } from 'react-redux'

import { basketReduceGetters } from '../../../../../../store/reducers/basket'
import './TotalAmount.scss'

interface IProps {}

const TotalAmount: React.FC<IProps> = props => {
  const totalAmount = useSelector(basketReduceGetters.totalAmount)

  return (
    <div className="total-amount">
      Total Amount:
      <span className="total-amount__number">${totalAmount}</span>
    </div>
  )
}

export default TotalAmount
