import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import BackofficePatologiasDetalheEditDelete from './backofficePatologiasEditDelete'
import BackofficePatologiasNew from './backOfficePatologiasNew'

class backofficePatologias extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            patologias: [],
            patologiaDisplay: '',
            nomePatologia: '',
            tratamentosPatologia: '',
            examesPatologia: '',
            sintomasPatologia: '',
            linkPatologia: '',
            idPatologia: '',
            flash: '',
            messageStatus: ''
        }
    }

    getData = () => {
        axios
            .get('/patologias')
            .then((res) => {
                const results = res.data
                this.setState({ patologias: results })
            })

    }

    componentDidMount = () => {
        window.scrollTo(0, 0)
        this.getData()
    }

    handleClick = (event) => {
        event.preventDefault()
        this.state.patologias.map((patologia) => {
            return (
                patologia.nomePatologia === event.target.value &&
                this.setState({
                    patologiaDisplay: patologia,
                    nomePatologia: patologia.nomePatologia,
                    tratamentosPatologia: patologia.tratamentosPatologia,
                    examesPatologia: patologia.examesPatologia,
                    sintomasPatologia: patologia.sintomasPatologia,
                    linkPatologia: patologia.linkPatologia,
                    idPatologia: patologia.idPatologia
                })
            )
        })
    }

    handleChange = (event) => {
        event.preventDefault()
        let value = event.target.value
        let name = event.target.name
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let { patologias,
            patologiaDisplay,
            flash,
            messageStatus,
            ...patologiasPut
        } = this.state

        axios
            .put('/patologias/patologias/editPatologias', patologiasPut)
            .then((res) => {
                console.log(patologiasPut)
                this.setState({ flash: 'Alterado com Sucesso', messageStatus: 'Sucesso' })
            })
            .catch((err) => {
                console.log(patologiasPut)
                this.setState({ flash: 'Ocorreu um erro', messageStatus: 'Erro' })
            })
        this.props.history.push({ pathname: '/backoffice/patologias' })

    }

    handleDelete = () => {
        let idPatologia = this.state.idPatologia

        axios
            .delete('/patologias/patologias/deletePatologia', { data: { idPatologia } })
            .then((res) => {
                this.setState({ flash: 'Apagado com sucesso', messageStatus: 'Sucesso' })
            })
            .catch((res) => {
                this.setState({ flash: 'Ocorreu um erro', messageStatus: 'Erro' })
            })
        window.location.reload()
        this.getData()
    }

    HandleNewSintoma = () => {
        let {
            patologias,
            patologiaDisplay,
            flash,
            messageStatus,
            ...patologiasPut
        } = this.state

        axios
            .post('/patologias/patologias/addPatologia', patologiasPut)
            .then((res) => {
                this.setState({ flash: 'Sintoma adicionado com sucesso', messageStatus: 'Sucesso' })
            })
            .catch((err) => {
                this.setState({ flash: 'Erro ao Adicionar sintoma', messageStatus: 'Erro' })
            })
        this.props.history.push({ pathname: '/backoffice/patologias' })

    }

    render() {
        let path = this.props.history.location.pathname
        return (
            <div>
                <div>Edição Patologia</div>
                <select name='patologias' onChange={(event => this.handleClick(event))}>
                    <option selected="selected">Seleccione uma patologia</option>
                    {this.state.patologias.map((patologia) => {
                        return (
                            <option name={patologia.nomePatologia} value={patologia.nomePatologia}>{patologia.nomePatologia}</option>
                        )
                    })}
                </select>
                <Link to='/backoffice/patologias/new'>
                    <button>Nova Patologia</button>
                </Link>

                {!path.includes('/new') ?
                    <div>
                        <BackofficePatologiasDetalheEditDelete
                            patologiaDisplay={this.state.patologiaDisplay}
                            nomePatologia={this.state.nomePatologia}
                            sintomasPatologia={this.state.sintomasPatologia}
                            examesPatologia={this.state.examesPatologia}
                            tratamentosPatologia={this.state.tratamentosPatologia}
                            linkPatologia={this.state.linkPatologia}
                            idPatologia={this.state.idPatologia}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            handleDelete={this.handleDelete}
                        />
                    </div>
                    :
                    <div>
                        <BackofficePatologiasNew
                            patologiaDisplay={this.state.patologiaDisplay}
                            nomePatologia={this.state.nomePatologia}
                            sintomasPatologia={this.state.sintomasPatologia}
                            examesPatologia={this.state.examesPatologia}
                            tratamentosPatologia={this.state.tratamentosPatologia}
                            linkPatologia={this.state.linkPatologia}
                            idPatologia={this.state.idPatologia}
                            handleChange={this.handleChange}
                            HandleNewSintoma={this.HandleNewSintoma}
                        />
                    </div>
                }
            </div>
        )
    }
}


export default backofficePatologias

