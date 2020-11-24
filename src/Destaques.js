import React from 'react'
import axios from 'axios'
import Footer from './Footer'

class Destaques extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            destaques: []
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
    }


    render() {
        return (
            <div>
                {this.state.destaques.map((destaque) => {
                    return (
                        <div>{destaque.publish === 1 &&
                            <div>
                                <div>{destaque.nome}</div>
                                <div>{destaque.texto}</div>
                                <img src={destaque.fotoLink1} alt={destaque.foto_alt1} />
                                <img src={destaque.fotoLink2} alt={destaque.foto_alt2} />
                                <img src={destaque.fotoLink3} alt={destaque.foto_alt3} />
                                <img src={destaque.fotoLink4} alt={destaque.foto_alt4} />
                            </div>
                        }
                        </div>


                    )
                })
                }
                <Footer />
            </div >


        )
    }
}

export default Destaques