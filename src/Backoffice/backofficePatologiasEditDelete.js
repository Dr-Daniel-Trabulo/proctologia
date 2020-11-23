import React from 'react'

const backofficePatologiasDetalheEditDelete = (props) => {
    return (

        <div>
            {props.patologiaDisplay.length !== 0 &&
                <form onSubmit={props.handleSubmit}>
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
                    <button type='submit'>GUARDAR</button>
                    <button type='submit' onClick={props.handleDelete}>Apagar Patologia</button>
                </form>
            }
        </div>)

}

export default backofficePatologiasDetalheEditDelete