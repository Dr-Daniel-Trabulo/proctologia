import React from 'react'

class Sintomas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sintomas: []
        }
    }

    loadData = () => {
        let sintomas = [
            {
                id: 1, nome: 'nomeSintoma1', descricao: 'descricaoSintoma1',
                fotos: [
                    { fotoLink: 'foto1Sintoma1', alt: 'altFoto1Sintoma1' },
                    { fotoLink: 'foto2Sintoma1', alt: 'altFoto2Sintoma1' }
                ]
            },
            {
                id: 2, nome: 'nomeSintoma2', descricao: 'descricaoSintoma2',
                fotos: [
                    { fotoLink: 'foto1Sintoma2', alt: 'altFoto1Sintoma2' },
                    { fotoLink: 'foto2Sintoma2', alt: 'altFoto2Sintoma2' }
                ]
            }
        ]
        this.setState({ sintomas: sintomas })
    }

    componentDidMount = () => {
        window.scrollTo(0, 0)
        this.loadData()
    }


    render() {
        return (
            <div>
                <h1>Sintomas de doença proctológica</h1>
                {this.state.sintomas.map((sintoma) => {
                    return (
                        <div>
                            <div>{sintoma.nome}</div>
                            <div>{sintoma.descricao}</div>
                            {sintoma.fotos.map((foto) => <img src={foto.fotoLink} alt={foto.alt} />
                            )}
                        </div>)
                })}
            </div>
        )
    }
}

export default Sintomas