import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export function Register () {
  const { register, user } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    register(data.email, data.password)
  }

  user && navigate('/home')

  return (
    <section className='flex flex-col justify-center items-center m-4'>
      <div className='flex flex-col items-center justify-evenly border-primary border p-5 rounded-3xl max-w-[500px] w-full h-[75vh] shadow-2xl max-h-[500px]'>
        <h1 className='font-bold text-2xl text-secondary'>Registrarse</h1>
        <form className='flex flex-col gap-4 w-[250px]' onSubmit={handleSubmit}>
          <input
            type='text'
            className='border border-secondary p-2 rounded-xl focus:outline-none placeholder:text-center' placeholder='Nombre'
            name='name'
          />
          <input
            type='email'
            className='border border-secondary p-2 rounded-xl focus:outline-none placeholder:text-center' placeholder='Correo'
            name='email'
          />
          <input
            type='password'
            className='border border-secondary p-2 rounded-xl focus:outline-none placeholder:text-center' placeholder='Contraseña'
            name='password'
          />
          <div className='flex flex-col gap-4'>
            <button className='bg-buttonSecondary rounded-xl text-white p-2 w-[250px] text-center transition duration-500 ease-in-out hover:bg-buttonPrimary'>
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
