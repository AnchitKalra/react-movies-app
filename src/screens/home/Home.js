import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/Movies';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Card, Input, InputLabel, Typography } from '@material-ui/core';
import { CardContent } from '@material-ui/core/';
import { FormControl } from '@material-ui/core';
const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%',

    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
    },
    title: {
        color: theme.palette.primary.light,
    }
});

class Home extends Component {
    constructor() {
        super()
        this.state = {
            movieName : ""
        }
    }
    onChangeHandler = (e) => {
        this.setState({movieName : e.target.value})
        //console.log(this.state.movieName)
    }
    date = function (movieDate) {
        let d = new Date(movieDate)
        d = d.toString();
        d = d.split("00:")
        return (
            "Release Date: " + d[0]
        );
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <div className={classes.upcomingMoviesHeading}>
                    <span>Upcoming Movies</span>
                </div>
                <GridList cols={5} className={classes.gridListUpcomingMovies}>
                    {moviesData.map(movie => {
                        return (
                            <GridListTile key={movie.id} >
                                <img src={movie.poster_url} alt={movie.title} className="upcoming" />
                                <GridListTileBar title={movie.title} />
                            </GridListTile>
                        )
                    })}

                </GridList>
                <div className = "flex-container">
                    <div className = "left">
                        <GridList cols={3} className="gridcontainer">
                            {moviesData.map(movie => {
                                return (
                                    <GridListTile key={movie.id} >
                                        <img src={movie.poster_url} alt={movie.title} className="upcoming" />
                                        <GridListTileBar title={movie.title} subtitle={this.date(movie.release_date)} />
                                    </GridListTile>
                                )
                            })}
                        </GridList>
                        </div>
                        <div className="right">
                            <Card>
                                <CardContent>
                                    <FormControl className = {classes.formControl}>
                                        <Typography className = {classes.title} color = "textSecondary">
                                            FIND MOVIE BY:
                                        </Typography>
                                        </FormControl>  
                                        <FormControl className = {classes.formControl}>
                                            <InputLabel htmlFor = 'movieName'>Type Movie Name:</InputLabel>
                                            <Input type = 'text' id = 'movieName' onChange = {this.onChangeHandler}></Input>
                                            </FormControl>    
                                </CardContent>
                            </Card>
                    </div>
                </div>
            </div>

        )
    }
}

export default withStyles(styles)(Home);