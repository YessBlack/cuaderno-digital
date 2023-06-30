import { Navigate, Outlet } from 'react-router-dom'

export function AuthGuard () {
  const user = JSON.parse(window.localStorage.getItem('user'))
  return user?.uid ? <Outlet /> : <Navigate replace to='/' />
}
