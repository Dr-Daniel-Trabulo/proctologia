import React from 'react'
import axios from 'axios'

class backofficeSintomas extends React.Component {
    constructor(props) {
        super(props)
        this.state = { sintomas: [], sintomasDisplay: [] }
    }

    componentDidMount = () => {
        window.scrollTo(0, 0)
        axios
            .get('/sintomas')
            .then((res) => {
                let results = res.data
                this.setState({ sintomas: results })
                console.log(results)
            })
    }

    handleChangeDropdown = (event) => {
        event.preventDefault()
        this.state.sintomas.map((sintoma) => {
            return (
                event.target.value === sintoma.nomeSintomas &&
                this.setState({ sintomasDisplay: sintoma })
            )
        })
    }

    handleChangeForm = (event) => {
        let name = event.target.name
        let value = event.target.value
        let sintomasDisplay = { ...this.state.sintomasDisplay, [name]: value }
        this.setState({ sintomasDisplay })
    }

    render() {
        return (
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
                {this.state.sintomasDisplay.length !== 0 &&
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

                    </form>
                }
            </div>
        )
    }

}

export default backofficeSintomas