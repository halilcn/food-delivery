import React from 'react'

import './Content.scss'
import GeneralMenu from './general-menu'
import Home from './home'

interface IProps {}

const Content: React.FC<IProps> = props => {
  return (
    <div className="content">
      <div className="content__dynamic-page">
        <Home />
      </div>
      <GeneralMenu />
    </div>
  )
}

export default Content
