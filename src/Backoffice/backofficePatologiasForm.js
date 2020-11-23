import React from 'react'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'rc-datepicker/lib/style.css';
import PopUp from '../PopUp'

const backofficePatologiasForm = (props) => {
    return (

        <div>
            {
                props.patologiaDisplay.length !== 0 &&
                <div>
                    <form onSubmit={props.handleSubmit}>
                        <label>Nome Patologia</label>
                        <input type='text' name='nomePatologia' value={props.nomePatologia} onChange={(event) => props.handleChange(event)} />
                        <div>Exames</div>
                        <Editor
                            editorState={props.editorState_examesPatologia}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="NoticiaInput-editor"
                            onEditorStateChange={props.onEditorStateChange_examesPatologia}
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
                        <div>Sintomas</div>
                        <Editor
                            editorState={props.editorState_sintomasPatologia}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="NoticiaInput-editor"
                            onEditorStateChange={props.onEditorStateChange_sintomasPatologia}
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
                        <div>Tratamentos</div>
                        <Editor
                            editorState={props.editorState_tratamentosPatologia}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="NoticiaInput-editor"
                            onEditorStateChange={props.onEditorStateChange_tratamentosPatologia}
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
                        <label>Link</label>
                        <input type='text' name='linkPatologia' value={props.linkPatologia} placeholder='Expressão sem espaços em branco' onChange={(event) => props.handleChange(event)} />
                        <button type='submit'>GUARDAR</button>
                        <button type='submit' onClick={props.handleDelete}>Apagar Patologia</button>
                    </form>
                    <PopUp
                        flashInput={props.flash}
                        typeMessage={props.messageStatus}
                    />
                </div>
            }
            {
                props.pathNew === true &&
                <div>
                    <h3>Nova Patologia</h3>
                    <form onSubmit={props.handleNewSintoma}>
                        <label>Nome Patologia</label>
                        <input type='text' name='nomePatologia' value={props.nomePatologia} onChange={(event) => props.handleChange(event)} />
                        <div>Exames</div>
                        <Editor
                            editorState={props.editorState_examesPatologia}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="NoticiaInput-editor"
                            onEditorStateChange={props.onEditorStateChange_examesPatologia}
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
                        <div>Sintomas</div>
                        <Editor
                            editorState={props.editorState_sintomasPatologia}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="NoticiaInput-editor"
                            onEditorStateChange={props.onEditorStateChange_sintomasPatologia}
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
                        <div>Tratamentos</div>
                        <Editor
                            editorState={props.editorState_tratamentosPatologia}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="NoticiaInput-editor"
                            onEditorStateChange={props.onEditorStateChange_tratamentosPatologia}
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
                        <label>Link</label>
                        <input type='text' name='linkPatologia' value={props.linkPatologia} placeholder='Expressão sem espaços em branco' onChange={(event) => props.handleChange(event)} />
                        <button type='submit'>Criar Nova Patologia</button>
                    </form>
                </div>
            }
        </div>

    )

}

export default backofficePatologiasForm