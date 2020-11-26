const nodemailer = require('nodemailer');
let express = require('express');

const smtpTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: 'consultasdrdanieltrabulo@gmail.com',
        pass: "danieltrabulo1+"
    }
})

const sendNodemailer = () => {
    let nome = req.body.nome
    let email = req.body.email
    let telefone = req.body.telefone
    let message = req.body.message
    const mailOptions = {
        // from: 'Consulta Dr Daniel Trabulo <consultasdrdanieltrabulo@gmail.com>',
        to: 'antoniobranco@sapo.pt',
        replyTo: `${email}`,
        subject: `Pedido contacto Dr Daniel Trabulo - ${nome}`,
        text: `${message}`,
        html: `<p><b>Pedido contacto site Dr Daniel Trabulo. Informações abaixo.</b></p>
        <div>Enviado por: ${nome}</div>
        <div>Email: ${email}</div>
        <div>Telefone: ${telefone}</div>
        <div>Mensagem: ${message}</div>
        <p>Email gerado automaticamente. Não responder para este endereço de email</p>`,

    };
    console.log(mailOptions)
    smtpTransporter.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error);
        }
        smtpTransporter.close();
    });
};



module.exports = sendNodemailer;


//https://medium.com/verclaire-nine/how-to-build-a-contact-form-with-react-and-nodemailer-3ca105eff797