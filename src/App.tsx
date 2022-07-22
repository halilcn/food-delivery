import React from 'react'
import { Route, Routes } from 'react-router-dom'

import '../src/styles/index.scss'
import router from './router'

function App() {
  return (
    <Routes>
      <Route path={router.dashboard.path} element={router.dashboard.element} />
      <Route path={router.login.path} element={router.login.element} />
    </Routes>
  )
}

export default App
