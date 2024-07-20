const router = require('express').Router();
const Task = require('../../models/Task');

// localhost:3001/api
router.post('/', (req ,res) => {
    const newTask = Task.create ({
        name:'San German, Puerto Rico',
        description: 'My pueblo donde creci',
        status: 'todo'
    });

    res.json(newTask);
})


module.exports = router;