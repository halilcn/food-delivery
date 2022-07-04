import React from 'react'
import { VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaAngleLeft } from 'react-icons/fa'

import './LeftArrow.scss'

interface IProps {}

const LeftArrow: React.FC<IProps> = props => {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

  return isFirstItemVisible ? (
    <div />
  ) : (
    <div className="left-arrow" onClick={() => scrollPrev()}>
      <FaAngleLeft />
    </div>
  )
}

export default LeftArrow
