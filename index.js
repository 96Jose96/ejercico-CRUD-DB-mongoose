const express = require('express')
const app = express()
const PORT = 4000
const { dbConnection } = require('./config/config')
const router = require('./routes/tasks')

app.use(express.json())

app.use('/', router)

dbConnection()

app.listen(PORT, () => console.log(`Server listen on port: ${PORT}`))