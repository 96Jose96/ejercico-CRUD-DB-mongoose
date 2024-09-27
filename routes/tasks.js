const express = require('express')
const router = express.Router()
const Card = require('../models/Task')

router.post('/create', async (req, res) => {
    try {
        const newTask = await Card.create(req.body)
        res.status(201).json(newTask)
    } catch (err) {
        res.status(500).json({ err: 'Create new task failed' })
    }
})

router.get('/', async (req, res) => {
    try {
        const tasks = await Card.find()
        res.status(200).json(tasks)
    } catch (err) {
        console.status(500).json({ err: 'Error getting tasks' })
    }
})

router.get('/id/:_id', async (req, res) => {
    try {
        const task = await Card.findById(req.params._id)
        if (!Card) {
            return res.status(404).json({ err: 'Task not find' })
        }
        res.status(200).json(task)
    } catch (err) {
        res.status(500).json({ err: 'Error getting task' })
    }
})

router.put('/markAsCompleted/:_id', async (req, res) => {
    try {
        const task = await Card.findByIdAndUpdate(
            req.params._id,
            { completed: true },
            { new: true }
        )
        if(!task) {
            return res.status(404).json({ err: 'Task not find' })
        }
        res.status(200).json(task)
    } catch (err) {
        res.status(500).json({ err: 'Task mark as completed failed' })
    }
})

router.put('/id/:_id', async (req, res) => {
    try {
        const { title } = req.body
        const task = await Card.findById(req.params._id)
        if (!task) {
            return res.status(404).json({ err: 'Task not find' })
        }
        task.title = title
        await task.save()
        res.status(200).json(task)
    } catch (err) {
        res.status(500).json({ err: 'Error getting task' })
    }
})

router.delete('/id:_id', async (req, res) => {
    try {
        const task = await Card.findByIdAndDelete(req.params._id)
        if (!task) {
            return res.status(404).json({ err: 'Task delete failed' })
        }
        res.status(200).json({ message: 'Task deleted' })
    } catch (err) {
        res.status(500).json({ err: 'Error getting task' })
    }
})

module.exports = router