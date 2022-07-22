import React from 'react'

import './Login.scss'

interface IProps {}

const Login: React.FC<IProps> = props => {
  return (
    <div className="login">
      <div className="login__continue-button">Login</div>
    </div>
  )
}

export default Login
