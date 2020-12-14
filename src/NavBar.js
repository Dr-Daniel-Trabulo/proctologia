import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'
import {
    Navbar, Nav, NavDropdown, Form, FormControl,
} from 'react-bootstrap';
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
                    <Navbar fixed="top" expand="lg" className="navbar" collapseOnSelect>
                        <Link to="/">
                            <Navbar.Brand>
                                {<p className='mainLinkP1'>Dr. Daniel Trabulo</p>}{<p className='mainLinkP2'>Médico Proctologista</p>}
                            </Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="header-toggler" />
                        {/* <Navbar.Collapse id='basic-navbar-nav'> */}
                        <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
                            <Nav className="navbar-nav">
                                <Nav.Link class='nav-link'><Link className='li' to='/proctologia'>O que é a Proctologia?</Link></Nav.Link>
                                <Nav.Link><Link className='li' to='/sintomas_doenca_proctologica'>Sintomas</Link></Nav.Link>
                                <div className='li'>
                                    <NavDropdown title='Patologias' id="basic-nav-dropdown" className="nav-header">
                                        {
                                            this.state.patologias.map((patologia) => {
                                                return (
                                                    patologia.publish === 1 &&
                                                    <NavDropdown.Item key={patologia.idPatologia} href={patologia.nomePatologia} className='dropdown-item'>
                                                        <Link to={`/patologias/${patologia.linkPatologia}`}>
                                                            {patologia.nomePatologia}
                                                        </Link>
                                                    </NavDropdown.Item>
                                                )
                                            })
                                        }
                                    </NavDropdown>
                                </div>
                                <Nav.Link><Link className='li' to='destaques_doenca_proctologica'>Destaques</Link></Nav.Link>
                                <Nav.Link><Link className='li' to='/contactos_dr_daniel_trabulo'>Contactos</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }
}

export default NavBar

