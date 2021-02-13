import Home from '../home/Home';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import './BookShow.css';
class BookShow extends Component {
    constructor() {
        super()
        this.state = {location:""}
    }
    backToHomeHandler = () => {
        ReactDOM.render(
            <Home />,
            document.getElementById('root')
        )
    }
    locationChangeHandler = (e) => {
        this.setState({location : e.target.value})
    }
    render() {
        return (
            <div>
                <Header />
                <div style={{ textAlign: 'center' }} >
                    <span onClick={this.backToHomeHandler} style={{ cursor: 'pointer' }}>Back To Details Page</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Card className='cardStyle'>
                        <CardContent>
                            <Typography variant='headline' component='h2'>BOOK SHOW</Typography><br />
                            <FormControl className = 'formControl'>
                                <InputLabel htmlFor = 'location'>Location: </InputLabel>
                                <Select id = 'location' >
                                    
                                    {location.map( loc => (
                                    <MenuItem key  = { 'loc' + loc.id } onChange = {this.locationChangeHandler} value = {loc.location}>
                                        {loc.location}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}
export default BookShow;