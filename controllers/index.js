const router = require('express').Router();
const api = require('./api');

// localhost:3001/api
router.use("/api", api);

// localhost:3001/sgpr
router.get("/sgpr", (req, res) => {
    res.json('hello world!');
})

module.exports = router;