import React from 'react'
import axios from 'axios'
import Footer from './Footer'
import ReactHtmlParser from "react-html-parser";
import './PatologiasDestaquesSintomas.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'

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
                    {/* {
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
                    } */}
                    <div className='teste'>
                        <Accordion allowMultipleExpanded={false}>
                            {
                                this.state.destaques.map((destaque) => {
                                    return (
                                        destaque.publish === 1 &&
                                        destaque.ID !== max &&
                                        <AccordionItem key={destaque.ID}>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    {<div className='tituloDestaques'>{destaque.nome}</div>}
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                {
                                                    <div className='destaqueCompleto'>
                                                        {destaque.fotoLink1 && <img src={destaque.fotoLink1} alt={destaque.foto_alt1} />}
                                                        {<div className='textoDestaques'>{ReactHtmlParser(destaque.texto)}</div>}
                                                    </div>
                                                }
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    )
                                })
                            }
                        </Accordion>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

export default Destaques


