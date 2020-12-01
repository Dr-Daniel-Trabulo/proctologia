import React from 'react'
import axios from 'axios'
import Footer from './Footer'
import ReactHtmlParser from "react-html-parser";
import './PatologiasDestaquesSintomas.css'

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
                <div className='Main'>
                    {this.state.destaques.map((destaque) => {
                        return (
                            <div className='estrutura'>{destaque.publish === 1 &&
                                <div>
                                    <div className='titulo'>{destaque.nome}</div>
                                    <div>{ReactHtmlParser(destaque.texto)}</div>
                                    {destaque.fotoLink1 && <img src={destaque.fotoLink1} alt={destaque.foto_alt1} />}
                                    {destaque.fotoLink2 && <img src={destaque.fotoLink2} alt={destaque.foto_alt2} />}
                                    {destaque.fotoLink3 && <img src={destaque.fotoLink3} alt={destaque.foto_alt3} />}
                                    {destaque.fotoLink2 && <img src={destaque.fotoLink4} alt={destaque.foto_alt4} />}
                                </div>
                            }
                            </div>
                        )
                    })
                    }
                </div>
                <Footer />
            </div >


        )
    }
}

export default Destaques