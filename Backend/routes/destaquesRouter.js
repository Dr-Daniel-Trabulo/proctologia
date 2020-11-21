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

router.put('/destaques/editDestaques', (req, res) => {
    connection.query('UPDATE destaques SET ? WHERE DestaquesID=?',
        [req.body, req.body.DestaquesID],
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

router.delete('/destaques/deleteDestaque', (req, res) => {
    connection.query('DELETE FROM destaques WHERE destaquesID = ?',
        [req.body.DestaquesID],
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

router.post('/destaques/addDestaque', (req, res) => {
    connection.query('INSERT INTO destaques SET ?',
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