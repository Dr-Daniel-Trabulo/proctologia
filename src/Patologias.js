import React from 'react'


const Patologias = (props) => {



    let patologias = [
        { id: 1, name: 'Hemorroidas', link: 'hemorroidas', sintomas: 'sintomas1', exames: 'Exames1', tratamentos: 'tratamentos1' },
        { id: 2, name: 'Eczema Anal', link: 'eczemaanal', sintomas: 'sintomas2', exames: 'Exames2', tratamentos: 'tratamentos2' }
    ]

    //let patologias = props.patologias
    let patologiaLink = props.match.params.patologia



    return (

        <div>
            {
                patologias.map((patologia) => {
                    return (
                        patologia.link === patologiaLink &&
                        <div>
                            <div>{patologia.name}</div>
                            <div>{patologia.sintomas}</div>
                            <div>{patologia.exames}</div>
                            <div>{patologia.tratamentos}</div>
                        </div>


                    )


                })
            }


        </div>



    )




}


export default Patologias;