import React from 'react'

import './MenuCategory.scss'

interface IProps {}

const MenuCategory: React.FC<IProps> = props => {
  return (
    <div className="menu-category">
      <div className="menu-category__title">Menu Category</div>
      <div className="menu-category__list">
        <div className="menu-category__item menu-category__item--selected">
          <img className="menu-category__icon" src="/icons/beef-50.png" />
          <div className="menu-category__name">Beef</div>
        </div>
      </div>
    </div>
  )
}

export default MenuCategory
