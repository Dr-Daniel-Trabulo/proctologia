import React from 'react'
import axios from 'axios'
import Footer from './Footer'
import ReactHtmlParser from "react-html-parser";
import './PatologiasDestaquesSintomas.css'
import { withWindowSizeListener } from 'react-window-size-listener';


class Sintomas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sintomas: [],
            fotoSintomas: []
        }
    }


    componentDidMount = () => {
        window.scrollTo(0,100)
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
                {
                    this.props.windowSize.windowWidth > 991 &&
                    <div className='menu'>
                        <div className='submenuNome'>Sintomas</div>
                        <div className='menu_ul'>
                            {
                                this.state.sintomas.map((sintoma) => {
                                    return (
                                        <div className='menu_li'>
                                            <a className='link' href={`#${sintoma.nome}`}>{sintoma.nome}</a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
                <div className='sintomasPatologia'>Sintomas</div>
                <div className='estruturaSintomas'>
                    <ul className='sintomas_ul'>
                        {this.state.sintomas.map((sintoma) => {
                            return (
                                sintoma.publish === 1 &&
                                <li id={sintoma.nome}>
                                    <div className='tituloSintomas'>{ReactHtmlParser(sintoma.nome)}</div>
                                    <div className='conteudoSintomas'>{ReactHtmlParser(sintoma.texto)}
                                        {sintoma.fotoLink1 && <img src={sintoma.fotoLink1} alt={sintoma.foto_alt1} />}
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

export default withWindowSizeListener(Sintomas)