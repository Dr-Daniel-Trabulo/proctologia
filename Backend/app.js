require('dotenv').config();
const express = require('express');
const port = 5000;
const app = express();
const connection = require('./config');



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
//app.use(express.json())




app.use('/homepage', homepageRouter)
app.use('/patologias', patologiasRouter)
app.use('/destaques', destaquesRouter)
app.use('/contactos', contactosRouter)
app.use('/sintomas', sintomasRouter)


app.listen(port, (err) => {
    err ?
        console.log(err)
        :
        console.log(`The app is running on port ${port}`)
})


