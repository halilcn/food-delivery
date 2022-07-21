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

  const existsInBasket = (menuId: string) => {
    return basketState.orders.find(order => order.id === menuId)
  }

  const addToBasket = (menu: any) => {
    const { description, ...menuInfoToStore } = menu

    if (existsInBasket(menuInfoToStore.id)) {
      // dispatch(basketReduceActions.a({ ...menuInfoToStore, piece: 1 }))
    }

    dispatch(basketReduceActions.addOrder({ ...menuInfoToStore, piece: 1 }))
  }

  return (
    <div className="menu-list">
      {MENU_LIST.map(menu => (
        <div className="menu-list__item">
          <img className="menu-list__food-image" src={menu.image} />
          <div className="menu-list__bottom-content">
            <div className="menu-list__food-name">{menu.name}</div>
            <div className="menu-list__food-description">{menu.description}</div>
            <div className="menu-list__amount">${menu.amount}</div>
          </div>
          <div className="menu-list__basket-actions">
            {!existsInBasket(menu.id) && (
              <HiOutlinePlusSm onClick={() => addToBasket(menu)} className="menu-list__basket-first-add" />
            )}

            {existsInBasket(menu.id) && (
              <div className="menu-list__basket-piece-action">
                <HiMinusSm className="menu-list__basket-piece-action__icon" />
                <span className="menu-list__basket-piece-action__number">1</span>
                <HiOutlinePlusSm className="menu-list__basket-piece-action__icon" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MenuList
