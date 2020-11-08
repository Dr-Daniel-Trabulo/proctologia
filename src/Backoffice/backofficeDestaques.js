import React from 'react'
import axios from 'axios'

class backofficeDestaques extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            destaques: []
        }
    }
    componentDidMount = () => {
        axios
            .get('/destaques')
            .then((res) => {
                const results = res.data
                console.log(results)
                this.setState({ destaques: results })
            })
    }

}

export default backofficeDestaques

