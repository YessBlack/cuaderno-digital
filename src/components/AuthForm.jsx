import { useTranslation } from 'react-i18next'

export function AuthForm({ title, buttonText, handleSubmit, showNameField }) {
  const { t } = useTranslation()

  console.log('Feat Task')
  console.log('Pruebas 1')
  console.log('Pruebas 2')

  return (
    <section className='flex flex-col justify-center items-center m-4'>
      <div className='flex flex-col items-center justify-evenly border-primary border p-5 rounded-3xl max-w-[500px] w-full h-[75vh] shadow-2xl max-h-[500px]'>
        <h1 className='font-bold text-2xl text-secondary'>{title}</h1>
        <form className='flex flex-col gap-4 w-[250px]' onSubmit={handleSubmit}>
          {
            showNameField &&
            <input
              type='text'
              className='border border-secondary p-2 rounded-xl focus:outline-none placeholder:text-center' placeholder={t('Nombre')}
              name='name'
            />
          }
          <input
            type='email'
            className='border border-secondary p-2 rounded-xl focus:outline-none placeholder:text-center' placeholder={t('Correo')}
            name='email'
          />
          <input
            type='password'
            className='border border-secondary p-2 rounded-xl focus:outline-none placeholder:text-center' placeholder={t('Contraseña')}
            name='password'
          />
          <div className='flex flex-col gap-4'>
            <button className='bg-buttonPrimary rounded-xl text-white p-2 w-[250px] text-center transition duration-500 ease-in-out hover:bg-buttonPrimary'>
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
