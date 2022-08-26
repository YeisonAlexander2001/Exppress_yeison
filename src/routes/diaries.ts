import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'
/**
 * Creamos un router
 */
const router = express.Router()
/**
 * Este enpoint que permite recuperar los datos de entrada con la excepcion del dato comment
 * como resultado del getEntriesWithoutSensitiveInfo
 */
 router.get('/', (_req, res) => {
  res.send(diaryServices.getEntries())
})

/**
 * Endpoint que nos va a permitir añadir entradas a un diary(diario) por medio del Id mediante el metodo find
 * y es necesario convertir el metodo params para que sea un numero
 */
router.get('/:id', (req, res) => {
  const diario = diaryServices.findById(parseInt(req.params.id))
  res.send(diario)
})
/**
 * Desde el req traemos los valores de entrada mediante el newDiaryEntry. Luego creamos una nueva entrada en el diario
 * mediante addedDiaryEntry usando el metodo addDiary
 */
router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiaryEntry(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (error) {
    res.status(400).send(`there was an error trying to add entry: ${error}`)
  }
})

router.delete('/:id', (req, res) => {
  try {
    const eliminarDiaryEntry = diaryServices.eliminoDiaryEntry(parseInt(req.params.id))
    res.json(eliminarDiaryEntry)
  } catch (error) {
    res.status(400).send('there was an error trying to delete entry')
  }
})

router.put('/:id', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const { id } = req.params
    const originalDiaryEntry = diaryServices.findById(+id)
    const actualiceDiary = diaryServices.updateDiaryEntry(originalDiaryEntry, newDiaryEntry)
    res.json(actualiceDiary)
  } catch (error) {
    res.status(400).send(`there was an error trying to add entry: ${error}`)
  }
})
export default router
