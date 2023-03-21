import express from "express"
import bodyParser from "body-parser"
import * as dotenv from "dotenv"
import router from "./router"

const app = express()
const port = 3000

dotenv.config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router)

app.listen(port, () => {
  console.log('runnig on', port)
})