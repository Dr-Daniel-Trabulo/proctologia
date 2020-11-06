import React from 'react'
import axios from 'axios'
import Footer from './Footer'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            CV_text: '',
            CV_pic: ''
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        axios
            .get('/homepage')
            .then((res) => {
                const results = res.data[0]
                this.setState({ CV_text: results.CV_Text })
                this.setState({ CV_pic: results.CV_Pic })
            })
    }

    render() {
        return (
            <div>
                <div>{this.state.CV_pic}</div>
                <div>{this.state.CV_text}</div>
                <Footer />
            </div>
        )
    }
}

export default HomePage