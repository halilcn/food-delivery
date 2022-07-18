import React from 'react'

import './OrderContinueButton.scss'

interface IProps {}

const ContinueButton: React.FC<IProps> = props => {
  return <div className="order-continue-button">continue to checkout</div>
}

export default ContinueButton
