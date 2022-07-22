import React from 'react'
import { BiHistory, BiHomeAlt, BiMessageRounded, BiWallet } from 'react-icons/bi'
import { HiOutlineLogout } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import router from '../../../router'
import { authReduceActions } from '../../../store/reducers/auth'
import './PageMenu.scss'

interface IProps {}

const PagesMenu: React.FC<IProps> = props => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = () => {
    dispatch(authReduceActions.deleteUser)
    navigate(router.login.path)
  }

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
      <div onClick={logout} className="pages-menu__item pages-menu__logout">
        <HiOutlineLogout />
      </div>
    </div>
  )
}

export default PagesMenu
