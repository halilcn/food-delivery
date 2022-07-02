import React from 'react'
import './Dashboard.scss'
import PagesMenu from './pages-menu'
import Content from './content'

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
