import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function Footer() {
  const { logout } = useAuth()
  const user = JSON.parse(window.localStorage.getItem('user'))
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  console.log('Ultimos Ajustes')

  const handleHome = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {
        user
          ? (
            <footer className='w-full bg-primary fixed bottom-0 h-[40px] text-white'>
              <div className='relative z-10 flex justify-between items-center text-secondary text-xl'>
                <span className='icon-home' onClick={handleHome} />
                <img className='w-[37px] object-cover rounded-full' src={user.photoURL} alt='foto de perfil' />
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
