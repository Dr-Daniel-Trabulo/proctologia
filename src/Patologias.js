import React from 'react'
import axios from 'axios'
import Footer from './Footer'


class Patologias extends React.Component {

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
        let patologiaLink = this.props.match.params.patologia

        return (
            <div>
                {
                    this.state.patologias.map((patologia) => {
                        return (
                            patologia.link === patologiaLink &&
                            <div>
                                <div>{patologia.nome}</div>
                                <div>{patologia.sintomas}</div>
                                <div>{patologia.exames}</div>
                                <div>{patologia.tratamentos}</div>
                            </div>
                        )
                    })
                }
                <Footer />
            </div>
        )
    }
}

export default Patologias;