import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import './backofficeNavBar.css';
import logoDT from '../Assets/LogoDT.png'


const backofficeNavBar = (props) => {

    // const history = useHistory();

    return (
        <div className="BackSidebar">
            <div className='menu-bar'>
                <Link to="/backoffice"><img src={logoDT} alt='logo Dr Daniel Trabulo Doenças Anais Hemmorroidas' /></Link>
            </div>
            <Nav fixed="left">
                <Nav.Link><Link to="/backoffice/contactos">Contactos</Link></Nav.Link>
                <Nav.Link><Link to="/backoffice/homepage">Homepage</Link></Nav.Link>
                <Nav.Link><Link to="/backoffice/patologias">Patologias</Link></Nav.Link>
                <Nav.Link><Link to="/backoffice/destaques" onClick={() => {window.location.href="/backoffice/destaques"}}>Destaques</Link></Nav.Link>
                <Nav.Link><Link to="/backoffice/sintomas" onClick={() => {window.location.href="/backoffice/sintomas"}}>Sintomas</Link></Nav.Link>
                <Nav.Link><Link to='/backoffice/proctologia'>O que é a proctologia?</Link></Nav.Link>
            </Nav>
            <button
                className="logout-button"
                onClick={() => {
                    Cookies.remove("token")
                    window.location.href = "/"
                }}
            >
                LOGOUT
      </button>
        </div>
    );
};

export default withRouter(backofficeNavBar);
