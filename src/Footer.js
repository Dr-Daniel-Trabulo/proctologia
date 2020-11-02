import React from 'react'
import FormularioContacto from './FormularioContacto'

function Footer() {
    return (
        <div>
            <div>Deixe-nos a sua mensagem</div>
            <FormularioContacto />
            <div>Ou ligue-nos diretamente</div>
            <div> <a href='tel:+351000000000'>+351000000000</a></div>
        </div>
    )
}

export default Footer

