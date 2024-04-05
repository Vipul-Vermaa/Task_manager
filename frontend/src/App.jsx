import React from 'react'
import './components/auth/Auth.scss'
import './components/header/Header.scss'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { BrowserRouter as Router ,Routes,Route,Navigate } from 'react-router-dom'
import Home from './components/home/Home'
import TaskManager from './components/taskManager/TaskManager'
import {useSelector} from 'react-redux'
import IsAuthentic from './utils/IsAuthentic'
import {ProtectedRoute} from 'protected-route-react'

function App() {
  const { currentUser,isAuthenticated } = useSelector((state) => state.auth)
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<ProtectedRoute isAuthenticated={!isAuthenticated}redirect="/taskmanager"><Login/></ProtectedRoute>} />
        <Route path='/register' element={<Register /> } />
        <Route path='/taskmanager' element={<IsAuthentic><TaskManager/></IsAuthentic>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
