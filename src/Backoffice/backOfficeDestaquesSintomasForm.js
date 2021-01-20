import TextEditor from './TextEditor'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'rc-datepicker/lib/style.css';
import Alert from 'react-bootstrap/Alert';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './backoffice.css'


const BackOfficeDestaquesSintomasForm = (props) => {

    return (

        <div>
            {props.destaquesDisplay.length !== 0 &&
                <div className='main'>
                    <form onSubmit={props.handleSubmit} className="NoticiaInput-section" >
                        <div className='input'>
                            <div className="input">
                                <label className="input-section-label">Nome</label>
                                <input type='text' name='nome' value={props.nome} onChange={event => props.handleChange(event)} />
                            </div>
                        </div>
                        <label className="input-section-label">Texto</label>
                        <TextEditor
                            editorState={props.editorState_texto}
                            onEditorStateChange={props.onEditorStateChange_texto}
                        />
                        <div className='NoticiaInput-subtitle-foto'>Fotografia</div>
                        <div className="input">
                            <label className="input-section-label">Link</label>
                            <input type='text' name='fotoLink1' value={props.fotoLink1} onChange={event => props.handleChange(event)} />
                        </div>
                        <div className="input">
                            <label className="input-section-label">Descrição</label>
                            <input type='text' name='foto_alt1' value={props.foto_alt1} onChange={event => props.handleChange(event)} />
                        </div>

                        {/* <div className='NoticiaInput-subtitle-foto'>Fotografia 2</div>
                        <div className="input">
                            <label className="input-section-label">Link</label>
                            <input type='text' name='fotoLink2' value={props.fotoLink2} onChange={event => props.handleChange(event)} />
                        </div>
                        <div className="input">
                            <label className="input-section-label">Descrição</label>
                            <input type='text' name='foto_alt2' value={props.foto_alt2} onChange={event => props.handleChange(event)} />
                        </div>
                        <div className='NoticiaInput-subtitle-foto'>Fotografia 3</div>
                        <div className="input">
                            <label className="input-section-label">Link</label>
                            <input type='text' name='fotoLink3' value={props.fotoLink3} onChange={event => props.handleChange(event)} />
                        </div>
                        <div className="input">
                            <label className="input-section-label">Descrição</label>
                            <input type='text' name='foto_alt3' value={props.foto_alt3} onChange={event => props.handleChange(event)} />
                        </div>
                        <div className='NoticiaInput-subtitle-foto'>Fotografia 4</div>
                        <div className="input">
                            <label className="input-section-label">Link</label>
                            <input type='text' name='fotoLink4' value={props.fotoLink4} onChange={event => props.handleChange(event)} />
                        </div>
                        <div className="input">
                            <label className="input-section-label">Descrição</label>
                            <input type='text' name='foto_alt4' value={props.foto_alt4} onChange={event => props.handleChange(event)} />
                        </div> */}
                        <div className="alert-section">
                            <Alert className="form-alert" show={props.showEmailAlert} variant={props.emailTypeAlert}>
                                <FontAwesomeIcon icon={props.messageIcon} className="message-icon" />
                                {props.emailTypeAlert === 'success' && 'Alterado com sucesso'}
                                {props.emailTypeAlert === 'danger' && 'Erro ao alterar. Tente de novo'}
                                {props.emailTypeAlert === 'successDelete' && 'Apagado com Sucesso'}
                                {props.emailTypeAlert === 'dangerDelete' && 'Erro ao apagar Tente de novo'}
                            </Alert>
                        </div>
                        <div className="NoticiaInput-section-button">
                            <button className="login-button" type='submit' >GUARDAR</button>
                            <button className="login-button" type='submit' onClick={event=>props.handleDelete(event)}>{`Eliminar ${props.seccao}`} </button>
                            <button className="login-button" type='checkbox' name='publish' value={props.publish} onClick={props.handleChangeCheckBox}>
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
            {props.pathNew === true &&
                <div>
                    <h3 className='NoticiaInput-title'>{`Novo ${props.seccao}`}</h3>
                    <div>
                        <form className="NoticiaInput-section" onSubmit={event=>props.handleNewDestaque(event)} >
                            <div className="input">
                                <label className="input-section-label">Nome</label>
                                <input type='text' name='nome' value={props.nome} onChange={event => props.handleChange(event)} />
                            </div>
                            <div className='input'>
                                <label className="input-section-label">Texto</label>
                                <TextEditor
                                    editorState={props.editorState_texto}
                                    onEditorStateChange={props.onEditorStateChange_texto}
                                />
                            </div>
                            <div className='NoticiaInput-subtitle-foto'>Fotografia</div>
                            <div className="input">
                                <label className="input-section-label">Link</label>
                                <input type='text' name='fotoLink1' value={props.fotoLink1} onChange={event => props.handleChange(event)} />
                            </div>
                            <div className='input'>
                                <label className="input-section-label">Descrição</label>
                                <input type='text' name='foto_alt1' value={props.foto_alt1} onChange={event => props.handleChange(event)} />
                            </div>
                            {/* <div className='NoticiaInput-subtitle-foto'>Fotografia 2</div>
                            <div className='input'>
                                <label className="input-section-label">Link</label>
                                <input type='text' name='fotoLink2' value={props.fotoLink2} onChange={event => props.handleChange(event)} />
                            </div>
                            <div className='input'>
                                <label className='input-section-label'>Descrição</label>
                                <input type='text' name='foto_alt2' value={props.foto_alt2} onChange={event => props.handleChange(event)} />
                            </div>
                            <div className='NoticiaInput-subtitle-foto'>Fotografia 3</div>
                            <div className='input'>
                                <label className='input-section-label'>Link</label>
                                <input type='text' name='fotoLink3' value={props.fotoLink3} onChange={event => props.handleChange(event)} />
                            </div>
                            <div className='input'>
                                <label className='input-section-label'>Descrição</label>
                                <input type='text' name='foto_alt3' value={props.foto_alt3} onChange={event => props.handleChange(event)} />
                            </div>
                            <div className='NoticiaInput-subtitle-foto'>Fotografia 4</div>
                            <div className='input'>
                                <label className='input-section-label'>Link</label>
                                <input type='text' name='fotoLink4' value={props.fotoLink4} onChange={event => props.handleChange(event)} />
                            </div>
                            <div className='input'>
                                <label className='input-section-label'>Descrição</label>
                                <input type='text' name='foto_alt4' value={props.foto_alt4} onChange={event => props.handleChange(event)} />
                            </div> */}
                            <div className="alert-section">
                                <Alert className="form-alert" show={props.showEmailAlert} variant={props.emailTypeAlert}>
                                    <FontAwesomeIcon icon={props.messageIcon} className="message-icon" />
                                    {props.emailTypeAlert === 'successPost' && 'Criado com Sucesso'}
                                    {props.emailTypeAlert === 'dangerPost' && 'Erro ao criar. Tente de novo'}
                                </Alert>
                            </div>
                            <div className="NoticiaInput-section-button">
                                <button className="login-button" type='submit'>{`Inserir ${props.seccao}`} </button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default BackOfficeDestaquesSintomasForm


