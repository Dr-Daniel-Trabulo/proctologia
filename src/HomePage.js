import React from 'react'

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
        let CV_pic = 'CV pic'
        let CV_text = 'CV text'
        this.setState({ CV_text, CV_pic })
    }

    render() {
        return (
            <div>
                <div>{this.state.CV_pic}</div>
                <div>{this.state.CV_text}</div>
            </div>
        )
    }
}

export default HomePage