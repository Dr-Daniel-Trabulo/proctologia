import React from 'react'
import axios from 'axios'
import Footer from './Footer'
import ReactHtmlParser from "react-html-parser";


class Proctologia extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            texto: {}
        }
    }
    componentDidMount = () => {
        window.scrollTo(0, 0)
        axios
            .get('/proctologia')
            .then((res) => {
                const results = res.data
                console.log(results)
                this.setState({ texto: results })
            })
    }

    render() {
        return (
            <div>
                <div>{ReactHtmlParser(this.state.texto)}</div>
                <Footer />
            </div>
        )
    }

}

export default Proctologia