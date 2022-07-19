import React from 'react'
import { BsCash, BsCreditCard2BackFill, BsFillCreditCard2FrontFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../../../../../store'
import { IPaymentMethod } from '../../../../../../store/reducers/basket'
import { basketReduceActions } from '../../../../../../store/reducers/basket'
import './PaymentMethods.scss'

interface IProps {}

const PaymentMethods: React.FC<IProps> = props => {
  const basketState = useSelector((state: RootState) => state.basket)
  const dispatch = useDispatch()

  const selectPaymentMethod = (paymentMethod: IPaymentMethod) => {
    dispatch(basketReduceActions.setPaymentMethod(paymentMethod))
  }

  //todo:dynamic class için tek fonkstiyon ?

  return (
    <div className="payment-methods">
      <div className="payment-methods__title">Payment Methods</div>
      <div className="payment-methods__list">
        <div
          className={`payment-methods__item  ${
            basketState.paymentMethods === IPaymentMethod.CASH && 'payment-methods__item--selected'
          }`}
          onClick={() => selectPaymentMethod(IPaymentMethod.CASH)}>
          <BsCash className="payment-methods__item-icon" />
          <span className="payment-methods__item-text">Cash</span>
        </div>
        <div
          className={`payment-methods__item  ${
            basketState.paymentMethods === IPaymentMethod.CREDIT_CARD && 'payment-methods__item--selected'
          }`}
          onClick={() => selectPaymentMethod(IPaymentMethod.CREDIT_CARD)}>
          <BsCreditCard2BackFill className="payment-methods__item-icon" />
          <span className="payment-methods__item-text">Debit Card</span>
        </div>
        <div
          className={`payment-methods__item  ${
            basketState.paymentMethods === IPaymentMethod.FOOD_CARD && 'payment-methods__item--selected'
          }`}
          onClick={() => selectPaymentMethod(IPaymentMethod.FOOD_CARD)}>
          <BsFillCreditCard2FrontFill className="payment-methods__item-icon" />
          <span className="payment-methods__item-text">Food Card</span>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethods
