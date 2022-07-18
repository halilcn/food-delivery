import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../../../../store'
import { basketReduceAction } from '../../../../../store/reducers/basket'
import './OrderMenu.scss'

interface IProps {}

const OrderMenu: React.FC<IProps> = props => {
  const count = useSelector((state: RootState) => state.basket)
  const dispatch = useDispatch()

  return (
    <div className="order-menu">
      <div className="order-menu__title">My Order</div>
      <div onClick={() => dispatch(basketReduceAction.increment())}>test çoğ</div>
      <div onClick={() => dispatch(basketReduceAction.customAdd(5))}>custom</div>
      <span>{count.valueTest}</span>

      <div className="order-menu__list">
        <div className="order-menu__item">
          <img className="order-menu__item-image" src={`/food/pizza/various.webp`} />
          <div className="order-menu__item-piece">1</div>
          <div className="order-menu__item-name">Pizza</div>
          <div className="order-menu__item-amount">$15</div>
        </div>
        <div className="order-menu__item">
          <img className="order-menu__item-image" src={`/food/pizza/crispy-edge.webp`} />
          <div className="order-menu__item-piece">1</div>
          <div className="order-menu__item-name">Pizza</div>
          <div className="order-menu__item-amount">$15</div>
        </div>
        <div className="order-menu__item">
          <img className="order-menu__item-image" src={`/food/pizza/sausage.webp`} />
          <div className="order-menu__item-piece">1</div>
          <div className="order-menu__item-name">Pizza</div>
          <div className="order-menu__item-amount">$15</div>
        </div>
      </div>
    </div>
  )
}

export default OrderMenu
