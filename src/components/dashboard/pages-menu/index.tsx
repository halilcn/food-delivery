import React from 'react'
import { BiHistory, BiHomeAlt, BiMessageRounded, BiWallet } from 'react-icons/bi'
import { HiOutlineLogout } from 'react-icons/hi'

import './PageMenu.scss'

interface IProps {}

const PagesMenu: React.FC<IProps> = props => {
  return (
    <div className="pages-menu">
      <div className="pages-menu__list">
        <div className="pages-menu__item pages-menu__item--selected">
          <BiHomeAlt />
        </div>
        <div className="pages-menu__item">
          <BiWallet />
        </div>
        <div className="pages-menu__item">
          <BiHistory />
        </div>
        <div className="pages-menu__item">
          <BiMessageRounded />
        </div>
      </div>
      <div className="pages-menu__item pages-menu__logout">
        <HiOutlineLogout />
      </div>
    </div>
  )
}

export default PagesMenu
