import React from 'react'
import axios from 'axios'
import ReactHtmlParser from "react-html-parser";
import Footer from './Footer'
import './Homepage.css'


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
                <span className='Homepage'>
                    {/* <link rel="manifest" href='../public/manifest.json'></link> */}
                    <div className='CVPic'>
                        <img src={this.state.CV_pic} alt='Dr Daniel Trabulo-doença anal' />
                    </div>
                    <div className='texto'>
                        <div className='tituloHomepage'>O Dr. Daniel Trabulo</div>
                        <div className='CVText'>{ReactHtmlParser(this.state.CV_text)}</div>
                    </div>
                </span>
                <Footer />
            </div>
        )
    }
}

export default HomePage