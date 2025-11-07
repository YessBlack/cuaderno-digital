import { deleteTask, updateTask } from '../services/db'
import { getDate } from '../utils/getDate'

export function CardTask({ id, task, completed }) {
  const date = getDate()
  const status = completed ? 'border-borderColorComplete bg-colorComplete' : 'border-borderColorIncomplete bg-colorIncomplete'
  const checked = completed ? 'text-green' : ''

  console.log('Mejora Generales')

  const handleDelete = (id) => {
    deleteTask(id)
  }

  const handleComplete = (id, completed) => {
    updateTask(id, completed)
  }

  return (
    <article className={`${status} flex flex-col  justify-evenly w-[300px] h-[200px] p-4 border rounded-xl `}>
      <p className='font-bold'>{date}</p>
      <p>{task}</p>
      <div className='flex justify-between w-full'>
        <button className={`${checked} icon-check-square text-2xl text-gray hover:text-borderColorComplete`} onClick={() => handleComplete(id, !completed)} />
        <button className='icon-trash-o text-2xl text-tertiary' onClick={() => handleDelete(id)} />
      </div>
    </article>
  )
}
