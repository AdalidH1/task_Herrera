import express from "express";
import { mongoDB } from "./db.js";
import { taskRouter } from "./routes/task.router.js";
import cors from "cors";

const app = express()
mongoDB()
const port = 4000
app.listen(port)
app.use(cors())
app.use(express.json())
app.use('/api' ,taskRouter)

console.log('escuchando por el puerto', port)