import React, { useState } from 'react'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'

import './MenuCategory.scss'
import LeftArrow from './left-arrow'
import RightArrow from './right-arrow'
import Search from './search'

interface IMenuCategory {
  image: string
  text: string
}

interface IProps {}

const MenuCategory: React.FC<IProps> = props => {
  const [selectedCategoryText, setSelectedCategoryText] = useState<string>('Beef')

  const MENU_CATEGORY: IMenuCategory[] = [
    {
      image: 'beef-50.png',
      text: 'Beef',
    },
    {
      image: 'burrito-50.png',
      text: 'Burrito',
    },
    {
      image: 'cake-50.png',
      text: 'Cake',
    },
    {
      image: 'fish-food-50.png',
      text: 'Fish',
    },
    {
      image: 'hamburger-50.png',
      text: 'Hamburger',
    },
    {
      image: 'kebab-50.png',
      text: 'Kebab',
    },
    {
      image: 'pizza-50.png',
      text: 'Pizza',
    },
    {
      image: 'salad-50.png',
      text: 'Salad',
    },
    {
      image: 'vegetables-50.png',
      text: 'Vegetables',
    },
  ]

  const changeSelectedCategory = (categoryText: string) => {
    setSelectedCategoryText(categoryText)
  }

  return (
    <div className="menu-category">
      <div className="menu-category__top">
        <div className="menu-category__title">Menu Category</div>
        <Search />
      </div>
      <div className="menu-category__list-container">
        <ScrollMenu scrollContainerClassName="menu-category__list" LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {MENU_CATEGORY.map((category, key) => (
            <div
              key={key}
              onClick={() => changeSelectedCategory(category.text)}
              className={`menu-category__item ${selectedCategoryText === category.text && 'menu-category__item--selected'}`}>
              <img className="menu-category__icon" src={`/icons/${category.image}`} alt="menu-image" />
              <div className="menu-category__name">{category.text}</div>
            </div>
          ))}
        </ScrollMenu>
      </div>
    </div>
  )
}

export default MenuCategory
