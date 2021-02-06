import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';
import logo from '../../assets/logo.svg';

class Header extends Component {
    render() {
        return(
            <div className = "container-outer1">
                <img src = {logo} className = "app-logo" alt = "logo" />
            <Button id = "btn-login1" variant="contained">Login</Button>
            </div>
        )
    }
}
export default Header;