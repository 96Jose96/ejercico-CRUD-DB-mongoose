const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
}, { timestamps: true })

const Card = mongoose.model('Card', cardSchema)

module.exports = Card
