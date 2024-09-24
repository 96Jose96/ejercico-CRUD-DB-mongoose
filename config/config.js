const mongoose = require('mongoose')
require('dotenv').config({ path: './env/.env' })

const dbConnection = async () => {
    try {
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database conection OK')
    } catch (err) {
        console.error(err)
        throw new Error('Database conection failed')
    }
}

module.exports = {
    dbConnection
}