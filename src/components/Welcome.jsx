import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export function Welcome() {
  const { t } = useTranslation()

  return (
    <section className='flex flex-col justify-center items-center mb-4'>
      <div className='flex flex-col items-center justify-between border-primary border p-5 rounded-3xl max-w-[500px] w-full h-[75vh] shadow-2xl max-h-[500px]'>
        <div className='flex gap-4 items-center justify-center text-secondary text-2xl text-center'>
          <span className='icon-book text-6xl' />
          <h1 className='font-bold'>{t('Cuaderno')} <br /> {t('Digital')}</h1>
        </div>
        <h2 className='text-xl font-bold text-center'>{t('Bienvenido a tu cuaderno digital')}</h2>
        <p className='text-center'>{t('Lleva tu cuaderno en la palma de tu mano. Agrega, organiza y accede a tus notas de forma fácil y rápida con nuestra página web de Cuaderno Digital. Toma el control de tus ideas estés donde estés')}.</p>
        <div className='flex flex-col gap-4'>
          <Link
            to='/register'
            className='bg-buttonPrimary text-white rounded-full px-8 py-2 transition duration-500 ease-in-out hover:bg-secondary hover:text-primary'
          >
            {t('Registrarse')}
          </Link>
          <Link
            to='/login'
            className='bg-buttonSecondary text-white rounded-full px-8 py-2 transition duration-500 ease-in-out hover:bg-secondary hover:text-buttonPrimary'
          >
            {t('Iniciar sesión')}
          </Link>
        </div>
      </div>
    </section>
  )
}
