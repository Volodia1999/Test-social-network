import React from 'react';
import {Button, Container, Row, Spinner} from "reactstrap";
import {Field, reduxForm} from "redux-form";
import {LoginInput} from "../../common/FormControl";
import {maxLength, minLength, required} from "../../utils/validate";
import {connect} from "react-redux";
import {login} from "../../redux/Auth/actions";
import {Redirect} from "react-router-dom";

const maxLength20 = maxLength(20);
const minLength5 = minLength(5);

const LoginForm = ({handleSubmit, error, isPendingLogin, captchaUrl}) => {
    return (
        <form className='m-auto w-50' onSubmit={handleSubmit}>
            <Row className='mt-2'>
                <Field className='m-auto col-md-6 col-12'
                       name={'email'}
                       placeholder='E-mail'
                       type='e-mail'
                       validate={[required, maxLength20]}
                       component={LoginInput}/>
            </Row>
            <Row className='mt-3'>
                <Field className='m-auto col-md-6 col-12'
                       type={'password'}
                       name='password'
                       placeholder='Password'
                       validate={[required, maxLength20, minLength5]}
                       component={LoginInput}/>
            </Row>
            {captchaUrl && <div>
                <img src={captchaUrl} alt='' />
                <Field className='m-auto col-md-6 col-12'
                       name='setCaptcha'
                       placeholder='Enter captcha...'
                       validate={[required]}
                       component={LoginInput}/>
            </div> }
            {error &&
            <div>
                <h6 className='mt-1 text-danger'>{error}</h6>
            </div>
            }
            <div className='mt-3 d-flex justify-content-center'>
                <Field className='mr-2 mt-2' type={'checkbox'} name='rememberMe' component='input'/>
                <h6 className='mt-1'>Remember me</h6>
            </div>
            <Row className='mt-2'>
                <Button className='m-auto col-md-6 col-12' color='info'>
                    {isPendingLogin ? <Spinner color='white' size='sm'/> : 'Log In'}
                </Button>
            </Row>
            <a
                href='https://social-network.samuraijs.com/'
                rel='noopener noreferrer' target='_blank'>
                <i>Register now!</i>
            </a>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = ({login, isAuth, isPendingLogin, ...props}) => {
    const onSubmit = (values) => {
        login(values.email, values.password, values.rememberMe, values.setCaptcha);
    };

    if (isAuth) {
        return <Redirect to='/profile'/>
    }
    return (
        <Container>
            <Row className='text-center'>
                <h3 className='col-12'><b>Login</b></h3>
                <LoginReduxForm captchaUrl={props.captchaUrl} isPendingLogin={isPendingLogin} onSubmit={onSubmit}/>
            </Row>
        </Container>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isPendingLogin: state.auth.isPendingLogin,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login})(Login);
