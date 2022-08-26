import express from 'express'
import diaryRouter from './routes/diaries'
/* Se  crea la aplicacion con express */
const app = express()
/* Se hace uso del puerto 3000 */
app.use(express.json())
const PORT = 3000
/* Creamos un endpoint con la direccion Ping que nos devuelva un Pong, con el response */
app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!' + new Date().toLocaleDateString())
  res.send('pong')
})
/**
 * Hacemos uso del router creado en el archivo diaries.ts
 */
app.use('/api/diaries', diaryRouter)
/**
 * Usamos el metodo listen para verificar que la conexion con el puerto es efectiva
 */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
