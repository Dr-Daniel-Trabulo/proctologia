import React from 'react'
import axios from 'axios'

class backofficeHomepage extends React.Component {
    constructor(props) {
        super(props)
        this.class = {
            CV_text: '',
            CV_pic: ''
        }
    }

    componentDidMount = () => {
        axios
            .get('/homepage')
            .then((res) => {
                const response = res.data
                console.log(response)
            })

    }

    render() {
        return (
            <form>

            </form>
        )
    }
}

export default backofficeHomepage

