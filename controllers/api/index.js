const router = require('express').Router();
const Task = require('../../models/Task');

router.get('/', async(req, res) => {
    const allTasks = await Task.findAll()
    res.json(allTasks);
})

// localhost:3001/api
router.post('/', async (req ,res) => {
    const newTask = await Task.create ({
        // const {name, description, status } = req.body; object deconstructuring mode
        name: req.body.name,
        description: req.body.description,
        status: req.body.status
    });

    res.json(newTask);
})


module.exports = router;