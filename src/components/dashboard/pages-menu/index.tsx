import { motion } from 'framer-motion'
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
    dispatch(authReduceActions.deleteUser())
    navigate(router.login.path)
  }

  const animateProps = {
    initial: { right: 80, opacity: 0.5 },
    animate: { right: 0, opacity: 1 },
    transition: (delay: number = 0) => {
      return {
        delay,
        duration: 0.1,
      }
    },
  }

  return (
    <div className="pages-menu">
      <div className="pages-menu__list">
        <motion.div
          className="pages-menu__item pages-menu__item--selected"
          initial={animateProps.initial}
          animate={animateProps.animate}
          transition={animateProps.transition(0.1)}>
          <BiHomeAlt />
        </motion.div>
        <motion.div
          className="pages-menu__item"
          initial={animateProps.initial}
          animate={animateProps.animate}
          transition={animateProps.transition(0.2)}>
          <BiWallet />
        </motion.div>
        <motion.div
          className="pages-menu__item"
          initial={animateProps.initial}
          animate={animateProps.animate}
          transition={animateProps.transition(0.3)}>
          <BiHistory />
        </motion.div>
        <motion.div
          className="pages-menu__item"
          initial={animateProps.initial}
          animate={animateProps.animate}
          transition={animateProps.transition(0.4)}>
          <BiMessageRounded />
        </motion.div>
      </div>
      <div onClick={logout} className="pages-menu__item pages-menu__logout">
        <HiOutlineLogout />
      </div>
    </div>
  )
}

export default PagesMenu
