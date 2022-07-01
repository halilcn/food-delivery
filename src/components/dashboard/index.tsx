import React from 'react'
import './Dashboard.scss'
import LeftMenu from '../left-menu'
import MainContent from '../main-content'

interface IProps {}

const Dashboard: React.FC<IProps> = props => {
  return (
    <div className="dashboard-container">
      <LeftMenu />
      <MainContent />
    </div>
  )
}

export default Dashboard
