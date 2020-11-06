import React from 'react'
import axios from 'axios'
import Footer from './Footer'


class Sintomas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sintomas: [],
            fotoSintomas: []
        }
    }


    componentDidMount = () => {
        window.scrollTo(0, 0)
        axios
            .get('/sintomas')
            .then((res) => {
                const resultSintomas = res.data
                console.log(resultSintomas)
                this.setState({ sintomas: resultSintomas })
            })
        axios
            .get('/fotoSintomas')
            .then((res) => {
                const resultsFotoSintomas = res.data
                console.log(resultsFotoSintomas)
                this.setState({ fotoSintomas: resultsFotoSintomas })
            })
    }


    render() {
        return (
            <div>
                {/* <h1>Sintomas de doença proctológica</h1> */}
                {this.state.sintomas.map((sintoma) => {
                    return (
                        <div>
                            <div>{sintoma.nomeSintomas}</div>
                            <div>{sintoma.descricaoSintomas}</div>
                            {this.state.fotoSintomas.map((foto) => {
                                return (
                                    foto.sintomasID === sintoma.sintomasID &&
                                    <img src={foto.fotoLink} alt={foto.alt} />)
                            })}
                        </div>)
                })}
                <Footer />
            </div>
        )
    }
}

export default Sintomas