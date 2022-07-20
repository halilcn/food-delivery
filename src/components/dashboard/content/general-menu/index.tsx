import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../../../store'
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

const GeneralMenu: React.FC<IProps> = props => {
  const [isLastStep, setIsLastStep] = useState<boolean>(false)

  const basketState = useSelector((state: RootState) => state.basket)

  const toggleLastStep = () => {
    setIsLastStep(!isLastStep)
  }

  return (
    <div className="general-menu">
      {!basketState.orders.length && <EmptyBasket />}
      {!!basketState.orders.length && !isLastStep && (
        <div className="general-menu__order-menu-first-step">
          <OrderMenu />
          <TotalAmount />
          <PaymentMethods />
          <OrderContinueButton
            disable={basketState.paymentMethods === null}
            onClick={toggleLastStep}
            text="Continue to Payment"
          />
        </div>
      )}
      {!!basketState.orders.length && isLastStep && (
        <div className="general-menu__order-menu-last-step">
          <BackFirstStep onClick={toggleLastStep} />
          <TotalAmount />
          <OrderAddress />
          <CreditCard />
          <OrderContinueButton text="Pay" />
        </div>
      )}
    </div>
  )
}

export default GeneralMenu
