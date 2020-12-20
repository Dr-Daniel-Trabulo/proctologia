import React from 'react'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'rc-datepicker/lib/style.css';
import TextEditor from './TextEditor'
import Alert from 'react-bootstrap/Alert';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const backofficePatologiasForm = (props) => {
    return (

        <div >
            {
                props.patologiaDisplay.length !== 0 &&
                <div>
                    <form className="NoticiaInput-section" onSubmit={event => props.handleSubmit(event)}>
                        <div className='input'>
                            <label className="input-section-label">Nome Patologia</label>
                            <input type='text' name='nomePatologia' value={props.nomePatologia} onChange={(event) => props.handleChange(event)} />
                        </div>
                        <div className='input'>
                            <label className="input-section-label">Exames</label>
                            <TextEditor
                                editorState={props.editorState_examesPatologia}
                                onEditorStateChange={props.onEditorStateChange_examesPatologia}
                            />
                        </div>
                        <div className='input'>
                            <label className="input-section-label">Sintomas</label>
                            <TextEditor
                                editorState={props.editorState_sintomasPatologia}
                                onEditorStateChange={props.onEditorStateChange_sintomasPatologia}
                            />

                        </div>
                        <div className='input'>
                            <label className="input-section-label">Tratamentos</label>
                            <TextEditor
                                editorState={props.editorState_tratamentosPatologia}
                                onEditorStateChange={props.onEditorStateChange_tratamentosPatologia}
                            />
                        </div>
                        <div className='input'>
                            <label className="input-section-label">Link</label>
                            <input type='text' name='linkPatologia' value={props.linkPatologia} placeholder='Expressão sem espaços em branco' onChange={(event) => props.handleChange(event)} />
                        </div>
                        <Alert className="form-alert" show={props.showEmailAlert} variant={props.emailTypeAlert}>
                            <FontAwesomeIcon icon={props.messageIcon} className="message-icon" />
                            {props.emailTypeAlert === 'successDelete' && 'Patologia apagada com Sucesso'}
                            {props.emailTypeAlert === 'dangerDelete' && 'Erro ao apagar Patologia. Tente de novo'}
                            {props.emailTypeAlert === 'success' && 'Patologia alterada com Sucesso'}
                            {props.emailTypeAlert === 'danger' && 'Erro ao editar Patologia. Tente de novo'}

                        </Alert>
                        <div className="NoticiaInput-section-button">
                            <button className="login-button" type='submit' >GUARDAR</button>
                            <button className="login-button" type='submit' onClick={event => props.handleDelete(event)}>Apagar Patologia</button>
                            <button className="login-button" type='checkbox' name='publish' value={props.publish} onClick={props.handleChangeCheckBox} checked>
                                <div>{
                                    props.publish === 0 ?
                                        <div>Publicar?</div>
                                        :
                                        <div>Não Publicar?</div>
                                }
                                </div>
                            </button>
                        </div>
                    </form>


                </div>
            }
            {
                props.pathNew === true &&
                <div>
                    <h3 className='NoticiaInput-title'>Nova Patologia</h3>
                    <div>
                        <form className="NoticiaInput-section">
                            <div className='input'>
                                <label className="input-section-label">Nome Patologia</label>
                                <input type='text' name='nomePatologia' value={props.nomePatologia} onChange={(event) => props.handleChange(event)} />
                            </div>
                            <div className='input'>
                                <label className='input-section-label'>Exames</label>
                                <TextEditor
                                    editorState={props.editorState_examesPatologia}
                                    onEditorStateChange={props.onEditorStateChange_examesPatologia}
                                />
                            </div>
                            <div className='input'>
                                <label input-section-label>Sintomas</label>
                                <TextEditor
                                    editorState={props.editorState_sintomasPatologia}
                                    onEditorStateChange={props.onEditorStateChange_sintomasPatologia}
                                />
                            </div>
                            <div className='input'>
                                <div className='input-section-label'>Tratamentos</div>
                                <TextEditor
                                    editorState={props.editorState_tratamentosPatologia}
                                    onEditorStateChange={props.onEditorStateChange_tratamentosPatologia}
                                />
                            </div>
                            <div className='input'>
                                <label input-section-label>Link</label>
                                <input type='text' name='linkPatologia' value={props.linkPatologia} placeholder='Expressão sem espaços em branco' onChange={(event) => props.handleChange(event)} />
                            </div>
                            <Alert className="form-alert" show={props.showEmailAlert} variant={props.emailTypeAlert}>
                                <FontAwesomeIcon icon={props.messageIcon} className="message-icon" />
                                {props.emailTypeAlert === 'successPost' && 'Patologia criada com Sucesso'}
                                {props.emailTypeAlert === 'dangerPost' && 'Erro ao criar patologia. Tente de novo'}
                            </Alert>
                            <div className="NoticiaInput-section-button">
                                <button className="login-button" type='submit' onClick={event => props.handleNewSintoma(event)}>Criar Nova Patologia</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>

    )

}

export default backofficePatologiasForm