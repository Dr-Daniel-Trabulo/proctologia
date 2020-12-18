const express = require('express')

const router = express.Router()
const connection = require('../config')
const jwtMiddleware = require('../Services/jwtMiddleware');
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    connection.query('SELECT * FROM proctologia',
        (err, results) => {
            if (err) {
                res.status(400).send('Query Error')
            } else {
                res.status(200).json(results)
            }
        })
})

router.put('/proctologia/editProctologia', (req, res) => {
    connection.query('UPDATE proctologia SET ?',
        [req.body],
        (err, results) => {
            if (err) {
                res.json({
                    code: 500,
                })
            } else {
                res.json({
                    code: 200,
                })
            }
        }
    )
})

module.exports = router;