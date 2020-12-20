import React from 'react'
import axios from 'axios'
import Footer from './Footer'
import ReactHtmlParser from "react-html-parser";
import './PatologiasDestaquesSintomas.css'


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
                console.log(res.data)
                console.log(res.data[0])
                console.log(results)
                this.setState({ texto: results.texto })
            })
    }

    render() {
        return (
            <div className='Main'>
                <div className='estrutura'>
                    <div className='titulo'>O que é a proctologia?</div>
                    <div>{ReactHtmlParser(this.state.texto)}</div>
                </div>
                <Footer />
            </div>
        )
    }

}

export default Proctologia