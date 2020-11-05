import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(props) {
    let patologias = props.patologias
    console.log(patologias)

   
    
    return (
        <div>
            <nav>
                <NavLink to='/'>Daniel Trabulo</NavLink>
                <NavLink to='/sintomas_doenca_proctologica'>Sintomas Doença Proctológica</NavLink>
                {
                    patologias.map((patologia) => {
                        return (
                            <NavLink to={`/patologias/${patologia.link}`}>
                                {patologia.nome}
                            </NavLink>
                        )
                    })
                }
                <NavLink to='/destaques_doenca_proctologica'>Destaques Proctologia</NavLink>
                <NavLink to='/contactos_dr_daniel_trabulo'>Contactos</NavLink>
            </nav>
        </div>

    )

}

export default NavBar