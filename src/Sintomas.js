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
                this.setState({ sintomas: resultSintomas })
            })
    }


    render() {
        return (
            <div>
                {/* <h1>Sintomas de doença proctológica</h1> */}
                {this.state.sintomas.map((sintoma) => {
                    return (
                        <div>
                            {sintoma.publish === 1 &&
                                <div>
                                    <div>{sintoma.nome}</div>
                                    <div>{sintoma.texto}</div>
                                    <img src={sintoma.fotoLink1} alt={sintoma.foto_alt1} />
                                    <img src={sintoma.fotoLink2} alt={sintoma.foto_alt2} />
                                    <img src={sintoma.fotoLink3} alt={sintoma.foto_alt3} />
                                    <img src={sintoma.fotoLink4} alt={sintoma.foto_alt4} />
                                </div>
                            }

                        </div>
                    )
                })}
                <Footer />
            </div>
        )
    }
}

export default Sintomas