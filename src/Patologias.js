import React from 'react'
import axios from 'axios'
import Footer from './Footer'
import './PatologiasDestaquesSintomas.css'
import ReactHtmlParser from "react-html-parser";
import { Link } from 'react-router-dom';
import { withWindowSizeListener } from 'react-window-size-listener';




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
            <div className='Main'>
                {
                    this.props.windowSize.windowWidth > 991 &&
                    <div className='menuPatologias'>
                        <div className='submenuNome'>Patologias</div>
                        {/* {
                            this.state.patologias.map((patologia) => {
                                return (
                                    <ul className='menuPatologias_ul'>
                                        <li className='menuPatologias_li'><a className='linkPatologia' href={`./${patologia.linkPatologia}`}>{patologia.nomePatologia}</a></li>
                                    </ul>
                                )
                            })
                        } */}
                        <ul className='menuPatologias_ul'>
                            {
                                this.state.patologias.map((patologia) => {
                                    return (
                                        <li className='menuPatologias_li'>
                                            <a className='linkPatologia' href={`./${patologia.linkPatologia}`}>
                                                {patologia.nomePatologia}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>}
                {
                    this.state.patologias.map((patologia) => {
                        return (
                            patologia.publish === 1 &&
                            <div>
                                {
                                    patologia.linkPatologia === patologiaLink &&
                                    <div className='estrutura'>
                                        <div className='titulo'>{patologia.nomePatologia}</div>
                                        <div className='conteudo'>
                                            <div className='fotosSeccao'>
                                                {patologia.fotoLink1 && <img className='fotos' src={patologia.fotoLink1} alt={patologia.foto_alt1} />}
                                                {patologia.fotoLink2 && <img className='fotos' src={patologia.fotoLink2} alt={patologia.foto_alt2} />}
                                            </div>
                                            <div> {ReactHtmlParser(patologia.examesPatologia)}</div>
                                        </div>
                                        <div className='conteudo'>
                                            {
                                                patologia.fotoLink3 &&
                                                <div>
                                                    <img className='fotos' src={patologia.fotoLink3} alt={patologia.foto_alt3} />
                                                </div>
                                            }
                                            <div>{ReactHtmlParser(patologia.sintomasPatologia)}</div>
                                        </div>
                                        <div className='conteudo'>
                                            {
                                                patologia.fotoLink4 &&
                                                <div>
                                                    <img className='fotos' src={patologia.fotoLink4} alt={patologia.foto_alt4} />
                                                </div>
                                            }
                                            <div>
                                                {ReactHtmlParser(patologia.tratamentosPatologia)}
                                            </div>
                                        </div>
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

export default withWindowSizeListener(Patologias);