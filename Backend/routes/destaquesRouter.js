const express = require('express')

const router = express.Router()
const connection = require('../config')
const jwtMiddleware = require('../Services/jwtMiddleware');
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



router.get('/', (req, res) => {
    connection.query('SELECT * FROM destaques ORDER BY ID DESC',
        (err, results) => {
            if (err) {
                res.status(400).send('Query Error')
            } else {
                res.status(200).json(results);
            }
        })
})

router.put('/destaques/editDestaques', jwtMiddleware, (req, res) => {
    connection.query('UPDATE destaques SET ? WHERE id=?',
        [req.body, req.body.id],
        (err, results) => {
            if (err) {
                console.log(err)
                res.status(400).json({ flash: 'Ocorreu um erro' })
            } else {
                console.log('destaquesPUtOk')
                res.status(200).json({ flash: 'Alterado com sucesso' })
            }
        }
    )
})

router.delete('/destaques/deleteDestaque', jwtMiddleware, (req, res) => {
    connection.query('DELETE FROM destaques WHERE id = ?',
        [req.body.id],
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

router.post('/destaques/addDestaque', jwtMiddleware, (req, res) => {
    connection.query('INSERT INTO destaques SET publish=1, ?',
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