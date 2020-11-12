import React from 'react'
import axios from 'axios'

class backofficeDestaques extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            destaques: [],
            destaquesDisplay: [],
            destaquesDisplayID: ''

        }
    }
    componentDidMount = () => {
        window.scrollTo(0, 0)
        axios
            .get('/destaques')
            .then((res) => {
                const results = res.data
                console.log(results)
                this.setState({ destaques: results })
            })

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
        let destaquesDisplay = this.state.destaquesDisplayID
        axios
            .put('/editDestaques', destaquesDisplay)

    }


    render() {

        return (
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
                {this.state.destaquesDisplay.length !== 0 &&
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
                    </form>
                }
            </div>
        )
    }
}

export default backofficeDestaques

{/* <form>
                            <label>Nome</label>
                            <input type='text' name='nome' value={this.state.destaquesDisplay.nome} onChange={event => this.handleChange(event)} />
                            <label>Texto</label>
                            <input type='text' name='texto' value={this.state.destaquesDisplay.texto} onChange={event => this.handleChange(event)} />
                            <label>Fotografia 1</label>
                            <label>Link</label>
                            <input type='text' name='fotoLink1' value={this.state.destaquesDisplay.fotoLink1} onChange={event => this.handleChange(event)} />
                            <label>Descrição</label>
                            <input type='text' name='foto_alt1' value={this.state.destaquesDisplay.foto_alt1} onChange={event => this.handleChange(event)} />
                            <label>Fotografia 2</label>
                            <label>Link</label>
                            <input type='text' name='fotoLink2' value={this.state.destaquesDisplay.fotoLink2} onChange={event => this.handleChange(event)} />
                            <label>Descrição</label>
                            <input type='text' name='foto_alt2' value={this.state.destaquesDisplay.foto_alt2} onChange={event => this.handleChange(event)} />
                            <label>Fotografia 3</label>
                            <label>Link</label>
                            <input type='text' name='fotoLink3' value={this.state.destaquesDisplay.fotoLink3} onChange={event => this.handleChange(event)} />
                            <label>Descrição</label>
                            <input type='text' name='foto_alt3' value={this.state.destaquesDisplay.foto_alt3} onChange={event => this.handleChange(event)} />
                        </form> */}