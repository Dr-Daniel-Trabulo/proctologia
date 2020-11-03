import React from 'react'
import axios from 'axios'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            CV_text: '',
            CV_pic: ''
        }
    }

    componentDidMount = () => {
        window.scrollTo(0, 0)

        axios.get('/homepage')
            .then((res) => {
                let results = res.data[0]
                console.log('ola')
                //console.log(`wkdjwjd${results}`)
                this.setState({ CV_text: results.CV_text })
                this.setState({ CV_pic: results.CV_pic })

            })
        // let CV_pic = 'CV pic'
        // let CV_text = 'CV text'
        //this.setState({ CV_text, CV_pic })
    }

    render() {
        return (
            <div>
                <div>Ola</div>
                <div>{this.state.CV_pic}</div>
                <div>{this.state.CV_text}</div>
            </div>
        )
    }
}

export default HomePage