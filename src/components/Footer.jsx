import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function Footer () {
  const { logout } = useAuth()
  const user = JSON.parse(window.localStorage.getItem('user'))
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <>
      {
        user
          ? (
            <footer className='w-full bg-primary fixed bottom-0 h-[30px] text-white'>
              <div className='relative z-10 flex justify-between items-center text-secondary text-xl'>
                <span className='icon-home' />
                <span className='icon-user' />
                <span className='icon-sign-out' onClick={handleLogout} />
              </div>
            </footer>
            )
          : (
            <footer className='w-full bg-primary fixed bottom-0 h-[30px]' />
            )
      }
    </>
  )
}
