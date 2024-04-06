const express = require('express');
const path = require('path');
const router = express.Router();
const rootPath = path.resolve();
const Task = require('../models/model');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    const message = req.query.message ? req.query.message : " ";
    res.render('index', { tasks, message });
});


router.post('/update', async (req, res) => {
    const { subject } = req.body;

    await Task.create({
        subject,
    });

    res.redirect('/?message=Task added successfully');
})

router.post('/remove', async (req, res) => {
    const { taskId } = req.body;

    try {
        await Task.findOneAndDelete({ _id: taskId });
        res.redirect('/?message=Task removed successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error removing task');

    }
});


module.exports = router;