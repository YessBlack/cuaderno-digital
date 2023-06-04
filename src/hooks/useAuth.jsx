import { useEffect, useState } from 'react'
import { createUser, loginUser } from '../services/auth'

export function useAuth () {
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)
  const [userRegister, setUserRegister] = useState(null)
  const navigate = useNavigate()

  const register = async (email, password) => {
    const res = await createUser(email, password)
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
    user && navigate('/home')
  }, [user, navigate])

  return {
    register,
    login,
    logout,
    checkUser,
    error,
    user,
    userRegister
  }
}
