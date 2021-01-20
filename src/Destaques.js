import React from 'react'
import axios from 'axios'
import Footer from './Footer'
import ReactHtmlParser from "react-html-parser";
import './PatologiasDestaquesSintomas.css'
import Collapsible from 'react-collapsible';
import arrow from './Assets/dropdown-icon.jpg'
import arrowGrey from './Assets/dropdown-grey.png'

class Destaques extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            destaques: [],
            id: [],
        }
    }

    loadDestaques = () => {
        window.scrollTo(0, 0)
        axios
            .get('/destaques')
            .then((res) => {
                const resultsDestaques = res.data

                this.setState({ destaques: resultsDestaques })
                const id = resultsDestaques.map((result) => {
                    return (
                        result.publish === 1 &&
                        result.ID
                    )
                })
                this.setState({ id: id })
            })
    }

    componentDidMount = () => {
        this.loadDestaques()
    }


    render() {
        const max = Math.max(...this.state.id);
        return (
            <div>
                <div className='destaques'>Destaques</div>
                <div className='MainDestaques'>
                    {
                        this.state.destaques.map((destaque) => {
                            return (
                                <div>
                                    {
                                        destaque.publish === 1 &&
                                        destaque.ID === max &&
                                        <div className='destaqueCompleto'>
                                            <div className='tituloDestaques'>{destaque.nome}</div>
                                            {destaque.fotoLink1 && <img src={destaque.fotoLink1} alt={destaque.foto_alt1} />}
                                            <div className='textoDestaques'>{ReactHtmlParser(destaque.texto)}</div>
                                        </div>

                                    }
                                </div>
                            )
                        })
                    }
                    {
                        this.state.destaques.map((destaque) => {
                            return (

                                destaque.publish === 1 &&
                                destaque.ID !== max &&
                                <Collapsible
                                    trigger=
                                    {
                                        <div className='dropdownItem'>{destaque.nome}
                                            {<img className='arrow' src={arrowGrey} alt='dropdown Doenças Anais' />}
                                        </div>
                                    }>
                                    <div className='destaqueCompleto'>
                                        {destaque.fotoLink1 && <img className='fotoDestaques' src={destaque.fotoLink1} alt={destaque.foto_alt1} />}
                                        {<div className='textoDestaques'>{ReactHtmlParser(destaque.texto)}</div>}
                                    </div>
                                </Collapsible>
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


