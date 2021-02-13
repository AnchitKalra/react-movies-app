import Home from '../home/Home';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import { FormControl, InputLabel, MenuItem, Select, Typography, Input, Button } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import './BookShow.css';
class BookShow extends Component {
    constructor() {
        super()
        this.state = {
            location: "",
            language: "",
            date: "",
            time: "",
            tickets: 0,
            availableTickets: 20,
            unitPrice: 500
        }

    }
    backToHomeHandler = () => {
        ReactDOM.render(
            <Home />,
            document.getElementById('root')
        )
    }
    locationChangeHandler = (e) => {
        this.setState({ location: e.target.value })
    }
    ticketsChangeHandler = e => {
        this.setState({ tickets: e.target.value })
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
                            <FormControl className='formControl' required>
                                <InputLabel htmlFor='location'>Location: </InputLabel>
                                <Select id='location' >

                                    {location.map(loc => (
                                        <MenuItem key={'loc' + loc.id} onChange={this.locationChangeHandler} value={loc.location}>
                                            {loc.location}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl className='formControl' required>
                                <InputLabel htmlFor='language'>Language: </InputLabel>
                                <Select id='language' >

                                    {language.map(lang => (
                                        <MenuItem key={'lang' + lang.id} onChange={this.languageChangeHandler} value={lang.language}>
                                            {lang.language}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl className='formControl' required>
                                <InputLabel htmlFor='date'>Chose Date: </InputLabel>
                                <Select id='date' >

                                    {showDate.map(date => (
                                        <MenuItem key={'date' + date.id} onChange={this.dateChangeHandler} value={date.showDate}>
                                            {date.showDate}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl className='formControl' required>
                                <InputLabel htmlFor='time'>Chose Time: </InputLabel>
                                <Select id='time' >

                                    {showTime.map(time => (
                                        <MenuItem key={'time' + time.id} onChange={this.timeChangeHandler} value={time.showTime}>
                                            {time.showTime}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl className='formControl' required>
                                <InputLabel htmlFor='tickets'>Tickets: ({this.state.availableTickets} available)</InputLabel>
                                <Input type='text' id='tickets' onChange={this.ticketsChangeHandler} value={this.state.tickets !== 0 ? this.state.tickets : ""}></Input>
                            </FormControl><br /><br />
                            <Typography>Unit Price: {this.state.unitPrice}</Typography><br /> 
                            <Typography>Total Price: {this.state.unitPrice * this.state.tickets}</Typography><br />
                            <Button variant='contained' color='primary' onClick={this.bookShowHandler}>BOOK SHOW</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}
export default BookShow;