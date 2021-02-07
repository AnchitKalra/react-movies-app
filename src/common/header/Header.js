import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

class Header extends Component {
    constructor() {
        super();
        this.state = {modalIsOpen : false}
    }
    openModalHandler = () => {
        this.setState({modalIsOpen : true});
           
    }
    closeModalHandler = () => {
        this.setState({modalIsOpen : false})
    }

    render() {
        return(
            <div className = "container-outer1">
                <img src = {logo} className = "app-logo" alt = "logo" />
            <Button id = "btn-login1" variant="contained" onClick = {this.openModalHandler}>Login</Button>
            <Modal ariaHideApp = {false} isOpen = {this.state.modalIsOpen} contentLabel = "Login" onRequestClose = {this.closeModalHandler}>

            </Modal>
            </div>
        )
    }
}
export default Header;