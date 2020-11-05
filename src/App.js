import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Patologias from './Patologias'
import NavBar from './NavBar'
import Footer from './Footer';
import Contactos from './Contactos'
import HomePage from './HomePage'
import Sintomas from './Sintomas'
import Destaques from './Destaques'


class App extends React.Component {
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
    let currentPath = window.location.pathname
    return (
      <div>
        <BrowserRouter>
          <NavBar patologias={this.state.patologias} />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/sintomas_doenca_proctologica' component={Sintomas} />
          <Route exact path='/patologias/:patologia' render={() => <Patologias patologias={this.state.patologias} />} component={Patologias} />
          <Route exact path='/destaques_doenca_proctologica' component={Destaques} />
          <Route exact path='/contactos_dr_daniel_trabulo' component={Contactos} />
          {!currentPath.includes('contactos') &&
            <Footer />}
        </BrowserRouter>

      </div>
    )
  }

}

export default App;
