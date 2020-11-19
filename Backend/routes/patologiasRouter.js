const express = require('express')
const router = express.Router()
const connection = require('../config')

router.get('/', (req, res) => {
    connection.query('SELECT * FROM patologias',
        (err, results) => {
            if (err) {
                res.status(400).send('Query Error')
            } else {
                res.status(200).json(results);
            }
        }
    )
})

router.put('/patologias/editPatologias', (req, res) => { 
    connection.query('UPDATE patologias SET ?',
        [req.body],
        (err, results) => {
            console.log('router')
            if (err) {
                res.status(400).json({ flash: 'Ocorreu um erro' })
            } else {
                res.status(200).json({ flash: 'Alterado com sucesso' })
            }
        }
    )
})





module.exports = router;