import React from 'react'

const backofficePatologiasNew = (props) => {
    return (

        <div>

            <form onSubmit={props.handleNewSintoma}>
                <label>Nome Patologia</label>
                <input type='text' name='nomePatologia' value={props.nomePatologia} onChange={(event) => props.handleChange(event)} />
                <label>Sintomas</label>
                <input type='text' name='sintomasPatologia' value={props.sintomasPatologia} onChange={(event) => props.handleChange(event)} />
                <label>Exames</label>
                <input type='text' name='examesPatologia' value={props.examesPatologia} onChange={(event) => props.handleChange(event)} />
                <label>Tratamentos</label>
                <input type='text' name='tratamentosPatologia' value={props.tratamentosPatologia} onChange={(event) => props.handleChange(event)} />
                <label>Tratamentos</label>
                <input type='text' name='linkPatologia' value={props.linkPatologia} placeholder='Expressão sem espaços em branco' onChange={(event) => props.handleChange(event)} />
                <button type='submit'>Criar Nova Patologia</button>
            </form>

        </div>)

}

export default backofficePatologiasNew