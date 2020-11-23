import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Patologias from './Patologias'
import NavBar from './NavBar'
import Contactos from './Contactos'
import HomePage from './HomePage'
import Sintomas from './Sintomas'
import Destaques from './Destaques'
import BackofficeContactos from './Backoffice/backofficeContactos'
import BackofficeHomePage from './Backoffice/backofficeHomepage'
import BackofficeDestaquesSintomas from './Backoffice/backofficeDestaquesSintomas'
import backofficePatologias from './Backoffice/backofficePatologias';
import BackofficePatologias from './Backoffice/backofficePatologias'


const App = () => {

  let currentPath = window.location.pathname
  return (
    <div>
      <BrowserRouter>
        {!currentPath.includes('backoffice') && <NavBar />}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/sintomas_doenca_proctologica' component={Sintomas} />
        <Route exact path='/patologias/:patologia' component={Patologias} />
        <Route exact path='/destaques_doenca_proctologica' component={Destaques} />
        <Route exact path='/contactos_dr_daniel_trabulo' component={Contactos} />
        <Route exact path='/backoffice/contactos' component={BackofficeContactos} />
        <Route exact path='/backoffice/homepage' component={BackofficeHomePage} />
        <Route exact path='/backoffice/patologias' component={BackofficePatologias} />
        <Route exact path='/backoffice/patologias/new' component={backofficePatologias} />
        <Route exact path='/backoffice/destaques' component={BackofficeDestaquesSintomas} />
        <Route exact path='/backoffice/destaques/new' component={BackofficeDestaquesSintomas} />
        <Route exact path='/backoffice/sintomas' component={BackofficeDestaquesSintomas} />
        <Route exact path='/backoffice/sintomas/new' component={BackofficeDestaquesSintomas} />
      </BrowserRouter>
    </div>
  )

}

export default App;
