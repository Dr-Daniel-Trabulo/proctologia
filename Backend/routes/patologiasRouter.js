const express = require('express')
const router = express.Router()
const connection = require('../config')
const jwtMiddleware = require('../Services/jwtMiddleware');
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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
    connection.query('UPDATE patologias SET ? WHERE idPatologia = ?',
        [req.body, req.body.idPatologia],
        (err, results) => {
            if (err) {
                console.log(err)
                res.status(400).json({ flash: 'Ocorreu um erro' })
            } else {
                res.status(200).json({ flash: 'Alterado com sucesso' })
            }
        }
    )
})

router.delete('/patologias/deletePatologia', (req, res) => {
    connection.query('DELETE FROM patologias WHERE idPatologia = ?',
        [req.body.idPatologia],
        (err, results) => {
            if (err) {
                res.status(400).json({ flash: 'Ocorreu um erro ao eliminar' })
            } else {
                res.status(200).json({ flash: 'Eliminado com sucesso' })
            }
        }
    )
}
)

router.post('/sintomas/addPatologia', (req, res) => {
    connection.query('INSERT INTO patologias SET ?',
        [req.body],
        (err, results) => {
            if (err) {
                res.status(400).json({ flash: 'Ocorreu um erro ao inserir' })
            } else {
                res.status(200).json({ flash: 'Destaque criado com sucesso' })
            }

        }
    )
}
)






module.exports = router;