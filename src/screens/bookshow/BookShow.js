import Home from '../home/Home';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import { FormControl, InputLabel, MenuItem, Select, Typography, Input, Button, FormHelperText } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import ConfirmBooking from '../confirmbooking/ConfirmBooking';
import './BookShow.css';
class BookShow extends Component {
    constructor() {
        super()
        this.state = {
            location: "",
            locationRequired: 'dispNone',
            language: "",
            languageRequired: 'dispNone',
            date: "",
            dateRequired: 'dispNone',
            time: "",
            timeRequired: 'dispNone',
            tickets: "",
            ticketsRequired: 'dispNone',
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
        console.log('HI')
        this.setState({ location: e.target.value })
        console.log(this.state.location + ' ' + e.target.value)
    }
    languageChangeHandler = (e) => {
        this.setState({ language: e.target.value })
    }
    dateChangeHandler = (e) => {
        this.setState({ date: e.target.value })
    }
    timeChangeHandler = (e) => {
        this.setState({ time: e.target.value })
    }
    ticketsChangeHandler = e => {
        this.setState({ tickets: e.target.value })
    }
    bookShowHandler = () => {
        console.log("BOOKSHOWHANDLER")
        this.state.location === "" ? this.setState({ locationRequired: 'dispBlock' }) : this.setState({ locationRequired: 'dispNone' });
        this.state.language === "" ? this.setState({ languageRequired: 'dispBlock' }) : this.setState({ languageRequired: 'dispNone' });
        this.state.date === "" ? this.setState({ dateRequired: 'dispBlock' }) : this.setState({ dateRequired: 'dispNone' });
        this.state.time === "" ? this.setState({ timeRequired: 'dispBlock' }) : this.setState({ timeRequired: 'dispNone' });
        this.state.tickets === "" ? this.setState({ ticketsRequired: 'dispBlock' }) : this.setState({ ticketsRequired: 'dispNone' });
        if ((this.state.location !== "") && (this.state.language !== "") && (this.state.date !== "") && (this.state.time !== "") && (this.state.tickets !== "")) {
            ReactDOM.render(
                <ConfirmBooking location = {this.state.location} language = {this.state.language} date = {this.state.date} time = {this.state.time} tickets = {this.state.tickets}/>,
                document.getElementById('root')

            )
        }
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
                                    <Select id='location' value={this.state.location} onChange={this.locationChangeHandler}>

                                        {location.map(loc => (
                                            <MenuItem key={'loc' + loc.id} value={loc.location}>
                                                {loc.location}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText className={this.state.locationRequired}><span className='red'>required </span></FormHelperText>
                                </FormControl>

                                <FormControl className='formControl' required>
                                    <InputLabel htmlFor='language'>Language: </InputLabel>
                                    <Select id='language' onChange={this.languageChangeHandler} value={this.state.language}>

                                        {language.map(lang => (
                                            <MenuItem key={'lang' + lang.id} value={lang.language}>
                                                {lang.language}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText className={this.state.languageRequired}><span className='red'>required </span></FormHelperText>
                                </FormControl>
                                <FormControl className='formControl' required>
                                    <InputLabel htmlFor='date'>Chose Date: </InputLabel>
                                    <Select id='date' onChange={this.dateChangeHandler} value={this.state.date}>

                                        {showDate.map(date => (
                                            <MenuItem key={'date' + date.id} value={date.showDate}>
                                                {date.showDate}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText className={this.state.dateRequired}><span className='red'>required </span></FormHelperText>
                                </FormControl>
                                <FormControl className='formControl' required>
                                    <InputLabel htmlFor='time'>Chose Time: </InputLabel>
                                    <Select id='time' onChange={this.timeChangeHandler} value={this.state.time}>

                                        {showTime.map(time => (
                                            <MenuItem key={'time' + time.id} value={time.showTime}>
                                                {time.showTime}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText className={this.state.timeRequired}><span className='red'>required </span></FormHelperText>
                                </FormControl>
                                <FormControl className='formControl' required>
                                    <InputLabel htmlFor='tickets'>Tickets: ({this.state.availableTickets} available)</InputLabel>
                                    <Input type='text' id='tickets' onChange={this.ticketsChangeHandler} value={this.state.tickets !== 0 ? this.state.tickets : ""}></Input>
                                    <FormHelperText className={this.state.ticketsRequired}><span className='red'>required </span></FormHelperText>
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