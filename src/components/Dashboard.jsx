import { TaskInputBar } from './TaskInputBar'

export function Dashboard () {
  const user = JSON.parse(window.localStorage.getItem('user'))

  console.log(user)

  return (
    <main className='flex flex-col items-center justify-center'>
      <TaskInputBar />
    </main>
  )
}
