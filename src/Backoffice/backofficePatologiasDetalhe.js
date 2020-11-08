import React from 'react'

const backofficePatologiasDetalhe = (props) => {

    return (
        <div>
            <form>
                <label>Nome Patologia</label>
                <input type='text' name='nome' value={props.nomePatologia} onChange={(event) => props.handleChange(event)} />
                <label>Sintomas</label>
                <input type='text' name='sintomas' value={props.sintomasPatologia} onChange={(event) => props.handleChange(event)} />
                <label>Exames</label>
                <input type='text' name='exames' value={props.examesPatologia} onChange={(event) => props.handleChange(event)} />
                <label>Tratamentos</label>
                <input type='text' name='tratamentos' value={props.tratamentosPatologia} onChange={(event) => props.handleChange(event)} />
                <button>GUARDAR</button>
            </form>
        </div>)

}

export default backofficePatologiasDetalhe