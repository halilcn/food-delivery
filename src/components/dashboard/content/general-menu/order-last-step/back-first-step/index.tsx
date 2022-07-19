import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

import './BackFirstStep.scss'

interface IProps {}

const BackFirstStep: React.FC<IProps> = props => {
  return (
    <div className="back-first-step">
      <IoIosArrowBack className="back-first-step__icon" />
      back
    </div>
  )
}

export default BackFirstStep
