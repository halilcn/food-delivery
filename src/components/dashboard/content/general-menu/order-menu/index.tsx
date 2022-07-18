import React from 'react'

import './OrderMenu.scss'

interface IProps {}

const OrderMenu: React.FC<IProps> = props => {
  return (
    <div className="order-menu">
      <div className="order-menu__title">My Order</div>
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
