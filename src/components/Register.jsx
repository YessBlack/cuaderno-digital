import { useAuth } from '../hooks/useAuth'
import { AuthForm } from './AuthForm'
import { ToastContainer, toast } from 'react-toastify'

export function Register () {
  const { register, userRegister, error } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    register(data.email, data.password, data.name)
  }

  error && toast.error(error, {
    position: 'top-center'
  })

  user && navigate('/home')

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
