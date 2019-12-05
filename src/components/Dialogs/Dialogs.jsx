import React from 'react';
import './Dialogs.css';
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

export const Dialogs = (props) => {

    const addNewMessage = (values) => {
        props.addMessageDialog(values.newBodyMessage);
    };

    return (
        <div className='bg-info w-100'>
            <p className='font-weight-bold text-center'>Dialogs</p>
            <div className='d-flex'>
                <div className='col-4'>
                {props.dialogsPage.dialogs.map((name) => (
                    <div key={name.id}>
                        <NavLink to={name.url} className='ml-2 color_name_author text-decoration-none'
                                 activeClassName='active_name'>{name.name_author}</NavLink>
                    </div>
                ))}
                </div>
                <div className='mt-1'>
                {props.dialogsPage.messages.map((message) => (
                    <div key={message.id}>
                        <p>{message.message}</p>
                    </div>
                ))}
                </div>
            </div>
            <DialogReduxForm onSubmit={addNewMessage}/>
        </div>
    )
};

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className='d-flex justify-content-center flex-wrap mt-4 mb-1'>
                <Field
                    component='textarea'
                    name='newBodyMessage'
                    placeholder='Write your message...'
                    className='bg-transparent post'/>
            <button className='ml-2 btn btn-danger align-self-end '>
                Send message
            </button>
        </form>
    )
};

const DialogReduxForm = reduxForm({
    form: 'newBodyMessage'
})(DialogForm);