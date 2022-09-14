const express = require('express');
const apiRoutes = require('./routers/app.routers')

const app = express()
const PORT = 8080


//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes
app.use('/api', apiRoutes)


//Listen
const server = app.listen(PORT, () => {
    console.log('servidor HTTP');
})

server.on('error', (err) => {
    console.log(err.message);
})
