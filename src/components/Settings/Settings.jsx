import React, {useState} from 'react';
import {Button, Container, Input, Row} from "reactstrap";
import './Settings.css';

const Settings = (props) => {
    const [changeStatus, setChangeStatus] = useState(props.status);

    const changeStatusInSettings = (e) => {
        setChangeStatus(e.target.value);
    };

    const updateProfileAvatar = (e) => {
        if (e.target.files.length) {
            props.updateProfilePhoto(e.target.files[0]);
        }
    };

    return (
        <Container>
            <h2 className='text-center'>Settings</h2>
            <Row>
                <div className='col-6'>
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
                </div>
                <div className='col-6'>
                    <div>
                        <label><b>Change status:</b><Input
                            className='mt-2'
                            value={changeStatus}
                            onChange={changeStatusInSettings}
                        /></label>
                    </div>
                    <div className='mt-4'>
                        <label><b>Change avatar: </b>
                            <input accept='image/jpeg, image/png' type='file' className='mt-2' onChange={updateProfileAvatar}/>
                        </label>
                    </div>
                </div>
            </Row>
            <Row className='mt-5'>
                <Button
                    color='primary'
                    className='m-auto mt-2 col-md-2 col-5'
                    disabled={props.loading}
                    onClick={() => props.updateUserStatus(changeStatus)}
                >Save</Button>
            </Row>
        </Container>
    )
};

export default Settings;
