import { NewDiaryEntry, Visibility, Weather } from './services/types'

const parseComment = (commentFromRequest: any): string => {
  if (typeof commentFromRequest !== 'string') {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => { // || (!isDate(dateFromRequest))
  if (!isString(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing Weather')
  }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || (!isVisibility(visibilityFromRequest))) {
    throw new Error('Incorrect or missing Visiility')
  }
  return visibilityFromRequest
}

function isWeather (param: any): boolean {
  return Object.values(Weather).includes(param)
}

const isString = (string: string): boolean => {
  return (typeof string === 'string')
}

// const isDate = (date: string): boolean => {
// return Boolean(Date.parse(date))
// }
const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => { // :Newtipe
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.Weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry
