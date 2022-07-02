import React from 'react'

import './Home.scss'
import MenuCategory from './menu-category'

interface IProps {}

const Home: React.FC<IProps> = props => {
  return (
    <div className="home-container">
      home container
      <MenuCategory />
    </div>
  )
}

export default Home
