import React from 'react'

import './Home.scss'
import GeneralMenu from './general-menu'
import MenuCategory from './menu-category'

interface IProps {}

const Home: React.FC<IProps> = props => {
  return (
    <div className="home-container">
      <div className="main-content">
        <MenuCategory />
      </div>
      <GeneralMenu />
    </div>
  )
}

export default Home
