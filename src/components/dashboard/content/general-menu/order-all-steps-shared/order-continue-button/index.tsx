import React from 'react'

import './OrderContinueButton.scss'

interface IProps {
  text: string
  disable?: boolean
}

const ContinueButton: React.FC<IProps> = props => {
  const { text, disable } = props

  return <div className="order-continue-button">{text}</div>
}

export default ContinueButton
