import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import router from '../../../router'
import { RootState } from '../../../store'
import { authReduceActions } from '../../../store/reducers/auth'
import './Login.scss'

interface IProps {}

const Login: React.FC<IProps> = props => {
  const authState = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (authState.user) navigate(router.dashboard.path)
  }, [])

  const login = () => {
    dispatch(authReduceActions.setUser({ username: 'test-username', image: 'test-image' }))
    navigate(router.dashboard.path)
  }

  return (
    <div className="login">
      <div onClick={login} className="login__continue-button">
        Login
      </div>
    </div>
  )
}

export default Login
