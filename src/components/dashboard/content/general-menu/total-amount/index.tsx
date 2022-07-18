import React from 'react'

import './TotalAmount.scss'

interface IProps {}

const TotalAmount: React.FC<IProps> = props => {
  return (
    <div className="total-amount">
      Total Amount:
      <span className="total-amount__number">$300</span>
    </div>
  )
}

export default TotalAmount
