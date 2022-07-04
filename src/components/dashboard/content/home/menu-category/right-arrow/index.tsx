import React from 'react'
import { VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaAngleRight } from 'react-icons/fa'

import './RightArrow.scss'

interface IProps {}

const LeftArrow: React.FC<IProps> = props => {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

  return isLastItemVisible ? (
    <div />
  ) : (
    <div className="right-arrow" onClick={() => scrollNext()}>
      {<FaAngleRight />}
    </div>
  )
}

export default LeftArrow
