import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

//Inicializo antes de las rutas porque es un middleware
app.use(cookieParser())

app.get("/", (req,res) => {
    res.send("Hello World")
})

app.get("/setCookie", (req,res) => {
    res.cookie('MyCookie', 'firstCookie', {
        maxAge: 10000,
        // expires: new Date("2022-10-13"),
        httpOnly: true, //Para que no se puedan ver desde el navegador con document.cookie
        secure: true, //Podemos acceder a la cookie solo cuando usemos HTTPS
        sameSite: 'lax', //Si tenemos el front y backend en distintos dominios podemos habilitar a que se lean o no
    })
    res.send("Cookie sent")
})





