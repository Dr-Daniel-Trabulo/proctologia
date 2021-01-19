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
        console.log(patologiaLink)
        return (
            <div className='Main'>
                {
                    this.props.windowSize.windowWidth > 991 &&
                    <div className='menu'>
                        <div className='submenuNome'>Patologias</div>
                        <ul className='menu_ul'>
                            {
                                this.state.patologias.map((patologia) => {
                                    return (
                                        patologiaLink === patologia.linkPatologia ?
                                            <li className='menu_li_bold'>
                                                <a className='link' href={`./${patologia.linkPatologia}`}>
                                                    {patologia.nomePatologia}
                                                </a>
                                            </li>
                                            :
                                            <li className='menu_li'>
                                                <a className='link' href={`./${patologia.linkPatologia}`}>
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
                                    <div>
                                        <div className='sintomasPatologia'>Patologias</div>
                                        <div className='estruturaPatologias'>
                                            <div className='titulo'>{patologia.nomePatologia}</div>
                                            <div className='conteudo'>
                                                <div className='textoPatologia'> {ReactHtmlParser(patologia.examesPatologia)}</div>
                                                <div className='fotosSeccao'>
                                                    {patologia.fotoLink1 && <img className='fotos' src={patologia.fotoLink1} alt={patologia.foto_alt1} />}
                                                    {patologia.fotoLink2 && <img className='fotos' src={patologia.fotoLink2} alt={patologia.foto_alt2} />}
                                                </div>
                                            </div>
                                            <div className='conteudo_intermedio'>
                                                <div className='textoPatologia'>{ReactHtmlParser(patologia.sintomasPatologia)}</div>
                                                {
                                                    patologia.fotoLink3 &&
                                                    <div className='fotosSeccao'    >
                                                        <img className='fotos' src={patologia.fotoLink3} alt={patologia.foto_alt3} />
                                                    </div>
                                                }
                                            </div>
                                            <div className='conteudo_intermedio'>
                                                <div className='textoPatologia'> {ReactHtmlParser(patologia.tratamentosPatologia)}</div>
                                                {
                                                    patologia.fotoLink4 &&
                                                    <div className='fotosSeccao'>
                                                        <img className='fotos' src={patologia.fotoLink4} alt={patologia.foto_alt4} />
                                                    </div>
                                                }
                                                <div>
                                                </div>
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