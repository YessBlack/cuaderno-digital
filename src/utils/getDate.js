export function getDate () {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  const dateNow = new Date()

  const day = days[dateNow.getDay()]
  const month = months[dateNow.getMonth()]

  return `${day}, ${dateNow.getDate()} de ${month} del ${dateNow.getFullYear()}`
}
