import { getDate } from '../utils/getDate'

export function CardTask ({ task, completed }) {
  const date = getDate()
  const status = completed ? 'border-borderColorComplete bg-colorComplete' : 'border-borderColorIncomplete bg-colorIncomplete'

  return (
    <article className={`${status} flex flex-col  justify-evenly w-[300px] h-[200px] p-4 border rounded-xl `}>
      <p className='font-bold'>{date}</p>
      <p>{task}</p>
      <div className='flex justify-between w-full'>
        <button className='icon-check-square text-2xl text-gray' />
        <button className='icon-trash-o text-2xl text-tertiary' />
      </div>
    </article>
  )
}
