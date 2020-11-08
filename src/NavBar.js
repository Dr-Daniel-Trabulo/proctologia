import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { patologias: [] }
    }

    loadData = () => {
        axios
            .get('/patologias')
            .then((res) => {
                const results = res.data
                console.log(results)
                this.setState({ patologias: results })
            })
    }

    componentDidMount = () => {
        window.scrollTo(0, 0)
        this.loadData()
    }

    render() {
        return (
            <div>
                <nav>
                    <NavLink to='/'>Daniel Trabulo</NavLink>
                    <NavLink to='/sintomas_doenca_proctologica'>Sintomas Doença Proctológica</NavLink>
                    {
                        this.state.patologias.map((patologia) => {
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
}

export default NavBar