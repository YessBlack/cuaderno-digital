import { createTask } from '../services/db'

export function TaskInputBar () {
  const user = JSON.parse(window.localStorage.getItem('user'))

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    const task = {
      ...data,
      idUser: user.uid,
      completed: false
    }
    createTask(task)
  }

  return (
    <section className='flex flex-col justify-between rounded-2xl p-2 bg-buttonSecondary max-w-[800px] w-[100%] mt-1 sm:flex-row'>

      <form className='flex flex-wrap flex-col items-end justify-around gap-2 w-[100%] sm:flex-row' onSubmit={handleSubmit}>
        <input
          type='text'
          className='border border-secondary p-2 rounded-xl focus:outline-none placeholder:text-center w-full sm:w-[200px]' placeholder='Titulo'
          name='title'
        />
        <input
          type='text'
          className='border border-secondary p-2 rounded-xl focus:outline-none placeholder:text-center w-full sm:w-[360px] lg:w-[500px]' placeholder='Descripcion'
          name='description'
        />
        <button className='flex items-center  justify-center bg-buttonTertiary w-[45px] rounded-full'><span className='icon-plus text-tertiary text-3xl mt-1' /></button>
      </form>
    </section>
  )
}
