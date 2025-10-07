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

export const getSeconds = () => {
  const dateNow = new Date()
  return dateNow.getSeconds()
}

export const getMilliseconds = () => {
  const dateNow = new Date()
  return dateNow.getMilliseconds()
}
