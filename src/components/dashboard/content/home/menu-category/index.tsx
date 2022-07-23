import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'

import { MENU_CATEGORY } from '../../../../../store/constants'
import './MenuCategory.scss'
import LeftArrow from './left-arrow'
import RightArrow from './right-arrow'
import Search from './search'

interface IProps {}

const MenuCategory: React.FC<IProps> = props => {
  const [selectedCategoryText, setSelectedCategoryText] = useState<string>('Pizza')

  const changeSelectedCategory = (categoryText: string) => {
    setSelectedCategoryText(categoryText)
  }

  const animateProps = {
    initial: { opacity: 0, top: -10 },
    animate: { opacity: 1, top: 0 },
    transition: (delay: number = 0) => {
      return {
        delay: delay * 0.1,
        duration: 0.1,
      }
    },
  }
  return (
    <>
      <div className="menu-category__top">
        <div className="menu-category__title">Menu Category</div>
        <Search />
      </div>
      <div className="menu-category__list-container">
        <ScrollMenu scrollContainerClassName="menu-category__list" LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {MENU_CATEGORY.map((category, key) => (
            <motion.div
              initial={animateProps.initial}
              animate={animateProps.animate}
              transition={animateProps.transition(key)}
              key={key}
              onClick={() => changeSelectedCategory(category.text)}
              className={`menu-category__item ${selectedCategoryText === category.text && 'menu-category__item--selected'}`}>
              <img className="menu-category__icon" src={`/icons/${category.image}`} alt="menu-image" />
              <div className="menu-category__name">{category.text}</div>
            </motion.div>
          ))}
        </ScrollMenu>
      </div>
    </>
  )
}

export default MenuCategory
