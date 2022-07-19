import React from 'react'
import { MdOutlineMapsHomeWork } from 'react-icons/md'

import './OrderAddress.scss'

interface IProps {}

const OrderAddress: React.FC<IProps> = props => {
  return (
    <div className="order-address">
      <div className="order-address__title">Address</div>
      <div className="order-address__selected-address">
        <MdOutlineMapsHomeWork className="order-address__selected-address__icon" />
        <span className="order-address__selected-address__text">Home</span>
      </div>
    </div>
  )
}

export default OrderAddress
