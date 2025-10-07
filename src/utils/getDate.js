export function getDate () {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
  const moths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  const dateNow = new Date()
  const day = days[dateNow.getDay()]
  const month = moths[dateNow.getMonth()]

  return `${day}, ${dateNow.getDate()} de ${month} del ${dateNow.getFullYear()}`
}

export const getDateISO = () => {
  const dateNow = new Date()
  return dateNow.toISOString().split('T')[0]
}

export const getYear = () => {
  const dateNow = new Date()
  return dateNow.getFullYear()
}

export const getMonth = () => {
  const dateNow = new Date()
  return dateNow.getMonth() + 1
}

export const getDay = () => {
  const dateNow = new Date()
  return dateNow.getDate()
}

export const getHour = () => {
  const dateNow = new Date()
  return dateNow.getHours()
}

export const getMinutes = () => {
  const dateNow = new Date()
  return dateNow.getMinutes()
}

export const formatDate = (date) => {
  const d = new Date(date)
  const day = (`0${d.getDate()}`).slice(-2)
  const month = (`0${d.getMonth() + 1}`).slice(-2)
  const year = d.getFullYear()
  return `${year}-${month}-${day}`
}

export const formatDateTime = (date) => {
  const d = new Date(date)
  const day = (`0${d.getDate()}`).slice(-2)
  const month = (`0${d.getMonth() + 1}`).slice(-2)
  const year = d.getFullYear()
  const hours = (`0${d.getHours()}`).slice(-2)
  const minutes = (`0${d.getMinutes()}`).slice(-2)
  return `${year}-${month}-${day} ${hours}:${minutes}`
}

export const getMilliseconds = () => {
  const dateNow = new Date()
  return dateNow.getMilliseconds()
}

export const getTime = () => {
  const dateNow = new Date()
  return dateNow.getTime()
}
