import React from 'react'
import axios from 'axios'
import Footer from './Footer'
import ReactHtmlParser from "react-html-parser";
import './Proctologia.css'


class Proctologia extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            texto: ''
        }
    }
    componentDidMount = () => {
        window.scrollTo(0, 0)
        axios
            .get('/proctologia')
            .then((res) => {
                const results = res.data[0]
                this.setState({ texto: results.texto })
            })
    }

    render() {
        return (
            <div className='MainProctologiaProctologia'>
                <div className='tituloProctologia'>O que é a proctologia?</div>

                <div className='estruturaProctologia'>
                    <div>{ReactHtmlParser(this.state.texto)}</div>
                </div>
                <Footer />
            </div>
        )
    }

}

export default Proctologia