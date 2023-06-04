import { Route, Routes } from 'react-router-dom'
import { Welcome } from './components/Welcome'
import './App.css'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App () {
  const user = window.localStorage.getItem('user')
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Welcome />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/home'
          element={user && <Dashboard />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
