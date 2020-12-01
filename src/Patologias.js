import React from 'react'
import axios from 'axios'
import Footer from './Footer'
import './PatologiasDestaquesSintomas.css'
import ReactHtmlParser from "react-html-parser";



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
                    this.state.patologias.map((patologia) => {
                        return (
                            <div>
                                {
                                    patologia.linkPatologia === patologiaLink &&
                                    <div className='estrutura'>
                                        <div className='titulo'>{patologia.nomePatologia}</div>
                                        <div>{ReactHtmlParser(patologia.sintomasPatologia)}</div>
                                        <div>{ReactHtmlParser(patologia.examesPatologia)}</div>
                                        <div>{ReactHtmlParser(patologia.tratamentosPatologia)}</div>
                                    </div>
                                }
                            </div>
                        )
                    })
                }
                <Footer />
            </div>
        )
    }
}

export default Patologias;