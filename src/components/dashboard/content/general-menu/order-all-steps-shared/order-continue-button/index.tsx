import React from 'react'

import './OrderContinueButton.scss'

interface IProps extends React.ComponentProps<'button'> {
  text: string
  disable?: boolean
}

const ContinueButton: React.FC<IProps> = props => {
  const { text, disable, ...customProps } = props

  return (
    <button className={`order-continue-button ${disable && 'order-continue-button--disable'}`} {...customProps}>
      {text}
    </button>
  )
}

export default ContinueButton
