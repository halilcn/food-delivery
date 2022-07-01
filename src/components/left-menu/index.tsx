import React from 'react'
import { BiHomeAlt, BiMessageRounded, BiWallet } from 'react-icons/bi'

import './LeftMenu.scss'

interface IProps {}

const LeftMenu: React.FC<IProps> = props => {
  return (
    <div className="left-menu-container">
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

export default LeftMenu
