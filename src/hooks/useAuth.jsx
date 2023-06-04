import { useEffect, useState } from 'react'
import { authState, createUser, loginUser, logoutUser } from '../services/auth'

export function useAuth () {
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)

  const register = async (email, password) => {
    const res = await createUser(email, password)
    if (typeof res === 'string') {
      setError(res)
    } else {
      setUser(res.user)
    }
  }

  const login = async (email, password) => {
    const res = await loginUser(email, password)
    if (typeof res === 'string') {
      setError(res)
    } else {
      setUser(res.user)
    }
  }

  const checkUser = async () => {
    const user = await authState()
    console.log(user)
  }

  const logout = () => {
    setUser(null)
    window.localStorage.removeItem('user')
    logoutUser()
  }

  useEffect(() => {
    user && window.localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return {
    register,
    login,
    logout,
    checkUser,
    error,
    user
  }
}
