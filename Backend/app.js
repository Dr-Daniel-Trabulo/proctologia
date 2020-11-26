require('dotenv').config();
const express = require('express');
const port = 5000;
const bodyParser = require('body-parser')
const app = express();
const connection = require('./config');
const nodemailer = require('nodemailer');




connection.connect((err) => {
    if (err) {
        throw err
    } else {
        console.log('database successfully connected')
    }
})


const homepageRouter = require('./routes/homepageRouter');
const patologiasRouter = require('./routes/patologiasRouter')
const destaquesRouter = require('./routes/destaquesRouter')
const contactosRouter = require('./routes/contactosRouter')
const sintomasRouter = require('./routes/sintomasRouter')
app.use(express.json())


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/homepage', homepageRouter)
app.use('/patologias', patologiasRouter)
app.use('/destaques', destaquesRouter)
app.use('/contactos', contactosRouter)
app.use('/sintomas', sintomasRouter)

const smtpTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: 'consultasdrdanieltrabulo@gmail.com',
        pass: "danieltrabulo1+"
    }
})


app.post('/email', (req, res) => {
    let nome = req.body.nome
    let email = req.body.email
    let telefone = req.body.telefone
    let message = req.body.message
    const mailOptions = {
        from:'Consulta Dr Daniel Trabulo <consultasdrdanieltrabulo@gmail.com>',
        to: 'antoniobranco@sapo.pt',
        replyTo: `${email}`,
        subject: `Pedido contacto Dr Daniel Trabulo - ${nome}`,
        text: `${message}`,
        html: `<p><b>Pedido contacto site Dr Daniel Trabulo. Informações abaixo.</b></p>
        <div>Enviado por: ${nome}</div>
        <div>Email: ${email}</div>
        <div>Telefone: ${telefone}</div>
        <div>Mensagem: ${message}</div>
        <p>Email gerado automaticamente. A resposta a este email é efectuada para o remetente da mensagem</p>`,

    };
    smtpTransporter.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error);
        }
        smtpTransporter.close();
    });
    if (req.successMessage) {
        res.json({
            code: 200,
        });
    } else {
        res.json({
            code: 500,
        });
    }
});



app.listen(port, (err) => {
    err ?
        console.log(err)
        :
        console.log(`The app is running on port ${port}`)
})


