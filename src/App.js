import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
    let patologias = [
      { id: 1, name: 'Hemorroidas', link: 'hemorroidas', textoIntro: 'textoIntro1', sintomas: 'sintomas1', exames: 'Exames1', tratamentos: 'tratamentos1' },
      { id: 2, name: 'Eczema Anal', link: 'eczemaanal', textoIntro: 'textoIntro1', sintomas: 'sintomas2', exames: 'Exames2', tratamentos: 'tratamentos2' }
    ]
    this.setState({ patologias: patologias })
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
