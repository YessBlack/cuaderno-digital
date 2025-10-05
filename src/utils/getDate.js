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
