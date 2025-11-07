import { useTranslation } from 'react-i18next'
import { useAuth } from '../hooks/useAuth'
import { AuthForm } from './AuthForm'
import { ToastContainer, toast } from 'react-toastify'

export function Register() {
  const { t } = useTranslation()
  const { register, userRegister, error } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    register(data.name, data.email, data.password)
  }

  error && toast.error(error, {
    position: 'top-center'
  })

  userRegister && toast.success(t('Usuario registrado con éxito'), {
    position: 'top-center',
    autoClose: 2000
  })

  console.log('Register')

  return (
    <>
      <ToastContainer />
      <AuthForm
        title={t('Registrarse')}
        buttonText={t('Registrarse')}
        handleSubmit={handleSubmit}
        showNameField
      />
    </>
  )
}
