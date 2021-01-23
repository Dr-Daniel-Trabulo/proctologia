require('dotenv').config();
const express = require('express');

const port = 5000;
const bodyParser = require('body-parser')
const app = express();
const connection = require('./config');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const cors = require('cors');
const morgan = require('morgan');
const jwtMiddleware = require('./Services/jwtMiddleware');
// const jwt = require('jsonwebtoken');



connection.connect((err) => {
    if (err) {
        throw err
    } else {
        console.log('database successfully connected')
    }
})

app.use(
    cors({
        credentials: true,
        origin: process.env.CLEARDB_DATABASE_URL || 'http://localhost:5000',  //HEROKU
    })
);

app.use(morgan('dev'));

const homepageRouter = require('./routes/homepageRouter');
const patologiasRouter = require('./routes/patologiasRouter')
const destaquesRouter = require('./routes/destaquesRouter')
const contactosRouter = require('./routes/contactosRouter')
const sintomasRouter = require('./routes/sintomasRouter')
const loginRouter = require('./routes/loginRouter')
const proctologia = require('./routes/proctologiaRouter')
app.use(express.json())


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/login', loginRouter)
app.use('/homepage', homepageRouter)
app.use('/patologias', patologiasRouter)
app.use('/destaques', destaquesRouter)
app.use('/contactos', contactosRouter)
app.use('/sintomas', sintomasRouter)
app.use('/proctologia', proctologia)

//JWT
passport.use(
    'local',
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            session: false,
        },
        (email, password, cb) => {
            connection.query('SELECT * from users WHERE email = ?', [email], (err, results) => {
                if (err) return cb(err);
                if (!results.length) {
                    return cb(null, false, { message: 'Invalid Email' });
                }
                if (!bcrypt.compareSync(password, results[0].password)) {
                    return cb(null, false, { message: 'Invalid Password' });
                }
                return cb(null, results[0]);
            });
        },
    ));

passport.use(new JWTStrategy(
    {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'agp_secret',
    },
    ((jwtPayload, cb) => cb(null, jwtPayload)),
));

app.get('/verify-token', jwtMiddleware, (req, res) => {
    const { password, ...user } = req.user;
    res.send(user)
})


//NODEMAILER
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
        from: 'Consulta Dr Daniel Trabulo <consultasdrdanieltrabulo@gmail.com>',
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

// In case path is not found, we return the ‘Not Found’ 404 code
// app.use((_req, _res, next) => {
//     const err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });





app.listen(process.env.port || port, (err) => {
    err ?
        console.log(err)
        :
        console.log(`The app is running on port ${port}`)
})

