import React from 'react'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'rc-datepicker/lib/style.css';
import PopUp from '../PopUp'
import './backoffice.css'


const BackOfficeDestaquesSintomasForm = (props) => {

    return (

        <div>
            {props.destaquesDisplay.length !== 0 &&
                <div className='main'>
                    <form onSubmit={props.handleSubmit} className="NoticiaInput-section" >
                        <div className='input'>
                            <label className="input-section-label">Texto</label>
                            <Editor
                                editorState={props.editorState_texto}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="NoticiaInput-editor"
                                onEditorStateChange={props.onEditorStateChange_texto}
                                stripPastedStyles={true}
                                required
                                toolbar={{
                                    options: [
                                        'inline',
                                        'blockType',
                                        'fontSize',
                                        'fontFamily',
                                        'list',
                                        'textAlign',
                                        'colorPicker',
                                        'link',
                                        'embedded' /* , 'emoji' */,
                                        'image' /* , 'remove' */,
                                        'history',
                                    ],
                                    textAlign: {
                                        none: 'center',
                                    },
                                    image: {
                                        defaultAligh: 'center',
                                    },
                                    fontFamily: {
                                        options: ['Poppins'],
                                    },
                                    colorPicker: {
                                        colors: ['rgb(0, 73, 130)', 'rgb(26, 163, 219)', 'rgb(97,189,109)', 'rgb(26,188,156)',
                                            'rgb(84,172,210)', 'rgb(44,130,201)', 'rgb(204,204,204)', 'rgb(65,168,95)',
                                            'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(0,168,133)', 'rgb(61,142,185)',
                                            'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
                                            'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)',
                                            'rgb(163,143,132)']
                                    },
                                    fontSize: {
                                        options: ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '28', '30', '32', '40', '52']
                                    }
                                }}
                            />

                        </div>
                        <div className="input">
                            <label className="input-section-label">Nome</label>
                            <input type='text' name='nome' value={props.nome} onChange={event => props.handleChange(event)} />
                        </div>
                        <div className='NoticiaInput-subtitle-foto'>Fotografia 1</div>
                        <div className="input">
                            <label className="input-section-label">Link</label>
                            <input type='text' name='fotoLink1' value={props.fotoLink1} onChange={event => props.handleChange(event)} />
                        </div>
                        <div className="input">
                            <label className="input-section-label">Descrição</label>
                            <input type='text' name='foto_alt1' value={props.foto_alt1} onChange={event => props.handleChange(event)} />
                        </div>
                        <div className='NoticiaInput-subtitle-foto'>Fotografia 2</div>
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
                        </div>
                        <div className="NoticiaInput-section-button">
                            <button className="login-button" type='submit' >GUARDAR</button>
                            <button className="login-button" type='submit' onClick={props.handleDelete}>{`Eliminar ${props.seccao}`} </button>
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
                    <PopUp
                        flashInput={props.flash}
                        typeMessage={props.messageStatus}
                    />
                </div>
            }
            {props.pathNew === true &&
                <div>
                    <h3 className='NoticiaInput-title'>{`Novo ${props.seccao}`}</h3>
                    <div>
                        <form className="NoticiaInput-section" onSubmit={props.handleNewDestaque} >
                            <div className='input'>
                                <label className="input-section-label">Texto</label>
                                <Editor
                                    editorState={props.editorState_texto}
                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="NoticiaInput-editor"
                                    onEditorStateChange={props.onEditorStateChange_texto}
                                    stripPastedStyles={true}
                                    required
                                    toolbar={{
                                        options: [
                                            'inline',
                                            'blockType',
                                            'fontSize',
                                            'fontFamily',
                                            'list',
                                            'textAlign',
                                            'colorPicker',
                                            'link',
                                            'embedded' /* , 'emoji' */,
                                            'image' /* , 'remove' */,
                                            'history',
                                        ],
                                        textAlign: {
                                            none: 'center',
                                        },
                                        image: {
                                            defaultAligh: 'center',
                                        },
                                        fontFamily: {
                                            options: ['Poppins'],
                                        },
                                        colorPicker: {
                                            colors: ['rgb(0, 73, 130)', 'rgb(26, 163, 219)', 'rgb(97,189,109)', 'rgb(26,188,156)',
                                                'rgb(84,172,210)', 'rgb(44,130,201)', 'rgb(204,204,204)', 'rgb(65,168,95)',
                                                'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(0,168,133)', 'rgb(61,142,185)',
                                                'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
                                                'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)',
                                                'rgb(163,143,132)']
                                        },
                                        fontSize: {
                                            options: ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '28', '30', '32', '40', '52']
                                        }
                                    }}
                                />
                            </div>
                            <div className="input">
                                <label className="input-section-label">Nome</label>
                                <input type='text' name='nome' value={props.nome} onChange={event => props.handleChange(event)} />
                            </div>
                            <div className='NoticiaInput-subtitle-foto'>Fotografia 1</div>
                            <div className="input">
                                <label className="input-section-label">Link</label>
                                <input type='text' name='fotoLink1' value={props.fotoLink1} onChange={event => props.handleChange(event)} />
                            </div>
                            <div className='input'>
                                <label className="input-section-label">Descrição</label>
                                <input type='text' na me='foto_alt1' value={props.foto_alt1} onChange={event => props.handleChange(event)} />
                            </div>
                            <div className='NoticiaInput-subtitle-foto'>Fotografia 2</div>
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

                            </div>
                            <div className="NoticiaInput-section-button">
                                <button className="login-button" type='submit'>{`Inserir ${props.seccao}`} </button>
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
                        <PopUp
                            flashInput={props.flash}
                            typeMessage={props.messageStatus}
                        />
                    </div>

                </div>
            }
        </div>
    )

}

export default BackOfficeDestaquesSintomasForm

