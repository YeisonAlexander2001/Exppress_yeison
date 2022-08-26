import diaryData from './diaries.json'
/* diary Services, Logica de las rutas */
import { DiaryEntry, NewDiaryEntry, NoincluyeWeather, NonSensitiveInfoDiaryEntry } from './types'

/**
 * ARREGLO (no el json) de entradas de diario,  que inicialmente contiene la información de los 4 registros en diaries.json
 */
//let diaries = diaryData as DiaryEntry[] /* Asercion de Tipos */
/**
 * metodo que devuelve todas las entries (entradas) del diario
 * @returns retorna un array con las entradas
 */
export const getEntries = (): DiaryEntry[] =>{
return "pepe"
} 

/**
 * Metodo para encontrar una entrada en concreto a traves del Id de tipo number
 * @param id de tipo number
 * @returns una entrada por medio del Id, retorna en concreto un diaryEntry(con un id en concreto)
 */
export const findById = (id: number): DiaryEntry => {
  return diaries.find(d => d.id === id) as DiaryEntry
}
/**
 * @returns retorna los parametros con excepcion del comment (Excepcion del metodo NonSensitiveInfoDiaryEntry)
 * se utiliza el .map para retornar todos los datos excepto el comentario
 */
/**
 * diaries. map????
 */
export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility

    }
  })
}
export const NoincluyeWeatherInfo = (): NoincluyeWeather[] => {
  return diaries.map(({ id, date, comment, visibility }) => {
    return {
      id,
      date,
      comment,
      visibility

    }
  })
}

/**
 * Agrega un nuevo diario
 * @param // traemos un DiaryEntry el cual almacenamos en newdiary entry mediante el parametro de id: Math.max el cual
 * nos permite aumentar el uno el orden del id. Con el diaries.push mandamos la informacion al newDiary.
 * @returns
 */
export const addDiaryEntry = (diaryEntryReceivedData: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max( // Math.max([1,2,4,5,9,11])
      ...diaries.map( // [1,2,4,5,9,11]
        diary => diary.id // Lo que se retorna para cada una de las posiciones del arreglo
      )
    ) + 1,
    ...diaryEntryReceivedData
  }
  diaries.push(newDiaryEntry)
  return newDiaryEntry
}

export const eliminoDiaryEntry = (diaryEntryId: number): void => {
  diaries = diaries.filter(
    function (valor) {
      return valor.id !== diaryEntryId
    }
  )
}

export const updateDiaryEntry = (diaryEntryInput: DiaryEntry, fieldsToUpdate: Partial<DiaryEntry>): DiaryEntry => {
  const newDiaryEntry = {
    ...diaryEntryInput, ...fieldsToUpdate
  }
  document.write('se actualizo')
  return newDiaryEntry
}
