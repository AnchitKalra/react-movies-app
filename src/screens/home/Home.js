import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './Home.css';
import Header from '../../common/header/Header';
import Details from '../details/Details';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/Movies';
import genres from '../../common/genre';
import artists from '../../common/artists';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Card, Checkbox, Input, InputLabel, MenuItem, Typography } from '@material-ui/core';
import { CardContent } from '@material-ui/core/';
import { FormControl } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
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
            movieName: "",
            genres: [],
            artists: []
        }
    }
    onMovieClickHandler = (movieId) => {
        console.log(movieId)
        ReactDOM.render(
            <Details movieId={movieId} />,
            document.getElementById('root')
        )
    }
    onChangeHandler = (e) => {
        this.setState({ movieName: e.target.value })
        //console.log(this.state.movieName)
    }
    genreSelectHandler = (e) => {
        this.setState({ genres: e.target.value })
    }
    artistSelectHandler = (e) => {
        this.setState({ artists: e.target.value })
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
                <div className="flex-container">
                    <div className="left">
                        <GridList cols={3} className="gridcontainer">
                            {moviesData.map(movie => {
                                return (
                                    <GridListTile key={movie.id} style = {{cursor : 'pointer'}}onClick={() => this.onMovieClickHandler(movie.id)}>
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
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.title} color="textSecondary">
                                        FIND MOVIE BY:
                                        </Typography>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor='movieName'>Movie Name</InputLabel>
                                    <Input type='text' id='movieName' onChange={this.onChangeHandler}></Input>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor='select-multiple-checkbox'>Genre</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="select-multiple-checkbox" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.genres}
                                        onChange={this.genreSelectHandler}>
                                        <MenuItem value="0">None</MenuItem>
                                        {genres.map(
                                            genre => {
                                                return (
                                                    <MenuItem key={genre.id} value={genre.name}>
                                                        <Checkbox checked={this.state.genres.indexOf(genre.name) > -1} />
                                                        <ListItemText primary={genre.name} />
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor='select-multiple-checkbox'>Artist</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="select-multiple-checkbox" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.artists}
                                        onChange={this.artistSelectHandler}>
                                        <MenuItem value="0">None</MenuItem>
                                        {artists.map(
                                            artist => {
                                                return (
                                                    <MenuItem key={artist.id} value={artist.first_name}>
                                                        <Checkbox checked={this.state.artists.indexOf(artist.first_name) > -1} />
                                                        <ListItemText primary={artist.first_name + ' ' + artist.last_name} />
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField id="release-date-start" label="Release Date Start" type="Date" InputLabelProps={{ shrink: true }} />
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField id="release-date-to" label="Release Date End" type="Date" InputLabelProps={{ shrink: true }} />
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <Button variant="contained" color='primary'>APPLY</Button>
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