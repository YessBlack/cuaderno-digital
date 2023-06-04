import { useEffect, useState } from 'react'
import { createUser } from '../services/auth'

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

  useEffect(() => {
    error && alert(error)
  }, [error])

  useEffect(() => {
    user && window.localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return {
    register,
    error,
    user
  }
}
