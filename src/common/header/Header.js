import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { FormHelperText } from '@material-ui/core';
import BookShow from '../../screens/bookshow/BookShow';
import ReactDOM from 'react-dom';

const TabContainer = function (props) {
    return (
        <Typography component='div' style={{ padding: 0, textAlign: 'center' }}>
            {props.children}
        </Typography>

    );
}
TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}
class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            usernameRequired: 'dispNone',
            username: '',
            passwordRequired: 'dispNone',
            password: '',
            firstnameRequired: 'dispNone',
            firstname: '',
            lastnameRequired: 'dispNone',
            lastname: '',
            emailRequired: 'dispNone',
            email: '',
            passRequired: 'dispNone',
            password1: '',
            numberRequired: 'dispNone',
            number: ''



        }
    }

    openModalHandler = () => {

        this.setState({ modalIsOpen: true });
        //this.onModelOpen();


    }
    onModelOpen = () => {
        console.log(this.state.modalIsOpen)
        if (this.state.modalIsOpen) {
            document.getElementsByClassName('ReactModal__Content')[0].removeAttribute('style');
        }
    }

    closeModalHandler = () => {
        this.setState({ value: 0 })
        this.setState({ usernameRequired: 'dispNone' })
        this.setState({ usernameRequired: 'dispNone' })
        this.setState({ passwordRequired: 'dispNone' })
        this.setState({ firstnameRequired: 'dispNone' })
        this.setState({ lastnameRequired: 'dispNone' })
        this.setState({ emailRequired: 'dispNone' })
        this.setState({ passRequired: 'dispNone' })
        this.setState({ numberRequired: 'dispNone' })
        this.setState({ modalIsOpen: false })
    }
    tabChangeHandler = (event, value) => {
        this.setState({ value })
    }
    onClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: 'dispBlock' }) : this.setState({ usernameRequired: 'dispNone' });
        this.state.password === "" ? this.setState({ passwordRequired: 'dispBlock' }) : this.setState({ passwordRequired: 'dispNone' });
    }
    onRegisterClickHandler = () => {
        this.state.firstname === "" ? this.setState({ firstnameRequired: 'dispBlock' }) : this.setState({ firstnameRequired: 'dispNone' });
        this.state.lastname === "" ? this.setState({ lastnameRequired: 'dispBlock' }) : this.setState({ lastnameRequired: 'dispNone' });
        this.state.email === "" ? this.setState({ emailRequired: 'dispBlock' }) : this.setState({ emailRequired: 'dispNone' });
        this.state.password1 === "" ? this.setState({ passRequired: 'dispBlock' }) : this.setState({ passRequired: 'dispNone' });
        this.state.number === "" ? this.setState({ numberRequired: 'dispBlock' }) : this.setState({ numberRequired: 'dispNone' });
    }
    onLoginChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }
    onPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }
    onFirstNameChangeHandler = (e) => {
        this.setState({ firstname: e.target.value });
    }
    onLastNameChangeHandler = (e) => {
        this.setState({ lastname: e.target.value });
    }
    onEmailChangeHandler = (e) => {
        this.setState({ email: e.target.value });
    }
    onPassChangeHandler = (e) => {
        this.setState({ password1: e.target.value });
    }
    onNumberChangeHandler = (e) => {
        this.setState({ number: e.target.value });
    }
    bookShowHandler = () => {
        ReactDOM.render(
            <BookShow />,
            document.getElementById('root')
        )
    }


    render() {


        return (

            <div className="container-outer1">
                <img src={logo} className="app-logo" alt="logo" />
                <div>
                <Button id="btn-login1" variant="contained" onClick={this.openModalHandler} onMouseLeave={this.onModelOpen}>Login</Button>
                </div>
                {this.props.showBookShowButton === "true"?<div className = "book-show-button-conatiner1">
                
                    <Button id = "book-show" variant = 'contained' color = 'primary' onClick = {this.bookShowHandler}>BOOK SHOW</Button>
                    </div>: ""} 
                <div style={{ display: 'table' ,marginBottom : '0'}}>
                    <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeModalHandler}>
                        <Tabs value={this.state.value} onChange={this.tabChangeHandler} style={{ marginBottom: '20px' }}>
                            <Tab label="Login">
                            </Tab>
                            <Tab label="Register" />
                        </Tabs>
                        {this.state.value === 0 &&
                            <TabContainer>
                                <FormControl required>
                                    <InputLabel htmlFor='my-input'>Username:</InputLabel>
                                    <Input id="my-input" type='text' username={this.state.username} onChange={this.onLoginChangeHandler} />
                                    <FormHelperText className={this.state.usernameRequired}><span className='red'>required </span></FormHelperText>
                                </FormControl>
                                <br /><br />
                                <FormControl required>
                                    <InputLabel htmlFor='my-input-pass'>Password:</InputLabel>
                                    <Input id='my-input-pass' type='password' password={this.state.password} onChange={this.onPasswordChangeHandler} />
                                    <FormHelperText className={this.state.passwordRequired}><span className='red'>required </span></FormHelperText>
                                </FormControl>
                                <br /> <br />
                                <Button variant="contained" color='primary' onClick={this.onClickHandler}>LOGIN</Button>
                            </TabContainer>
                        }
                        {this.state.value === 1 &&
                            <TabContainer>
                                <FormControl required>
                                    <InputLabel htmlFor='first-name'>FirstName:</InputLabel>
                                    <Input id="first-name" type='text' firstname={this.state.firstname} onChange={this.onFirstNameChangeHandler} />
                                    <FormHelperText className={this.state.firstnameRequired}><span className='red'>required </span></FormHelperText>
                                </FormControl>
                                <br /><br />
                                <FormControl required>
                                    <InputLabel htmlFor='lastname'>LastName:</InputLabel>
                                    <Input id='lastname' type='text' lastname={this.state.lastname} onChange={this.onLastNameChangeHandler} />
                                    <FormHelperText className={this.state.lastnameRequired}><span className='red'>required </span></FormHelperText>
                                </FormControl>
                                <br /> <br />
                                <FormControl required>
                                    <InputLabel htmlFor='email'>Email:</InputLabel>
                                    <Input id='email' type='text' email={this.state.email} onChange={this.onEmailChangeHandler} />
                                    <FormHelperText className={this.state.emailRequired}><span className='red'>required </span></FormHelperText>
                                </FormControl>
                                <br /> <br />
                                <FormControl required>
                                    <InputLabel htmlFor='password'>Password:</InputLabel>
                                    <Input id='password' type='password' password1={this.state.password1} onChange={this.onPassChangeHandler} />
                                    <FormHelperText className={this.state.passRequired}><span className='red'>required </span></FormHelperText>
                                </FormControl>
                                <br /> <br />
                                <FormControl required>
                                    <InputLabel htmlFor='number'>Contact No.:</InputLabel>
                                    <Input id='number' type='text' number={this.state.number} onChange={this.onNumberChangeHandler} />
                                    <FormHelperText className={this.state.numberRequired}><span className='red'>required </span></FormHelperText>
                                </FormControl>
                                <br /> <br />
                                <Button variant="contained" color='primary' onClick={this.onRegisterClickHandler}>REGISTER</Button>
                            </TabContainer>
                        }
                    </Modal>
                </div>
            </div>

        )

    }
}
export default Header;