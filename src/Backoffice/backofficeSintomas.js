import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class backofficeSintomas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sintomas: [],
            sintomasDisplay: [],
            sintomasDisplayID: '',
            flash: '',
            messageStatus: ''
        }
    }

    getData = () => {
        axios
            .get('/sintomas')
            .then((res) => {
                let results = res.data
                this.setState({ sintomas: results })
            })
    }

    componentDidMount = () => {
        window.scrollTo(0, 0)
        this.getData()
    }

    handleChangeDropdown = (event) => {
        event.preventDefault()
        this.state.sintomas.map((sintoma) => {
            return (
                event.target.value === sintoma.nomeSintomas &&
                this.setState({ sintomasDisplay: sintoma, sintomasDisplayID: sintoma.sintomasID })
            )
        })
    }

    handleChangeForm = (event) => {
        let name = event.target.name
        let value = event.target.value
        let sintomasDisplay = { ...this.state.sintomasDisplay, [name]: value }
        this.setState({ sintomasDisplay })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let sintomasDisplay = this.state.sintomasDisplay

        axios
            .put('/sintomas/sintomas/editSintomas', sintomasDisplay)
            .then((res) => {
                this.setState({ flash: 'Alterado com sucesso', messageStatus: 'Sucesso' })
            })
            .catch((err) => {
                this.setState({ flash: 'Ocorreu um erro, por favor tente outra vez.', messageStatus: 'error' })
            })
    }

    handleDelete = () => {
        let sintomasID = this.state.sintomasDisplayID
        console.log(sintomasID)
        axios
            .delete('/sintomas/sintomas/deleteSintoma', { data: { sintomasID } })
            .then((res) => {
                this.setState({ flash: 'Eliminado com sucesso', messageStatus: 'Sucesso' })
            })
        window.location.reload();
        this.getData()
    }

    handleNewSintoma = () => {
        let sintomasDisplay = this.state.sintomasDisplay
        axios
            .post('/sintomas/sintomas/addSintoma', sintomasDisplay)
            .then((res) => {
                this.setState({ flash: 'Adicionado com sucesso', messageStatus: 'Sucesso' })
            })
            .catch((err) => {
                this.setState({ flash: 'Ocorreu um erro, por favor tente de novo', messageStatus: 'error' })
            })
        this.props.history.push({ pathname: '/backoffice/sintomas' })
    }

    render() {
        let pathNew = this.props.match.path

        return (
            <div>
                { pathNew !== '/backoffice/sintomas/new' ?
                    <div>
                        <h3>Edição da secção de Sintomas</h3>
                        <select name='sintomas' onChange={event => this.handleChangeDropdown(event)}>
                            <option selected='selected'> Seleccione um sintoma</option>
                            {this.state.sintomas.map((sintoma) => {
                                return (
                                    <option value={sintoma.nomeSintomas} name={sintoma.nomeSintomas}>{sintoma.nomeSintomas}</option>
                                )
                            })
                            }
                        </select>
                        <Link to={'/backoffice/sintomas/new'}>
                            <button>Novo Sintoma</button>
                        </Link>
                        {this.state.sintomasDisplay.length !== 0 &&
                            <form onSubmit={this.handleSubmit}>
                                <label name='nomeSintomas'>Sintoma</label>
                                <input type='text' name='nomeSintomas' value={this.state.sintomasDisplay.nomeSintomas} onChange={event => this.handleChangeForm(event)} />
                                <label name='descricaoSintomas'>Descrição dos sintomas</label>
                                <input type='text' name='descricaoSintomas' value={this.state.sintomasDisplay.descricaoSintomas} onChange={event => this.handleChangeForm(event)} />
                                <div></div>Fotografia 1
                                <label name='fotoLink1'>Link</label>
                                <input type='text' name='fotoLink1' value={this.state.sintomasDisplay.fotoLink1} onChange={event => this.handleChangeForm(event)} />
                                <label name='foto_alt1'>Descrição</label>
                                <input type='text' name='foto_alt1' value={this.state.sintomasDisplay.foto_alt1} onChange={event => this.handleChangeForm(event)} />
                                <div></div>Fotografia 2
                                <label name='fotoLink1'>Link</label>
                                <input type='text' name='fotoLink2' value={this.state.sintomasDisplay.fotoLink2} onChange={event => this.handleChangeForm(event)} />
                                <label name='foto_alt1'>Descrição</label>
                                <input type='text' name='foto_alt2' value={this.state.sintomasDisplay.foto_alt2} onChange={event => this.handleChangeForm(event)} />
                                <div></div>Fotografia 3
                                <label name='fotoLink1'>Link</label>
                                <input type='text' name='fotoLink3' value={this.state.sintomasDisplay.fotoLink3} onChange={event => this.handleChangeForm(event)} />
                                <label name='foto_alt1'>Descrição</label>
                                <input type='text' name='foto_alt3' value={this.state.sintomasDisplay.foto_alt3} onChange={event => this.handleChangeForm(event)} />
                                <div></div>Fotografia 4
                                <label name='fotoLink1'>Link</label>
                                <input type='text' name='fotoLink4' value={this.state.sintomasDisplay.fotoLink4} onChange={event => this.handleChangeForm(event)} />
                                <label name='foto_alt1'>Descrição</label>
                                <input type='text' name='foto_alt4' value={this.state.sintomasDisplay.foto_alt4} onChange={event => this.handleChangeForm(event)} />
                                <button type='submit'>GUARDAR</button>
                                <button type='button' onClick={this.handleDelete}>Eliminar Sintoma</button>
                            </form>
                        }
                    </div>
                    :
                    <div>
                        <h3>Novo Sintoma</h3>
                        <form>
                            <label name='nomeSintomas'>Sintoma</label>
                            <input type='text' name='nomeSintomas' value={this.state.sintomasDisplay.nomeSintomas} onChange={event => this.handleChangeForm(event)} />
                            <label name='descricaoSintomas'>Descrição dos sintomas</label>
                            <input type='text' name='descricaoSintomas' value={this.state.sintomasDisplay.descricaoSintomas} onChange={event => this.handleChangeForm(event)} />
                            <div></div>Fotografia 1
                        <label name='fotoLink1'>Link</label>
                            <input type='text' name='fotoLink1' value={this.state.sintomasDisplay.fotoLink1} onChange={event => this.handleChangeForm(event)} />
                            <label name='foto_alt1'>Descrição</label>
                            <input type='text' name='foto_alt1' value={this.state.sintomasDisplay.foto_alt1} onChange={event => this.handleChangeForm(event)} />
                            <div></div>Fotografia 2
                        <label name='fotoLink1'>Link</label>
                            <input type='text' name='fotoLink2' value={this.state.sintomasDisplay.fotoLink2} onChange={event => this.handleChangeForm(event)} />
                            <label name='foto_alt1'>Descrição</label>
                            <input type='text' name='foto_alt2' value={this.state.sintomasDisplay.foto_alt2} onChange={event => this.handleChangeForm(event)} />
                            <div></div>Fotografia 3
                        <label name='fotoLink1'>Link</label>
                            <input type='text' name='fotoLink3' value={this.state.sintomasDisplay.fotoLink3} onChange={event => this.handleChangeForm(event)} />
                            <label name='foto_alt1'>Descrição</label>
                            <input type='text' name='foto_alt3' value={this.state.sintomasDisplay.foto_alt3} onChange={event => this.handleChangeForm(event)} />
                            <div></div>Fotografia 4
                        <label name='fotoLink1'>Link</label>
                            <input type='text' name='fotoLink4' value={this.state.sintomasDisplay.fotoLink4} onChange={event => this.handleChangeForm(event)} />
                            <label name='foto_alt1'>Descrição</label>
                            <input type='text' name='foto_alt4' value={this.state.sintomasDisplay.foto_alt4} onChange={event => this.handleChangeForm(event)} />
                            <button type='submit' onClick={this.handleNewSintoma}>Inserir novo Sintoma</button>
                        </form>

                    </div>
                }
            </div>
        )
    }

}

export default backofficeSintomas