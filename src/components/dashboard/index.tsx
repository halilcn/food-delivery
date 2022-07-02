import React from 'react'

import './Dashboard.scss'
import Content from './content'
import PagesMenu from './pages-menu'

interface IProps {}

const Dashboard: React.FC<IProps> = props => {
  return (
    <div className="dashboard-container">
      <PagesMenu />
      <Content />
    </div>
  )
}

export default Dashboard
