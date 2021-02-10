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
            username: ''
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
        this.setState({ modalIsOpen: false })
    }
    tabChangeHandler = (event, value) => {
        this.setState({ value })
    }
    onClickHandler = () => {
        this.state.username === "" ? this.setState({usernameRequired : 'dispBlock'}) : this.setState({usernameRequired : 'dispNone'});
    }
    onLoginChangeHandler = (e) => {
        this.setState({username : e.target.value});
    }

    render() {


        return (

            <div className="container-outer1">
                <img src={logo} className="app-logo" alt="logo" />
                <Button id="btn-login1" variant="contained" onClick={this.openModalHandler} onMouseLeave={this.onModelOpen}>Login</Button>
                <div style={{ display: 'table' }}>
                    <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeModalHandler} style={{ display: 'table' }}>
                        <Tabs value={this.state.value} onChange={this.tabChangeHandler} style={{ marginBottom: '20px' }}>
                            <Tab label="Login">
                            </Tab>
                            <Tab label="Register" />
                        </Tabs>
                        {this.state.value === 0 &&
                            <TabContainer>
                                <FormControl required>
                                    <InputLabel htmlFor='my-input'>Username:</InputLabel>
                                    <Input id="my-input" type='text' username={this.state.username} onChange = {this.onLoginChangeHandler}/>
                                    <FormHelperText className={this.state.usernameRequired}><span className='red'>required </span></FormHelperText>
                                </FormControl>
                                <br /><br />
                                <FormControl required>
                                    <InputLabel htmlFor='my-input-pass'>Password:</InputLabel>
                                    <Input id='my-input-pass' type='password' />

                                </FormControl>
                                <br /> <br />
                                <Button variant="contained" color='primary' onClick={this.onClickHandler}>Login</Button>
                            </TabContainer>
                        }
                    </Modal>
                </div>
            </div>

        )

    }
}
export default Header;