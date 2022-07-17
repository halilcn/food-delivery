import React from 'react'

import './Home.scss'
import GeneralMenu from './general-menu'
import MenuCategory from './menu-category'
import MenuList from './menu-list'

interface IProps {}

const Home: React.FC<IProps> = props => {
  return (
    <div className="home">
      <div className="home__main-content">
        <MenuCategory />
        <MenuList />
      </div>
      <GeneralMenu />
    </div>
  )
}

export default Home
