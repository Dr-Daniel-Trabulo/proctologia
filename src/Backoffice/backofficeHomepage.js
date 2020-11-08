import React from 'react'
import axios from 'axios'

class backofficeHomepage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            CV_text: '',
            CV_pic: ''
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
        //this.setState({ [event.target.name]: event.target.value })
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { ...homepage } = this.state
        console.log(homepage)
        axios
            .put('/homepage', homepage)

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
            </div>

        )
    }
}

export default backofficeHomepage

