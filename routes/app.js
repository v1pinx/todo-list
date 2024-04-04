const express = require('express');
const path = require('path');
const router = express.Router();
const rootPath = path.resolve();
const Task = require('../models/model');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    // res.send('hello')
    res.render('index', {tasks});
})

router.post('/update', async (req, res) => {
    const { subject, description } = req.body;

    await Task.create({
        subject,
        description,
    });

    res.send('Task added');
})

module.exports = router;