import React from 'react'
import axios from 'axios'
import Footer from './Footer'
import ReactHtmlParser from "react-html-parser";
// import { UncontrolledCollapse, Collapse, Button, CardBody, Card } from 'reactstrap';
import './PatologiasDestaquesSintomas.css'
// import Accordion from 'react-bootstrap/Accordion'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

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
        console.log(max)
        return (
            <div>
                <div className='MainDestaques'>
                    {this.state.destaques.map((destaque) => {
                        return (
                            <div>
                                {
                                    destaque.publish === 1 &&
                                        destaque.ID === max ?
                                        <div className='destaqueCompleto'>
                                            <div>{destaque.nome}</div>
                                            {destaque.fotoLink1 && <img src={destaque.fotoLink1} alt={destaque.foto_alt1} />}
                                            <div>{ReactHtmlParser(destaque.texto)}</div>
                                        </div>
                                        :
                                        <Accordion>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        {destaque.nome}
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div className='destaqueCompleto'>
                                                        {destaque.fotoLink1 && <img src={destaque.fotoLink1} alt={destaque.foto_alt1} />}
                                                        <div>{ReactHtmlParser(destaque.texto)}</div>
                                                    </div>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        </Accordion>
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