import React from 'react'

import './GeneralMenu.scss'
import EmptyBasket from './empty-basket'
import OrderContinueButton from './order-continue-button'
import OrderMenu from './order-menu'
import PaymentMethods from './payment-methods'
import TotalAmount from './total-amount'

interface IProps {}

const GeneralMenu: React.FC<IProps> = props => {
  return (
    <div className="general-menu">
      <div>
        <OrderMenu />
        <TotalAmount />
        <PaymentMethods />
        <OrderContinueButton />
      </div>
    </div>
  )
}

export default GeneralMenu
