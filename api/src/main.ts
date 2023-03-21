import express from "express"
import bodyParser from "body-parser"
import * as dotenv from "dotenv"
import router from "./router"
import swaggerUi from "swagger-ui-express"
import * as swaggerDocument from './swagger.json'

const app = express()
const port = 3000

dotenv.config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

app.listen(port, () => {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  console.log('runnig on', port)
})