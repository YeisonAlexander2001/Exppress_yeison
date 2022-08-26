
export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}
/* Este archivo tiene como fin Tipar todos los objetos,
para que el usuario no pueda ingresar valores diferentes */
export enum Visibility{
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}
/** La ventaja de la interfaz es extendida  */
// Se definen que tipos de datos se van a aceptar de entrada
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}/**
 * Creamos un type de DiaryEntry en el cual omitimos el valor comment por medio de TIPOS DE UTILIDAD "imaginando
 * que hay informacion confidencia en uno de los datos
 */
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

export type diaryEntryId = Pick<DiaryEntry, 'id'>

export type NoincluyeWeather = Omit<DiaryEntry, 'weather'>