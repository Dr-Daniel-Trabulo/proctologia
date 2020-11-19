import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'
import {
    Navbar, Nav, NavDropdown, Form, FormControl,
} from 'react-bootstrap';
//import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'


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
            <div >
                <div className='mainLink'>
                    <Link to="/">{<p>Dr. Daniel Trabulo</p>}{<p className='mainLinkP2'>Médico Proctologista</p>}</Link>
                    <div>Médico Proctologista</div>
                </div>
                <div className='BackSidebar'>
                    <Nav fixed="right">
                        <Link to='/sintomas_doenca_proctologica'>Sintomas Doença Proctológica</Link>
                        <NavDropdown title='Patologias' id="basic-nav-dropdown" data-toggle="collapse">
                            {
                                this.state.patologias.map((patologia) => {
                                    return (
                                        <NavDropdown.Item key={patologia.id} className="dropdown-item" href={patologia.nome}>
                                            <Link to={`/patologias/${patologia.link}`}>
                                                {patologia.nome}
                                            </Link>
                                        </NavDropdown.Item>
                                    )
                                })
                            }
                        </NavDropdown>
                        <Link to='destaques_doenca_proctologica'>Destaques</Link>
                        <Link to='/contactos_dr_daniel_trabulo'>Contactos</Link>
                    </Nav>
                </div>

            </div>

        )
    }
}

export default NavBar

