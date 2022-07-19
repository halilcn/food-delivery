import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

import './BackFirstStep.scss'

interface IProps extends React.ComponentProps<'button'> {}

const BackFirstStep: React.FC<IProps> = props => {
  return (
    <button {...props} className="back-first-step">
      <IoIosArrowBack className="back-first-step__icon" />
      back
    </button>
  )
}

export default BackFirstStep
