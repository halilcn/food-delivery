import React from 'react'

import './GeneralMenu.scss'
import EmptyBasket from './empty-basket'
import OrderContinueButton from './order-all-steps-shared/order-continue-button'
import TotalAmount from './order-all-steps-shared/total-amount'
import OrderMenu from './order-first-step/order-menu'
import PaymentMethods from './order-first-step/payment-methods'
import BackFirstStep from './order-last-step/back-first-step'
import CreditCard from './order-last-step/credit-card'
import OrderAddress from './order-last-step/order-address'

interface IProps {}

/*
*  <div className="general-menu__order-menu-first-step">
        <OrderMenu />
        <TotalAmount />
        <PaymentMethods />
        <OrderContinueButton text="Continue to Payment"/>
      </div>*/

const GeneralMenu: React.FC<IProps> = props => {
  return (
    <div className="general-menu">
      <div className="general-menu__order-menu-last-step">
        <BackFirstStep />
        <TotalAmount />
        <OrderAddress />
        <CreditCard />
        <OrderContinueButton text="Pay" />
      </div>
    </div>
  )
}

export default GeneralMenu
