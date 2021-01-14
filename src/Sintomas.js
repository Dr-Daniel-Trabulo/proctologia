import React from 'react'
import axios from 'axios'
import Footer from './Footer'
import ReactHtmlParser from "react-html-parser";
import './PatologiasDestaquesSintomas.css'

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
            <div className='Main'>
                <div className='menuPatologias'>
                    <div className='submenuNome'>Sintomas</div>
                    <ul className='menuPatologias_ul'>
                        {
                            this.state.sintomas.map((sintoma) => {
                                return (
                                    <li className='menuPatologias_ul'>
                                        <a href={`#${sintoma.nome}`}>{sintoma.nome}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='estrutura'>
                    <div className='sintomas'>Sintomas</div>
                    <ul>
                        {this.state.sintomas.map((sintoma) => {
                            return (
                                sintoma.publish === 1 &&
                                <li id={sintoma.nome}>
                                    <div className='titulo'>{ReactHtmlParser(sintoma.nome)}</div>
                                    <div className='conteudo'>{ReactHtmlParser(sintoma.texto)}
                                        {sintoma.fotoLink1 && <img src={sintoma.fotoLink1} alt={sintoma.foto_alt1} />}
                                        {sintoma.fotoLink2 && <img src={sintoma.fotoLink2} alt={sintoma.foto_alt2} />}
                                        {sintoma.fotoLink3 && <img src={sintoma.fotoLink3} alt={sintoma.foto_alt3} />}
                                        {sintoma.fotoLink4 && <img src={sintoma.fotoLink4} alt={sintoma.foto_alt4} />}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <Footer />

            </div>
        )
    }
}

export default Sintomas