import React from 'react'
import axios from 'axios'
import Footer from './Footer'

class Destaques extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            destaques: [],
            fotosDestaques: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        axios
            .get('/destaques')
            .then((res) => {
                const resultsDestaques = res.data
                console.log(resultsDestaques)
                this.setState({ destaques: resultsDestaques })
            })
        axios
            .get('/fotosDestaques')
            .then((res) => {
                const resultsFotosDestaques = res.data
                console.log(resultsFotosDestaques)
                this.setState({ fotosDestaques: resultsFotosDestaques })
            })
    }


    render() {
        return (
            <div>
                {this.state.destaques.map((destaque) => {
                    return (<div>
                        <div>{destaque.nome}</div>
                        <div>{destaque.texto}</div>
                        {this.state.fotosDestaques.map((foto) => {
                            return (
                                destaque.DestaquesID === foto.DestaquesID &&
                                <img src={foto.fotoLink} alt={foto.alt} />
                            )
                        })}
                    </div>)
                })
                }
                <Footer />
            </div>
            

        )
    }
}

export default Destaques