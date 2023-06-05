import { useEffect, useState } from 'react'
import { createUser, loginUser, logoutUser } from '../services/auth'
import { useNavigate } from 'react-router-dom'

export function useAuth () {
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)
  const [userRegister, setUserRegister] = useState(null)
  const navigate = useNavigate()

  const register = async (name, email, password) => {
    const res = await createUser(name, email, password)
    if (typeof res === 'string') {
      setError(res)
    } else {
      setUserRegister(res.user)
      setError(null)
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }

  const login = async (email, password) => {
    const res = await loginUser(email, password)
    if (typeof res === 'string') {
      setError(res)
    } else {
      setError(null)
      setUser(res.user)
    }
  }

  const logout = () => {
    setUser(null)
    logoutUser()
    window.localStorage.removeItem('user')
    window.location.reload()
  }

  useEffect(() => {
    user && window.localStorage.setItem('user', JSON.stringify(user))
    user && navigate('/home')
  }, [user, navigate])

  return {
    register,
    login,
    logout,
    error,
    user,
    userRegister
  }
}
