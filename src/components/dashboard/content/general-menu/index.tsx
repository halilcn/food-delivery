import React from 'react'

import './GeneralMenu.scss'
import EmptyBasket from './empty-basket'
import OrderMenu from './order-menu'
import TotalAmount from './total-amount'

interface IProps {}

const GeneralMenu: React.FC<IProps> = props => {
  return (
    <div className="general-menu">
      <div>
        <OrderMenu />
        <TotalAmount />
      </div>
    </div>
  )
}

export default GeneralMenu
