import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import './backofficeNavBar.css';


const backofficeNavBar = (props) => {

    // const history = useHistory();

    return (
        <div className="BackSidebar">
            <div className='main-link'>
                <Link to="/backoffice">BackOffice Dr Daniel Trabulo</Link>
            </div>
            <div className="menu-bar">
                <Nav fixed="left">
                    <Nav.Link><Link to="/backoffice/contactos">Contactos</Link></Nav.Link>
                    <Nav.Link><Link to="/backoffice/homepage">Homepage</Link></Nav.Link>
                    <Nav.Link><Link to="/backoffice/patologias">Patologias</Link></Nav.Link>
                    <Nav.Link><Link to="/backoffice/destaques">Destaques</Link></Nav.Link>
                    <Nav.Link><Link to="/backoffice/sintomas">Sintomas</Link></Nav.Link>
                </Nav>
            </div>
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
