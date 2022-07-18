import React from 'react'
import { BsBasket3 } from 'react-icons/bs'

import './EmptyBasket.scss'

interface IProps {}

const EmptyBasket: React.FC<IProps> = props => {
  return (
    <div className="empty-basket">
      <BsBasket3 className="empty-basket__icon" />
      <div className="empty-basket__text">Your basket is empty</div>
    </div>
  )
}

export default EmptyBasket
