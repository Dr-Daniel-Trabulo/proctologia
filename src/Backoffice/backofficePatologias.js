import React from 'react'
import axios from 'axios'
import BackofficePatologiasDetalhe from './backofficePatologiasDetalhe'

class backofficePatologias extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            patologias: [],
            nomePatologia: '',
            patologiaDisplay: ''
        }
    }

    componentDidMount = () => {
        window.scrollTo(0, 0)
        axios
            .get('/patologias')
            .then((res) => {
                const results = res.data
                this.setState({ patologias: results })
            })
    }

    handleClick = (event) => {
        event.preventDefault()
        this.state.patologias.map((patologia) => {
            return (
                patologia.nome === event.target.value &&
                this.setState({ nomePatologia: patologia.nome, patologiaDisplay: patologia })
            )
        })
    }

    handleChange = (event) => {
        event.preventDefault()
        let value = event.target.value
        let name = event.target.name
        const patologiaDisplay = { ...this.state.patologiaDisplay, [name]: value }
        this.setState({ patologiaDisplay })
    }


    render() {

        return (
            <div>
                <div>Patologia</div>
                <select name='patologias' onChange={(event => this.handleClick(event))}>
                    <option selected="selected">Seleccione uma patologia</option>
                    {this.state.patologias.map((patologia) => {
                        return (
                            <option name={patologia.nome} value={patologia.nome}>{patologia.nome}</option>
                        )
                    })}
                </select>
                <div>
                    {this.state.patologias.map((detalhesPatologiaDisplay) => {
                        return (
                            detalhesPatologiaDisplay.nome === this.state.nomePatologia &&
                            <BackofficePatologiasDetalhe
                                nomePatologia={detalhesPatologiaDisplay.nome}
                                sintomasPatologia={detalhesPatologiaDisplay.sintomas}
                                examesPatologia={detalhesPatologiaDisplay.exames}
                                tratamentosPatologia={detalhesPatologiaDisplay.tratamentos}
                                idPatologia={detalhesPatologiaDisplay.id}
                                handleChange={this.handleChange}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}


export default backofficePatologias

