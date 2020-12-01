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
            <div className='main'>
                <div >
                    <Nav fixed="top">
                        <ul className='ul'>
                            <div className='mainLink'>
                                <li className='li'><Link to="/">{<p className='mainLinkP1'>Dr. Daniel Trabulo</p>}{<p className='mainLinkP2'>Médico Proctologista</p>}</Link></li>
                            </div>
                            <li className='li'><Link to='/proctologia'>O que é a Proctologia?</Link></li>
                            <li className='li'><Link to='/sintomas_doenca_proctologica'>Sintomas</Link></li>
                            <li className='li'><NavDropdown title='Patologias' id="basic-nav-dropdown" data-toggle="collapse">
                                {
                                    this.state.patologias.map((patologia) => {
                                        return (
                                            <NavDropdown.Item key={patologia.idPatologia} href={patologia.nomePatologia}>
                                                <li className='li_dropDown'>
                                                    <Link to={`/patologias/${patologia.linkPatologia}`}>
                                                        {patologia.nomePatologia}
                                                    </Link>
                                                </li>
                                            </NavDropdown.Item>
                                        )
                                    })
                                }
                            </NavDropdown></li>
                            <li className='li'><Link to='destaques_doenca_proctologica'>Destaques</Link></li>
                            <li className='li'><Link to='/contactos_dr_daniel_trabulo'>Contactos</Link></li>
                        </ul>
                    </Nav>
                </div>

            </div>

        )
    }
}

export default NavBar

