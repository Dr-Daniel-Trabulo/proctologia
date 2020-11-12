import React from 'react'
import FormularioContacto from './FormularioContacto'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='contactoNome'>Clinica XPTO</div>
                <div className='contactos'> Telefone:<a href='tel:+351000000000'>+351000000000</a></div>
                <div className='contactos'>Ou deixe-nos a sua mensagem</div>
            </div>
            <FormularioContacto />
        </div>
    )
}

export default Footer

