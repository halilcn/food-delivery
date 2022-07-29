import { motion } from 'framer-motion'
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

  const firstStepAnimateVariants = {
    initial: { right: '100%' },
    active: { right: 0 },
  }

  const lastStepAnimateVariants = {
    initial: { right: '-100%' },
    active: { right: 0 },
  }

  const emptyBasketAnimateVariants = {
    initial: { opacity: 0 },
    active: { opacity: 1 },
  }

  return (
    <div className="general-menu">
      {!basketState.orders.length && (
        <motion.div
          animate={!basketState.orders.length ? 'active' : 'initial'}
          variants={emptyBasketAnimateVariants}
          className="general-menu__order-menu-step">
          <EmptyBasket />
        </motion.div>
      )}
      <motion.div
        animate={!!basketState.orders.length && !isLastStep ? 'active' : 'initial'}
        variants={firstStepAnimateVariants}
        className="general-menu__order-menu-step general-menu__order-menu-step--first">
        <OrderMenu />
        <TotalAmount />
        <PaymentMethods />
        <OrderContinueButton disable={basketState.paymentMethods === null} onClick={toggleLastStep} text="Continue to Payment" />
      </motion.div>

      <motion.div
        animate={!!basketState.orders.length && isLastStep ? 'active' : 'initial'}
        variants={lastStepAnimateVariants}
        className="general-menu__order-menu-step general-menu__order-menu-step--last">
        <BackFirstStep onClick={toggleLastStep} />
        <TotalAmount />
        <OrderAddress />
        <CreditCard />
        <OrderContinueButton text="Pay" />
      </motion.div>
    </div>
  )
}

export default GeneralMenu
