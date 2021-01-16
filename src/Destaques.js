import React from 'react'
import axios from 'axios'
import Footer from './Footer'
import ReactHtmlParser from "react-html-parser";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import './PatologiasDestaquesSintomas.css'

class Destaques extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            destaques: [], id: []
        }
    }

    componentDidMount() {
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


    render() {
        const max = Math.max(...this.state.id);
        console.log(max)
        return (
            <div>
                <div className='MainDestaques'>
                    {this.state.destaques.map((destaque) => {
                        return (
                            <div className='estrutura'>
                                {
                                    destaque.publish === 1 &&
                                        destaque.ID === max ?
                                        <div className='destaqueCompleto'>
                                            <div>{destaque.nome}</div>
                                            {destaque.fotoLink1 && <img src={destaque.fotoLink1} alt={destaque.foto_alt1} />}
                                            <div>{ReactHtmlParser(destaque.texto)}</div>
                                        </div>
                                        :
                                        destaque.publish === 1 &&
                                        <div className='dropdown'>
                                            <Button className='toggle' color="none" id="toggler" style={{ marginBottom: '1rem' }}>
                                                <div>{destaque.nome}</div>
                                            </Button>
                                            <UncontrolledCollapse toggler="#toggler">
                                                <Card>
                                                    <CardBody>
                                                        <div className='destaqueCompleto'>
                                                            {destaque.fotoLink1 && <img src={destaque.fotoLink1} alt={destaque.foto_alt1} />}
                                                            <div>{ReactHtmlParser(destaque.texto)}</div>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </UncontrolledCollapse>
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