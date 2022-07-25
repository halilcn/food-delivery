import { motion } from 'framer-motion'
import React from 'react'
import { HiMinusSm, HiOutlinePlusSm } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../../../../store'
import { MENU_LIST } from '../../../../../store/constants'
import { basketReduceActions } from '../../../../../store/reducers/basket'
import './MenuList.scss'

interface IProps {}

const MenuList: React.FC<IProps> = props => {
  const basketState = useSelector((state: RootState) => state.basket)
  const dispatch = useDispatch()

  const findOrder = (menuId: string) => {
    return basketState.orders.find(order => order.id === menuId)
  }

  const addToBasket = (menu: any, piece: number) => {
    const { description, ...menuInfo } = menu

    if (findOrder(menuInfo.id)) {
      dispatch(basketReduceActions.updatePieceOfOrder({ id: menuInfo.id, piece }))
      return
    }

    dispatch(basketReduceActions.addOrder({ ...menuInfo, piece }))
  }

  const actionButtonAnimateProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  }

  return (
    <div className="menu-list">
      {MENU_LIST.map((menu, key) => (
        <div key={key} className={`menu-list__item ${findOrder(menu.id) && 'menu-list__item--selected'}`}>
          <img className="menu-list__food-image" src={menu.image} />
          <div className="menu-list__bottom-content">
            <div className="menu-list__food-name">{menu.name}</div>
            <div className="menu-list__food-description">{menu.description}</div>
            <div className="menu-list__amount">${menu.amount}</div>
          </div>
          <div className="menu-list__basket-actions">
            {!findOrder(menu.id) && (
              <motion.div
                className="menu-list__basket-action-button"
                whileHover={actionButtonAnimateProps.whileHover}
                whileTap={actionButtonAnimateProps.whileTap}>
                <HiOutlinePlusSm onClick={() => addToBasket(menu, 1)} className="menu-list__basket-first-add" />
              </motion.div>
            )}

            {findOrder(menu.id) && (
              <div className="menu-list__basket-piece-action">
                <HiMinusSm onClick={() => addToBasket(menu, -1)} className="menu-list__basket-piece-action__icon" />
                <span className="menu-list__basket-piece-action__number">{findOrder(menu.id)?.piece}</span>
                <HiOutlinePlusSm onClick={() => addToBasket(menu, 1)} className="menu-list__basket-piece-action__icon" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MenuList
