import { useAuth } from '../hooks/useAuth'
import { getDate } from '../utils/getDate'

export function Header () {
  const user = JSON.parse(window.localStorage.getItem('user'))
  useAuth()
  const date = getDate()

  return (
    <header>
      {
        user && (
          <div className='absolute z-10 text-white w-[100%] flex-wrap text-sm sm:text-lg flex items-center justify-between '>
            <div className='flex items-center justify-center text-secondary  gap-2'>
              <span className='icon-book text-3xl' />
              <h1 className='font-bold'>Cuaderno Digital</h1>
            </div>
            <div className='flex items-center justify-center gap-2 '>
              <span className='icon-heart-1 text-secondary' />
              <p className='truncate'>Hola, {user.displayName.split('').slice(0, 12)}...</p>
            </div>
            <div className='flex items-center justify-center absolute right-0 top-10 gap-2 sm:sticky'>
              <span className='icon-calendar text-secondary' />
              <p>{date}</p>
            </div>
          </div>
        )
      }
      <img
        src='/public/background.svg'
        alt='background'
        className='w-full sticky top-0 h-[18vh] object-cover'
      />
    </header>
  )
}
