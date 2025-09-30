export function sortTasks (tasks) {
  const tasksSort = tasks.sort((a, b) => {
    if (a.completed) {
      return 1
    }
    if (b.completed) {
      return -1
    }
    return 0
  })
  return tasksSort
}

const sortTasksByDate = (tasks) => {
  const tasksSort = tasks.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateA - dateB
  })
  return tasksSort
}

export { sortTasksByDate }
