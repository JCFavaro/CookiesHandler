import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

//Inicializo antes de las rutas porque es un middleware
app.use(cookieParser())





