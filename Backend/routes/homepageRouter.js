const express = require('express')

const router = express.Router()
const connection = require('../config')


router.get('/', (req, res) => {
    connection.query('SELECT * FROM homePage',
        (err, results) => {
            if (err) {
                res.status(400).send('Query Error')
            } else {
                res.status(200).json(results);
            }
        })
})


module.exports = router;