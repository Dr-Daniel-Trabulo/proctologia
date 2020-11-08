    const express = require('express')

const router = express.Router()
const connection = require('../config')


router.get('/', (req, res) => {
    connection.query('SELECT * FROM contactos',
        (err, results) => {
            if (err) {
                res.status(400).send('Query Error')
            } else {
                res.status(200).json(results);
            }
        })
})

router.put('/editContactos', (req, res) => {
    connection.query('UPDATE contactos SET ?',
        [req.body],
        (err, results) => {
            if (err) {
                res.status(400).json({ flash: 'Ocorreu um erro' })
                console.log(err)
            } else {
                res.status(200).json({ flash: 'Alterado com sucesso' })
            }
        }
    )
})



module.exports = router;