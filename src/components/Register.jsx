import { useAuth } from '../hooks/useAuth'
import { AuthForm } from './AuthForm'
import { ToastContainer, toast } from 'react-toastify'

export function Register () {
  const { register, userRegister, error } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    register(data.name, data.email, data.password)
  }

  error && toast.error(error, {
    position: 'top-center'
  })

  userRegister && toast.success('Usuario registrado con éxito', {
    position: 'top-center',
    autoClose: 2000
  })

  return (
    <>
      <ToastContainer />
      <AuthForm
        title='Registrarse'
        buttonText='Registrarse'
        handleSubmit={handleSubmit}
        showNameField
      />
    </>
  )
}
