import React from 'react'

import './CreditCard.scss'

interface IProps {}

const CreditCard: React.FC<IProps> = props => {
  return (
    <div className="credit-card">
      <div className="credit-card__title">Credit Card</div>
      <div className="credit-card__stored">
        <img className="credit-card__stored-icon" src="/icons/visa.png" />
        <div className="credit-card__stored-number">**** ***** ***** 1234</div>
      </div>
    </div>
  )
}

export default CreditCard
