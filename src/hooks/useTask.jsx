import { useEffect, useState } from 'react'
import { onGetTasks } from '../services/db'

export function useTask () {
  const [tasks, setTasks] = useState([])
  const user = JSON.parse(window.localStorage.getItem('user'))

  useEffect(() => {
    const response = onGetTasks(setTasks, user.uid)
    return () => response()
  }, [])

  return {
    tasks
  }
}
