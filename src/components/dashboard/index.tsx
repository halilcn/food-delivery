import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import router from '../../router'
import { RootState } from '../../store'
import './Dashboard.scss'
import Content from './content'
import PagesMenu from './pages-menu'

interface IProps {}

const Dashboard: React.FC<IProps> = props => {
  const authState = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!authState.user) navigate(router.login.path)
  }, [])

  return (
    <div className="dashboard-container">
      <PagesMenu />
      <Content />
    </div>
  )
}

export default Dashboard
