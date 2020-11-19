import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


class backofficeDestaques extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            destaques: [],
            destaquesDisplay: [],
            destaquesDisplayID: '',
            flash: '',
            messageStatus: ''
        }
    }

    getData = () => {
        axios
            .get('/destaques')
            .then((res) => {
                const results = res.data
                console.log(results)
                this.setState({ destaques: results })
            })
    }

    componentDidMount = () => {
        window.scrollTo(0, 0)
        this.getData()

    }

    handleClick = (event) => {
        event.preventDefault()
        this.state.destaques.map((destaque) => {
            return (
                destaque.nome === event.target.value &&
                this.setState({ destaquesDisplay: destaque, destaquesDisplayID: destaque.DestaquesID })

            )
        })
    }


    handleChange = (event) => {
        event.preventDefault()
        let name = event.target.name
        let value = event.target.value
        let destaquesDisplay = { ...this.state.destaquesDisplay, [name]: value }
        this.setState({ destaquesDisplay })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        let destaquesDisplay = this.state.destaquesDisplay
        axios
            .put('/destaques/destaques/editDestaques', destaquesDisplay)
            .then((res) => {
                this.setState({ flash: 'Alterado com sucesso', messageStatus: 'Sucesso' })
            })
            .catch((err) => {
                this.setState({ flash: 'Ocorreu um erro, por favor tente outra vez.', messageStatus: 'error' })
            })

    }

    handleDelete = () => {
        let destaquesDisplayID = this.state.destaquesDisplayID
        axios
            .delete('/destaques/destaques/deleteDestaque', { data: { destaquesDisplayID } })
            .then((res) => {
                this.setState({ flash: 'Eliminado com sucesso', messageStatus: 'Sucesso' })
            })
        window.location.reload()
        this.getData()
    }

    handleNewDestaque = () => {
        let destaquesDisplay = this.state.destaquesDisplay
        axios
            .post('/destaques/destaques/addDestaque', destaquesDisplay)
            .then((res) => {
                this.setState({ flash: 'Adicionado com sucesso', messageStatus: 'Sucesso' })
            })
            .catch((err) => {
                this.setState({ flash: 'Ocorreu um erro, por favor tente outra vez.', messageStatus: 'error' })
            })
        this.props.history.push({ pathname: '/backoffice/destaques' })
    }


    render() {
        let pathNew = this.props.match.path

        return (
            <div>
                {
                    pathNew !== '/backoffice/destaques/new' ?
                        <div>
                            <h3>Edição da secção de Destaques</h3>
                            <select name='destaques' onChange={event => this.handleClick(event)}>
                                <option selected="selected">Seleccione um destaque</option>
                                {this.state.destaques.map((destaque) => {
                                    return (
                                        <option name={destaque.nome} value={destaque.nome} >{destaque.nome}</option>
                                    )
                                })}
                            </select>
                            <Link Link to='/backoffice/destaques/new' > <button type='submit'>Novo Destaque</button></Link>
                            {
                                this.state.destaquesDisplay.length !== 0 &&
                                <form onSubmit={this.handleSubmit}>
                                    <label>Nome</label>
                                    <input type='text' name='nome' value={this.state.destaquesDisplay.nome} onChange={event => this.handleChange(event)} />
                                    <label>Texto</label>
                                    <input type='text' name='texto' value={this.state.destaquesDisplay.texto} onChange={event => this.handleChange(event)} />
                                    <div>Fotografia 1</div>
                                    <label>Link</label>
                                    <input type='text' name='fotoLink1' value={this.state.destaquesDisplay.fotoLink1} onChange={event => this.handleChange(event)} />
                                    <label>Descrição</label>
                                    <input type='text' name='foto_alt1' value={this.state.destaquesDisplay.foto_alt1} onChange={event => this.handleChange(event)} />
                                    <div>Fotografia 2</div>
                                    <label>Link</label>
                                    <input type='text' name='fotoLink2' value={this.state.destaquesDisplay.fotoLink2} onChange={event => this.handleChange(event)} />
                                    <label>Descrição</label>
                                    <input type='text' name='foto_alt2' value={this.state.destaquesDisplay.foto_alt2} onChange={event => this.handleChange(event)} />
                                    <div>Fotografia 3</div>
                                    <label>Link</label>
                                    <input type='text' name='fotoLink3' value={this.state.destaquesDisplay.fotoLink3} onChange={event => this.handleChange(event)} />
                                    <label>Descrição</label>
                                    <input type='text' name='foto_alt3' value={this.state.destaquesDisplay.foto_alt3} onChange={event => this.handleChange(event)} />
                                    <button type='submit'>GUARDAR</button>
                                    <button type='button' onClick={this.handleDelete}>Eliminar Destaque </button>
                                </form>
                            }
                        </div>
                        :
                        <div>
                            <h3>Novo Destaque</h3>
                            <form>
                                <label>Nome</label>
                                <input type='text' name='nome' value={this.state.destaquesDisplay.nome} onChange={event => this.handleChange(event)} />
                                <label>Texto</label>
                                <input type='text' name='texto' value={this.state.destaquesDisplay.texto} onChange={event => this.handleChange(event)} />
                                <div>Fotografia 1</div>
                                <label>Link</label>
                                <input type='text' name='fotoLink1' value={this.state.destaquesDisplay.fotoLink1} onChange={event => this.handleChange(event)} />
                                <label>Descrição</label>
                                <input type='text' name='foto_alt1' value={this.state.destaquesDisplay.foto_alt1} onChange={event => this.handleChange(event)} />
                                <div>Fotografia 2</div>
                                <label>Link</label>
                                <input type='text' name='fotoLink2' value={this.state.destaquesDisplay.fotoLink2} onChange={event => this.handleChange(event)} />
                                <label>Descrição</label>
                                <input type='text' name='foto_alt2' value={this.state.destaquesDisplay.foto_alt2} onChange={event => this.handleChange(event)} />
                                <div>Fotografia 3</div>
                                <label>Link</label>
                                <input type='text' name='fotoLink3' value={this.state.destaquesDisplay.fotoLink3} onChange={event => this.handleChange(event)} />
                                <label>Descrição</label>
                                <input type='text' name='foto_alt3' value={this.state.destaquesDisplay.foto_alt3} onChange={event => this.handleChange(event)} />
                                <button type='submit' onClick={this.handleNewDestaque}>Inserir novo Destaque</button>
                            </form>

                        </div>
                }
            </div>

        )
    }
}

export default backofficeDestaques

