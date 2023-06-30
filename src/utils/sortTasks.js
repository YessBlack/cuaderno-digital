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
