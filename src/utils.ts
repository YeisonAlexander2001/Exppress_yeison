import { NewDiaryEntry, Visibility, Weather } from './services/types'
/**
 * valida si el comentario es un string
 * @param commentFromRequest
 * @returns commentFromRequest
 */
const parseComment = (commentFromRequest: any): string => {
  if (typeof commentFromRequest !== 'string') {
    throw new Error('Incorrect or missing comment')
  }
  console.log('valid comment')
  return commentFromRequest
}
/**
 * Si el dateFromRequest  no es un String o una fecha arroja error.
 * @param dateFromRequest
 * @returns dateFromRequest
 */
const parseDate = (dateFromRequest: any): string => { // || (!isDate(dateFromRequest))
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  console.log('valid date')
  return dateFromRequest
}
/**
 * Con este metodo valiamos que el dato Weather sea igual a Weather
 * @param weatherFromRequest el parametro que traemos es un weatherFromRequest que debe ser igual a weather
 * @returns return weatherFromRequest
 */
const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) { // !isWeather(weatherFromRequest)
    throw new Error('Incorrect or missing Weather')
  }
  console.log('valid weather')
  return weatherFromRequest
}
/**
 * Este metodo permite validar el dato Visibility en donde debe ser un String y un dato tipo Visibility
 * @param visibilityFromRequest
 * @returns visibilityFromRequest
 */
const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || (!isVisibility(visibilityFromRequest))) {
    throw new Error('Incorrect or missing Visiility')
  }
  console.log('valid visibility')
  return visibilityFromRequest
}
/**
 * Validacion del dato Weather que debe ser siempre un valor de tipo weather, con el param
 * definimos que aunque el parametro pueda ser de cualquier tipo siempre debe ser de tipo Weather
 * @param param
 * @returns objeto de tipo weather
 */
function isWeather (param: any): boolean {
  return Object.values(Weather).includes(param)
}
/**
 * Se valida que los string qe ingresan sean del tipo string
 * @param string
 * @returns string
 */
const isString = (string: string): boolean => {
  return (typeof string === 'string')
}
/**
 *
 * @param date
 * @returns Booleano de tipo date
 */
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}
const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}
/**
 * Llega primero un objeto que puede ser cualquier cosa. Devuelve un newDiaryEntry. Devolvemos el newEntry, comprobando
 * los datos
 * @param object
 * @returns
 */
const toNewDiaryEntry = (object: any): NewDiaryEntry => { // :Newtipe
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry
