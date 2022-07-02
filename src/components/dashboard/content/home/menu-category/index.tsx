import React from 'react'

import './MenuCategory.scss'

interface IProps {}

const MenuCategory: React.FC<IProps> = props => {
  return (
    <div className="menu-category-container">
      <div className="title">Menu Category</div>
      <div className="menu-list">
        <div className="item">
          <img className="icon" src="/icons/beef-50.png" />
          <div className="name">Beef</div>
        </div>
        <div className="item selected">
          <img className="icon" src="/icons/beef-50.png" />
          <div className="name">Beef</div>
        </div>
        <div className="item">
          <img className="icon" src="/icons/beef-50.png" />
          <div className="name">Beef</div>
        </div>
        <div className="item">
          <img className="icon" src="/icons/beef-50.png" />
          <div className="name">Beef</div>
        </div>
        <div className="item">
          <img className="icon" src="/icons/beef-50.png" />
          <div className="name">Beef</div>
        </div>
        <div className="item">
          <img className="icon" src="/icons/beef-50.png" />
          <div className="name">Beef</div>
        </div>
        <div className="item">
          <img className="icon" src="/icons/beef-50.png" />
          <div className="name">Beef</div>
        </div>
        <div className="item">
          <img className="icon" src="/icons/beef-50.png" />
          <div className="name">Beef</div>
        </div>
        <div className="item">
          <img className="icon" src="/icons/beef-50.png" />
          <div className="name">Beef</div>
        </div>
        <div className="item">
          <img className="icon" src="/icons/beef-50.png" />
          <div className="name">Beef</div>
        </div>
      </div>
    </div>
  )
}

export default MenuCategory
