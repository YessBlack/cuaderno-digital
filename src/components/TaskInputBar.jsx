import { useTranslation } from 'react-i18next'
import { createTask } from '../services/db'

export function TaskInputBar() {
  const { t } = useTranslation()

  const user = JSON.parse(window.localStorage.getItem('user'))

  const handleSubmit = (e) => {
    e.preventDefault()
    const task = e.target.task.value
    const data = {
      task,
      idUser: user.uid,
      completed: false
    }
    createTask(data)
    e.target.reset()
  }

  return (
    <section className='flex flex-col justify-between rounded-2xl p-3 bg-buttonSecondary max-w-[800px] w-[100%] mt-1 sm:flex-row'>

      <form className='flex gap-2 w-[100%]' onSubmit={handleSubmit}>
        <input
          type='text'
          className='border border-secondary p-2 rounded-xl focus:outline-none placeholder:text-center w-[100%]' placeholder={t('Tarea')}
          name='task'
        />
        <button className='flex items-center  justify-center bg-buttonTertiary w-[45px] rounded-full'><span className='icon-plus text-tertiary text-3xl mt-1' /></button>
      </form>
    </section>
  )
}
