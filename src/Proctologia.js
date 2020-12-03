import React from 'react'
import axios from 'axios'
import Footer from './Footer'
import ReactHtmlParser from "react-html-parser";
import './Proctologia.css';


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
                this.setState({ texto: results.results })
            })
    }

    render() {
        return (
            <div className='Main'>
                <div>{this.state.texto}</div>
                <Footer />
            </div>
        )
    }

}

export default Proctologia