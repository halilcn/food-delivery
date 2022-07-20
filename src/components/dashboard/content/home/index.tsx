import React from 'react'

import './Home.scss'
import MenuCategory from './menu-category'
import MenuList from './menu-list'

interface IProps {}

const Home: React.FC<IProps> = props => {
  return (
    <div className="home">
      <div className="home__main-content">
        <MenuCategory />
        <div className="home__main-content__line" />
        <MenuList />
      </div>
    </div>
  )
}

export default Home
