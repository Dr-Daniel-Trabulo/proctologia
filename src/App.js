import './App.css';
import { BrowserRouter, Route, Switch, Redirect, Router } from 'react-router-dom'
import Patologias from './Patologias'
import NavBar from './NavBar'
import BackofficeNavBar from './Backoffice/backofficeNavBar'
import Contactos from './Contactos'
import HomePage from './HomePage'
import Sintomas from './Sintomas'
import Destaques from './Destaques'
import BackofficeContactos from './Backoffice/backofficeContactos'
import BackofficeHomePage from './Backoffice/backofficeHomepage'
import BackofficeDestaquesSintomas from './Backoffice/backofficeDestaquesSintomas'
import BackofficePatologias from './Backoffice/backofficePatologias'
import Login from './Backoffice/Login'
import ForgotPassword from './Backoffice/ForgotPassword'
import Proctologia from './Proctologia'
import BackofficeProctologia from './Backoffice/backofficeProctologia'
import React, { Suspense, useContext } from 'react';
import UserContext from './context/UserContext'

const App = () => {

  let currentPath = window.location.pathname
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* {!currentPath.includes('backoffice') ? <NavBar /> : <BackofficeNavBar />} */}
          <Route exact path='/' component={HomePage} />
          <Route exact path='/sintomas_doenca_proctologica' component={Sintomas} />
          <Route exact path='/patologias/:patologia' component={Patologias} />
          <Route exact path='/destaques_doenca_proctologica' component={Destaques} />
          <Route exact path='/contactos_dr_daniel_trabulo' component={Contactos} />
          <Route exact path='/proctologia' component={Proctologia} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/login-password" component={ForgotPassword} />

          <Route exact path='/backoffice/contactos' component={BackofficeContactos} />
          <Route exact path='/backoffice/homepage' component={BackofficeHomePage} />
          <Route exact path='/backoffice/patologias' component={BackofficePatologias} />
          <Route exact path='/backoffice/patologias/new' component={BackofficePatologias} />
          <Route exact path='/backoffice/destaques' component={BackofficeDestaquesSintomas} />
          <Route exact path='/backoffice/destaques/new' component={BackofficeDestaquesSintomas} />
          <Route exact path='/backoffice/sintomas' component={BackofficeDestaquesSintomas} />
          <Route exact path='/backoffice/sintomas/new' component={BackofficeDestaquesSintomas} />
          <Route exact path='/backoffice/proctologia' component={BackofficeProctologia} />
        </Switch>

        {!currentPath.includes('backoffice') && !currentPath.includes('login')
          &&
          (
            <div>
              <NavBar />
            </div>
          )}
        {!currentPath.includes('login') && currentPath.includes('backoffice') && (
          <div>
            <BackofficeNavBar />
          </div>
        )}
      </BrowserRouter>

    </div>
  )

}

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user, auth } = useContext(UserContext);
  console.log(auth)
  return (
    <Route
      {...rest}
      component={(props) =>
        auth ? <Component {...props} /> : <Redirect to='/backoffice' />
      }
    />
  );
};


export default App;
