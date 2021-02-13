import React, { Component } from 'react';
import { Card, CardContent, InputLabel, Input, TextField, Button, Typography } from '@material-ui/core';
import './ConfirmBooking.css';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import ReactDOM from 'react-dom';
class ConfirmBooking extends Component {
    confirmBookingHandler = () => {
        ReactDOM.render(
       <div>
        <Alert id = "alertTag" severity = "success" onClose={() => {}}>Booking Confirmed!</Alert>
        <ConfirmBooking />
        </div>,
        document.getElementById('root')
        )
    }
    render() {
        return (
            <div>
                <Card className="cardStyle">
                    <CardContent>
                        <Typography variant="heading" component="h2">SUMMARY</Typography><br /><br />
                        <Typography><span>Location:</span><span style={{ marginLeft: '40%' }}>{this.props.location}</span></Typography><br />
                        <Typography><span>Language:</span><span style={{ marginLeft: '40%' }}>{this.props.language}</span></Typography><br />
                        <Typography><span>Date:</span><span style={{ marginLeft: '40%' }}>{this.props.date}</span></Typography><br />
                        <Typography><span>Show Time:</span><span style={{ marginLeft: '40%' }}>{this.props.time}</span></Typography><br />
                        <Typography><span>Tickets:</span><span style={{ marginLeft: '40%' }}>{this.props.tickets}</span></Typography><br />
                        <Typography><span>Unit Price:</span><span style={{ marginLeft: '40%' }}>500</span></Typography><br /><br />
                        <div className="containerInputBtn"><TextField placeholder="Coupon Code"></TextField>
                            <Button id="applybtn" variant="contained" color="primary">APPLY</Button></div><br /> <br />
                        <Typography><span className="bold">Total Price:</span><span>{this.props.tickets * 500}</span></Typography><br />
                        <div>
                            <Button variant="contained" color="primary" onClick= {this.confirmBookingHandler}>CONFIRM BOOKING</Button>
                            
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
export default ConfirmBooking;