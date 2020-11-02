import React from 'react'
import Sintomas from './Sintomas'

class Destaques extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            destaques: []
        }
    }

    loadData = () => {
        let destaques = [
            {
                id: 1, nome: 'nome Destaque 1', texto: 'texto Destaque 1',
                fotos: [
                    { fotoLink: 'foto 1 Destaque 1', alt: 'alt Foto 1 Destaque 1' },
                    { fotoLink: 'foto 2 Destaque 1', alt: 'alt Foto 2 Destaque 1' }
                ]
            },
            {
                id: 2, nome: 'nome Destaque 2', texto: 'texto Destaque 2',
                fotos: [
                    { fotoLink: 'foto 1 Destaque 2', alt: 'alt Foto 1 Destaque 2' },
                    { fotoLink: 'foto 2 Destaque 2', alt: 'alt Foto 2 Destaque 2' }
                ]
            }
        ]
        this.setState({ destaques })
    }

    componentDidMount = () => {
        window.scrollTo(0, 0)
        this.loadData()
    }

    render() {
        return (
            <div>
                {this.state.destaques.map((destaque) => {
                    <div>
                        <div>{destaque.nome}</div>
                        <div>{destaque.texto}</div>
                        {destaque.fotos.map((foto) => {
                            <img src={foto.fotoLink} alt={foto.alt} />
                        })}
                    </div>
                })
                }
            </div>

        )
    }
}

export default Destaques