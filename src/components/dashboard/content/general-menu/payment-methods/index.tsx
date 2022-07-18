import React from 'react'
import { BsCash, BsCreditCard2BackFill } from 'react-icons/bs'

import './PaymentMethods.scss'

interface IProps {}

const PaymentMethods: React.FC<IProps> = props => {
  return (
    <div className="payment-methods">
      <div className="payment-methods__title">Payment Methods</div>
      <div className="payment-methods__list">
        <div className="payment-methods__item">
          <BsCash className="payment-methods__item-icon" />
          <span className="payment-methods__item-text">Cash</span>
        </div>
        <div className="payment-methods__item">
          <BsCreditCard2BackFill className="payment-methods__item-icon" />
          <span className="payment-methods__item-text">Debit Card</span>
        </div>
        <div className="payment-methods__item">
          <BsCash className="payment-methods__item-icon" />
          <span className="payment-methods__item-text">Food Card</span>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethods
