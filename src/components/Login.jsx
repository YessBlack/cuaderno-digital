import { useAuth } from '../hooks/useAuth'
import { AuthForm } from './AuthForm'
import { ToastContainer, toast } from 'react-toastify'

export function Login () {
  const { login, error } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    login(data.email, data.password)
  }

  error && toast.error(error, {
    position: 'top-center'
  })

  return (
    <>
      <ToastContainer />
      <AuthForm
        title='Iniciar sesión'
        buttonText='Iniciar sesión'
        handleSubmit={handleSubmit}
        showNameField={false}
      />
    </>
  )
}
