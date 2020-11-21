import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'rc-datepicker/lib/style.css';
import PopUp from '../PopUp'


const backofficeDestaquesForms = (props) => {

    // let editorState_texto = props.editorState_texto
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
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
                <label>Nome</label>
                <input type='text' name='nome' value={props.nome} onChange={event => props.handleChange(event)} />
                <div>Fotografia 1</div>
                <label>Link</label>
                <input type='text' name='fotoLink1' value={props.fotoLink1} onChange={event => props.handleChange(event)} />
                <label>Descrição</label>
                <input type='text' name='foto_alt1' value={props.foto_alt1} onChange={event => props.handleChange(event)} />
                <div>Fotografia 2</div>
                <label>Link</label>
                <input type='text' name='fotoLink2' value={props.fotoLink2} onChange={event => props.handleChange(event)} />
                <label>Descrição</label>
                <input type='text' name='foto_alt2' value={props.foto_alt2} onChange={event => props.handleChange(event)} />
                <div>Fotografia 3</div>
                <label>Link</label>
                <input type='text' name='fotoLink3' value={props.fotoLink3} onChange={event => props.handleChange(event)} />
                <label>Descrição</label>
                <input type='text' name='foto_alt3' value={props.foto_alt3} onChange={event => props.handleChange(event)} />
                <div>Fotografia 4</div>
                <label>Link</label>
                <input type='text' name='fotoLink4' value={props.fotoLink4} onChange={event => props.handleChange(event)} />
                <label>Descrição</label>
                <input type='text' name='foto_alt4' value={props.foto_alt4} onChange={event => props.handleChange(event)} />
                <button type='submit'>GUARDAR</button>
                <button type='submit' onClick={props.handleDelete}>Eliminar Destaque </button>
            </form>
            <PopUp
                flashInput={props.flash}
                typeMessage={props.messageStatus}
            />

        </div>

    )

}

export default backofficeDestaquesForms

