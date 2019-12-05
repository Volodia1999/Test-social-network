import React from 'react';
import './FormControl.css';
import {Input} from "reactstrap";

export const Textarea = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error;
    return (
        <div>
            <div className={showError && 'error'}>
                <textarea {...input} {...props}/>
            </div>
            {showError && <span className='ml-2 text-danger'>{meta.error}</span>}
        </div>
    )
};

export const LoginInput = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error;
    return (
        <div className='m-auto w-100'>
            <div className={showError ? 'error' : ''}>
                <Input {...input} {...props}/>
                <div className='mt-1'>
                    {showError && <span className='ml-2 text-danger'>{meta.error}</span>}
                </div>
            </div>
        </div>
    )
};