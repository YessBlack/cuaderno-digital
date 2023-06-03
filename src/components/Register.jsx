import { Link } from 'react-router-dom'

export function Register () {
  return (
    <section className='flex flex-col justify-center items-center m-4'>
      <div className='flex flex-col items-center justify-between border-primary border p-5 rounded-3xl max-w-[500px] w-full h-[75vh] shadow-2xl max-h-[500px]'>
        <h1 className='font-bold text-2xl text-secondary'>Registrarse</h1>
        <form className='flex flex-col gap-4 w-[250px]'>
          <input type='text' className='border border-secondary p-2 rounded-xl focus:outline-none placeholder:text-center' placeholder='Nombre' />
          <input type='email' className='border border-secondary p-2 rounded-xl focus:outline-none placeholder:text-center' placeholder='Correo' />
          <input type='password' className='border border-secondary p-2 rounded-xl focus:outline-none placeholder:text-center' placeholder='Contraseña' />
        </form>
        <div className='flex flex-col gap-4'>
          <Link className='bg-buttonSecondary rounded-xl text-white p-2 w-[250px] text-center transition duration-500 ease-in-out hover:bg-buttonPrimary'>Registrarse
          </Link>
        </div>
      </div>
    </section>
  )
}
