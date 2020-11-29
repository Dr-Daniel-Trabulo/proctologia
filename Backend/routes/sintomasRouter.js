const express = require('express')

const router = express.Router()
const connection = require('../config')
const jwtMiddleware = require('../Services/jwtMiddleware');
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



router.get('/', (req, res) => {
    connection.query('SELECT * FROM sintomas',
        (err, results) => {
            if (err) {
                res.status(400).send('Query Error')
            } else {
                res.status(200).json(results);
            }
        })
})

router.put('/sintomas/editSintomas', jwtMiddleware, (req, res) => {
    connection.query('UPDATE sintomas SET ? WHERE ID = ?',
        console.log('qualquer coisa'),
        console.log(req.body.ID)
        [req.body, req.body.ID],
        (err, results) => {
            if (err) {
                console.log(err)
                console.log(req.body)
                res.status(400).json({ flash: 'Ocorreu um erro' })
            } else {
                res.status(200).json({ flash: 'Alterado com sucesso' })
            }
        }
    )
})

router.delete('/sintomas/deleteSintoma', jwtMiddleware, (req, res) => {
    connection.query('DELETE FROM sintomas WHERE ID = ?',
        [req.body.ID],
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

router.post('/sintomas/addSintoma', jwtMiddleware, (req, res) => {
    connection.query('INSERT INTO sintomas SET ?',
        [req.body],
        (err, results) => {
            if (err) {
                console.log(err)
                res.status(400).json({ flash: 'Ocorreu um erro ao inserir' })
            } else {
                res.status(200).json({ flash: 'Destaque criado com sucesso' })
            }

        }
    )
}
)



module.exports = router;