import React from 'react'
import { BiHomeAlt, BiMessageRounded, BiWallet } from 'react-icons/bi'

import './PageMenu.scss'

interface IProps {}

const PagesMenu: React.FC<IProps> = props => {
  return (
    <div className="pages-menu-container">
      <div className="menu-item selected">
        <BiHomeAlt />
      </div>
      <div className="menu-item">
        <BiMessageRounded />
      </div>
      <div className="menu-item">
        <BiWallet />
      </div>
    </div>
  )
}

export default PagesMenu
