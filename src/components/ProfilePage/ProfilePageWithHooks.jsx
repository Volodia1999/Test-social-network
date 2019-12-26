import React, {useState, useEffect} from 'react';
import './ProfilePage.css';
import {Spinner} from "reactstrap";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validate";
import {Textarea} from "../../common/FormControl";
import MyPost from "../MyPost/MyPost";

export const ProfilePageWithHooks = (props) => {
    const [editMode, editActiveMode] = useState(false);
    const [currentStatus, setNewStatus] = useState(props.profilePage.status);
    const {profile, posts, status} = props.profilePage;

    useEffect(() => {
        setNewStatus(status);
    }, [status]);


    const activeMode = () => {
        editActiveMode(true);
    };

    const noActiveMode = () => {
        editActiveMode(false);
        props.updateUserStatus(currentStatus);
    };

    const pressEnter = (target) => {
        if (target.charCode === 13) {
            noActiveMode();
        }
    };

    const updateStatus = (e) => {
        setNewStatus(e.currentTarget.value)
    };

    const updateProfileAvatar = (e) => {
        if (e.target.files.length) {
            props.updateProfilePhoto(e.target.files[0]);
        }
    };

    const addProfilePost = (values) => {
        props.addPost(values.profileMessage);
    };

    if (!profile || props.loading) {
        return <Spinner color='primary' className='m-auto'/>
    }

    const cursorOnAvatar = (props.isOwner && 'cursor-pointer');

    return (
        <div className='bg-info d-flex flex-column w-100 mt-1 dialog'>
            <div className='d-flex mt-2'>
                <div>
                    <label>{props.isOwner && <input
                        accept='image/jpeg, image/png'
                        type='file'
                        autoComplete='off'
                        onChange={updateProfileAvatar}
                        style={{display: 'none'}}/>}
                        <img
                            src={profile.photos.large || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfm4q4PH4tj38ETy9w66xSAhhclujI9c4MpJxtFyOD9h9vLG2&s'}
                            alt='avatar'
                            className={`rounded-circle align-self-baseline ${cursorOnAvatar}`}
                            width={120}
                        />
                    </label>
                </div>
                <div className='ml-2'>
                    <p><b>Name</b>: {profile.fullName}</p>
                    <p><b>About Me</b>: {profile.aboutMe || 'think_@about_it:)'}</p>
                    {!editMode &&
                    <p onDoubleClick={props.isOwner && activeMode}>
                        <b>Status</b>: <span className='cursor-pointer'>{status ? status : '-----'}</span>
                        <span><i>{props.isOwner && ' (double click for change)'}</i></span>
                    </p>
                    }
                    {editMode &&
                    <input
                        onBlur={noActiveMode}
                        onChange={updateStatus}
                        value={currentStatus}
                        onKeyPress={pressEnter}
                        autoFocus={true}/>
                    }
                    {props.isOwner && <div>
                        <button className='bg-transparent border-0 font-weight-bold'>Edit Profile</button>
                    </div>}
                </div>
            </div>
            <p className='ml-3 font-weight-bolder'>My posts</p>
            <ProfileReduxForm onSubmit={addProfilePost}/>
            {posts.map((post) => <MyPost post={post} key={post.id}/>)}
        </div>
    )
};

const maxLength50 = maxLength(50);

const ProfileForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name='profileMessage'
                placeholder='write your post...'
                validate={[required, maxLength50]}
                className='post w-100 bg-transparent'/>
            <button className='float-right mr-1 btn btn-danger btn-sm'>Add post</button>
        </form>
    )
};

const ProfileReduxForm = reduxForm({
    form: 'profileMessage'
})(ProfileForm);
