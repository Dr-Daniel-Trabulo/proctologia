import React from 'react'
import FormularioContacto from './FormularioContacto'
import './Footer.css'
import telefone from './Assets/telefone.png'


function Footer() {
    return (
        <div className='footer'>
            <FormularioContacto className='formulario' />
            <div className='contactos'>
                <p className='consulta'>Caso pretenda agendar uma consulta pode fazê-lo através de mensagem. Os nossos serviços irão entrar em contacto consigo.</p>
                <p className='consulta_telefone'>Pode também agendar a sua consulta por telefone:</p>
                <div className='contactoTelefone'> <img className='imagem_telefone' alt='Contacto Telefonico doenças anais' src={telefone} /><a className='numeroTelefone' href='tel:+351 000 000 000'>+351 000 000 000</a></div>
            </div>
        </div>
    )
}

export default Footer

