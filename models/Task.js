const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    title: String,
    completed: { type: Boolean, default: false }
}, { timestamps: true })

const Card = mongoose.model('Card', cardSchema)

module.exports = Card
