/*
import React from 'react';
import './ProfilePage.css';
import {Spinner} from "reactstrap";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validate";
import {Textarea} from "../../common/FormControl";

export class ProfilePage extends React.Component {
    state = {
        editModeActive: false,
        status: this.props.profilePage.status
    };

    activeMode = () => {
        this.setState({
            editModeActive: true
        })
    };

    noActiveMode = () => {
        this.setState({
            editModeActive: false
        });

        this.props.updateUserStatus(this.state.status);
    };

    updateStatus = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })

    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.profilePage.status !== this.props.profilePage.status)
        this.setState({
            status: this.props.profilePage.status
        })
    }

    render() {
        const {profile, posts, status} = this.props.profilePage;

        const addProfilePost = (values) => {
            this.props.addPost(values.profileMessage);
        };

        if (!profile || this.props.loading) {
            return <Spinner color='primary' className='m-auto'/>
        }

        return (
            <div className='bg-info d-flex flex-column w-100'>
                <img
                    src='http://saskatoonfood.ca/images/headers/1000x200-StoonDusk.jpg'
                    alt='profile'
                    height={200}
                    className='img-fluid'
                />
                <div className='d-flex mt-2'>
                    <img
                        src={profile.photos.large || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI-ulE8Ev4HVagvCD_iN9urExqcxsM5rzgG7sZ--g1_7FWCNz2&s'}
                        alt='avatar'
                        className='rounded-circle mr-2 align-self-baseline'
                        width={120}
                    />
                    <div>
                        <p><b>Name</b>: {profile.fullName}</p>
                        <p><b>Email</b>: {profile.contacts.instagram || 'think_@about_it:)'}</p>
                        {!this.state.editModeActive &&
                            <p onDoubleClick={this.activeMode}>{status}</p>
                        }
                        {this.state.editModeActive &&
                            <input onChange={this.updateStatus} autoFocus={true} onBlur={this.noActiveMode} value={this.state.status} />
                        }
                    </div>
                </div>
                <p className='ml-3 font-weight-bolder'>My posts</p>
                <ProfileReduxForm onSubmit={addProfilePost}/>
                {posts.map((post) => (
                    <div className='mt-2' key={post.id}>
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_AtFfucscEuUUlO8QJLqDko3nhoUhZ7VkjwVLalD0Ck_A54hX&s'
                            alt='avatar'
                            width={32}
                            height={32}
                            className='rounded-circle mr-1'/>
                        <span>{post.message}</span>
                        <p className='ml-1'><i className='fa fa-thumbs-up'/>{post.count_like}</p>
                    </div>
                ))}
            </div>
        )
    };
}

const maxLength30 = maxLength(30);

const ProfileForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name='profileMessage'
                placeholder='write your post...'
                validate={[required, maxLength30]}
                className='post w-100 bg-transparent'/>
            <button className='float-right btn btn-danger'>Add post</button>
        </form>
    )
};

const ProfileReduxForm = reduxForm({
    form: 'profileMessage'
})(ProfileForm);
*/
