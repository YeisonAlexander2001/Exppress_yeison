'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
/* Se  crea la aplicacion con express */
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const app = express_1.default()
app.use(express_1.default.json())
const PORT = 3000
/**
 * se crea un enpoint llamado ping con sus respectivos parametros
*/
app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!')
  res.send('pong')
})
/**
 * funcion para validar que la conexion con el puerto fue efectiva
 */
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)) 
