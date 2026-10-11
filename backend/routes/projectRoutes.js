const express = require('express');
const router = express.Router();
const DevProject = require('../models/Project');

// 1. GET: सारे प्रोजेक्ट्स देखने के लिए
router.get('/', async (req, res) => {
    try {
        const projects = await DevProject.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 2. POST: नया प्रोजेक्ट जोड़ने के लिए
router.post('/', async (req, res) => {
    try {
        const { title, description, status } = req.body;
        
        const newProject = new DevProject({
            title,
            description,
            status
        });

        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// 3. DELETE: आईडी के आधार पर प्रोजेक्ट हटाने के लिए
router.delete('/:id', async (req, res) => {
    try {
        const projectId = req.params.id;
        const deletedProject = await DevProject.findByIdAndDelete(projectId);
        
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;