const express = require('express')
const app = express()
const PORT = 8000
const { dbConnection } = require('./config/config')
const router = require('./routes/tasks')
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')


app.use(express.json())

app.use('/', router)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

dbConnection()

app.listen(PORT, () => console.log(`Server listen on port: ${PORT}`))