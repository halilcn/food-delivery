import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import router from '../../../router'
import { authReduceActions } from '../../../store/reducers/auth'
import './Login.scss'

interface IProps {}

const Login: React.FC<IProps> = props => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = () => {
    dispatch(authReduceActions.setUser({ username: 'test-username', image: 'test-image' }))
    navigate(router.login.path)
  }

  return (
    <div onClick={login} className="login">
      <div className="login__continue-button">Login</div>
    </div>
  )
}

export default Login
