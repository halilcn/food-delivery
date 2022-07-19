import React from 'react'
import { HiMinusSm, HiOutlinePlusSm } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../../../../../store'
import { basketReduceActions } from '../../../../../../store/reducers/basket'
import './OrderMenu.scss'

interface IProps {}

const OrderMenu: React.FC<IProps> = props => {
  const basketState = useSelector((state: RootState) => state.basket)
  const dispatch = useDispatch()

  return (
    <div className="order-menu">
      <div className="order-menu__title">My Order</div>
      <div className="order-menu__list">
        {basketState.orders.map((order, key) => (
          <div key={key} className="order-menu__item">
            <img className="order-menu__item-image" src={order.image} />
            <div className="order-menu__item-piece">
              <HiMinusSm
                onClick={() => dispatch(basketReduceActions.reducePieceOfOrder({ id: order.id, piece: 1 }))}
                className="order-menu__item-piece-icon"
              />
              <span className="order-menu__item-piece-number">{order.piece}</span>
              <HiOutlinePlusSm
                onClick={() => dispatch(basketReduceActions.increasePieceOfOrder({ id: order.id, piece: 1 }))}
                className="order-menu__item-piece-icon"
              />
            </div>
            <div className="order-menu__item-name">{order.name}</div>
            <div className="order-menu__item-amount">
              <span className="order-menu__item-amount__dollar-icon">$</span>
              {order.piece * order.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderMenu
