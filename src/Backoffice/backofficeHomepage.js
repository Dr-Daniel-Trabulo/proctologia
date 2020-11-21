import React from 'react'
import axios from 'axios'
import PopUp from '../PopUp'

class backofficeHomepage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            CV_text: '',
            CV_pic: '',
            flash: '',
            messageStatus: ''
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        axios
            .get('/homepage')
            .then((res) => {
                const results = res.data[0]
                this.setState({ CV_text: results.CV_Text })
                this.setState({ CV_pic: results.CV_Pic })
            })
    }

    handleChange = (event) => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { flash, messageStatus, ...homepage } = this.state
        axios
            .put('/homepage/homepage/editHomepage', homepage)
            .then((res) => {
                this.setState({ flash: 'Alterado com Sucesso', messageStatus: 'Sucesso' })
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div>Texto Apresentação</div>
                    <input type='text' name='CV_text' value={this.state.CV_text} onChange={(event) => this.handleChange(event)} />
                    <div>Fotografia Apresentação</div>
                    <input type='text' name='CV_pic' value={this.state.CV_pic} onChange={(event) => this.handleChange(event)} />
                    <button type='submit'>GUARDAR</button>
                </form>
                <PopUp
                    flashInput={this.state.flash}
                    typeMessage={this.state.messageStatus}
                />
            </div>
        )
    }
}

export default backofficeHomepage

