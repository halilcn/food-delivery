import React from 'react'
import { BsCash, BsCreditCard2BackFill, BsFillCreditCard2FrontFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../../../../../store'
import { IPaymentMethod, basketReduceActions } from '../../../../../../store/reducers/basket'
import './PaymentMethods.scss'

interface IProps {}

const PaymentMethods: React.FC<IProps> = props => {
  const basketState = useSelector((state: RootState) => state.basket)
  const dispatch = useDispatch()

  const selectPaymentMethod = (paymentMethod: IPaymentMethod) => {
    dispatch(basketReduceActions.setPaymentMethod(paymentMethod))
  }

  const dynamicSelectedClass = (paymentMethod: IPaymentMethod) => {
    if (basketState.paymentMethods === paymentMethod) return 'payment-methods__item--selected'
  }

  return (
    <div className="payment-methods">
      <div className="payment-methods__title">Payment Methods</div>
      <div className="payment-methods__list">
        <div
          className={`payment-methods__item  ${dynamicSelectedClass(IPaymentMethod.CASH)}`}
          onClick={() => selectPaymentMethod(IPaymentMethod.CASH)}>
          <BsCash className="payment-methods__item-icon" />
          <span className="payment-methods__item-text">Cash</span>
        </div>
        <div
          className={`payment-methods__item  ${dynamicSelectedClass(IPaymentMethod.CREDIT_CARD)}`}
          onClick={() => selectPaymentMethod(IPaymentMethod.CREDIT_CARD)}>
          <BsCreditCard2BackFill className="payment-methods__item-icon" />
          <span className="payment-methods__item-text">Debit Card</span>
        </div>
        <div
          className={`payment-methods__item  ${dynamicSelectedClass(IPaymentMethod.FOOD_CARD)}`}
          onClick={() => selectPaymentMethod(IPaymentMethod.FOOD_CARD)}>
          <BsFillCreditCard2FrontFill className="payment-methods__item-icon" />
          <span className="payment-methods__item-text">Food Card</span>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethods
