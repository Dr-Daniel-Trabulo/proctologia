const express = require('express')

const router = express.Router()
const connection = require('../config')


router.get('/', (req, res) => {
    connection.query('SELECT * FROM destaques',
        (err, results) => {
            if (err) {
                res.status(400).send('Query Error')
            } else {
                res.status(200).json(results);
            }
        })
})

router.put('/editDestaques', (req, res) => {
    connection.query('UPDATE destaques SET ? WHERE DestaquesID = ?',
        [req.body, req.body.DestaquesID],
        (err, results) => {
            if (err) {
                res.status(400).send('Ocorreu um erro')
                console.log(err)
            } else {
                res.status(200).json('Alterado com sucesso')
            }
        }
    )
})


module.exports = router;