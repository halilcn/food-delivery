import React from 'react'
import { HiMinusSm, HiOutlinePlusSm } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../../../../../store'
import { basketReduceAction } from '../../../../../../store/reducers/basket'
import './OrderMenu.scss'

interface IProps {}

const OrderMenu: React.FC<IProps> = props => {
  const count = useSelector((state: RootState) => state.basket)
  const dispatch = useDispatch()

  return (
    <div className="order-menu">
      <div className="order-menu__title">My Order</div>
      <div className="order-menu__list">
        <div className="order-menu__item">
          <img className="order-menu__item-image" src={`/food/pizza/various.webp`} />
          <div className="order-menu__item-piece">
            <HiMinusSm className="order-menu__item-piece-icon" />
            <span className="order-menu__item-piece-number">1</span>
            <HiOutlinePlusSm className="order-menu__item-piece-icon" />
          </div>
          <div className="order-menu__item-name">Pizza</div>
          <div className="order-menu__item-amount">
            <span className="order-menu__item-amount__dollar-icon">$</span>
            15
          </div>
        </div>
        <div className="order-menu__item">
          <img className="order-menu__item-image" src={`/food/pizza/various.webp`} />
          <div className="order-menu__item-piece">
            <HiMinusSm className="order-menu__item-piece-icon" />
            <span className="order-menu__item-piece-number">1</span>
            <HiOutlinePlusSm className="order-menu__item-piece-icon" />
          </div>
          <div className="order-menu__item-name">Pizza</div>
          <div className="order-menu__item-amount">
            <span className="order-menu__item-amount__dollar-icon">$</span>
            15
          </div>
        </div>
        <div className="order-menu__item">
          <img className="order-menu__item-image" src={`/food/pizza/various.webp`} />
          <div className="order-menu__item-piece">
            <HiMinusSm className="order-menu__item-piece-icon" />
            <span className="order-menu__item-piece-number">1</span>
            <HiOutlinePlusSm className="order-menu__item-piece-icon" />
          </div>
          <div className="order-menu__item-name">Pizza</div>
          <div className="order-menu__item-amount">
            <span className="order-menu__item-amount__dollar-icon">$</span>
            15
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderMenu
