import { Route, Routes } from 'react-router-dom'
import { Welcome } from './components/Welcome'
import './App.css'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AuthGuard } from './guards/auth.guard'

function App () {
  const user = window.localStorage.getItem('user')

  if (user) {
    window.history.replaceState(null, '', '/home')
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={user ? <Dashboard /> : <Welcome />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route element={<AuthGuard />}>
          <Route
            path='/home'
            element={<Dashboard />}
          />
        </Route>
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
