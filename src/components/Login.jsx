import { useTranslation } from 'react-i18next'
import { useAuth } from '../hooks/useAuth'
import { AuthForm } from './AuthForm'
import { ToastContainer, toast } from 'react-toastify'

export function Login() {
  const { t } = useTranslation()
  const { login, error } = useAuth()

  console.log('Login')
  console.log('Login123')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    login(data.email, data.password)
  }

  error && toast.error(error, {
    position: 'top-center'
  })

  console.log('Login123')

  return (
    <>
      <ToastContainer />
      <AuthForm
        title={t('Iniciar sesión')}
        buttonText={t('Iniciar sesión')}
        handleSubmit={handleSubmit}
        showNameField={false}
      />
    </>
  )
}
