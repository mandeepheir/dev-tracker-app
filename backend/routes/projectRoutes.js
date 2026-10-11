const express = require('express');
const router = express.Router();
const DevProject = require('../models/Project');

// route to get all the projects
router.post('/',async (req, res) => {
    try {
        const newProject = new DevProject(req.body);
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (error) {
        res.status(400).json({ message: error.message });


    }
});

// route to get all the projects
router.get('/', async (req, res) => {
    try {
        const projects = await DevProject.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;