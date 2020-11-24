import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import './backofficeNavBar.css';


const BackSidebar = (props) => {

    // const history = useHistory();

    return (
        <div className="BackSidebar">
            <div className='main-link'>
                <Link to="/backoffice">BackOffice Dr Daniel Trabulo</Link>
            </div>
            <div className="menu-bar">
                <Nav fixed="left">
                    <Link to="/backoffice/contactos">Contactos</Link>
                    <Link to="/backoffice/homepage">Homepage</Link>
                    <Link to="/backoffice/patologias">Patologias</Link>
                    <Link to="/backoffice/destaques">Destaques</Link>
                    <Link to="/backoffice/sintomas">Sintomas</Link>
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

export default withRouter(BackSidebar);
