import React from 'react';
import {Button, Container, Row} from "reactstrap";
import './Settings.css';

const Settings = (props) => {
    return (
        <Container>
            <h2 className='text-center'>Settings</h2>
            <div>
                <input type='checkbox' name='menu'/>
                <span className='ml-1 font'><i>Choose your menu</i></span>
            </div>
            <div className='mt-3'>
                <input type='checkbox' name='menu'/>
                <span className='ml-1 font'><i>Today was a nice day</i></span>
            </div>
            <div className='mt-3'>
                <input type='checkbox' name='menu'/>
                <span className='ml-1 font'><i>I am going to home</i></span>
            </div>
            <div className='mt-3'>
                <input type='checkbox' name='menu'/>
                <span className='ml-1 font'><i>Tomorrow will be Friday</i></span>
            </div>
            <Row className='mt-3'>
                <Button color='primary' className='m-auto mt-2 col-md-2 col-5'>Save</Button>
            </Row>
        </Container>
    )
};

export default Settings;
