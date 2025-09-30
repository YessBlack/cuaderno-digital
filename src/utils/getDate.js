export function getDate () {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
  const moths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  const dateNow = new Date()
  const day = days[dateNow.getDay()]
  const month = moths[dateNow.getMonth()]

  return `${day}, ${dateNow.getDate()} de ${month} del ${dateNow.getFullYear()}`
}

export const getTime = () => {
  const dateNow = new Date()
  const hours = dateNow.getHours()
  const minutes = dateNow.getMinutes()

  return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`
}
