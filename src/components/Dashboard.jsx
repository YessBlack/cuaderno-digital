import { useTask } from '../hooks/useTask'
import { CardTask } from './CardTask'
import { TaskInputBar } from './TaskInputBar'

export function Dashboard () {
  const { tasks } = useTask()

  return (
    <main className='flex flex-col items-center justify-center'>
      <TaskInputBar />
      <section className='flex items-center justify-center flex-wrap gap-4 mt-3'>
        {
        tasks?.map(task => (
          <CardTask
            key={task.id}
            task={task.task}
            completed={task.completed}
          />
        ))
        }
      </section>
    </main>
  )
}
