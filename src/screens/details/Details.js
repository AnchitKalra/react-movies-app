import React, { Component } from 'react';
import Header from '../../common/header/Header';
import moviesData from '../../common/Movies';
import Home from '../home/Home';
import { Typography } from '@material-ui/core';
import './Details.css';
class Details extends Component {
    constructor() {
        super();
        this.state = { movie: {} }
    }
    componentWillMount = () => {
        //console.log(this.props.movieId + 'props')
        let currentState = this.state
        currentState.movie = moviesData
        currentState.movie = moviesData.filter(mov => {
            return (
                mov.id === this.props.movieId
            )
        })[0]
        this.setState({ currentState })
        console.log(this.state.movie)

    }
    render() {
        let movie = this.state.movie
        return (

            <div className="details">
                <Header />
                <div className='flex-conatinerDetails'>
                    <div className="leftDetails">
                        <img src={movie.poster_url} alt={movie.title} />
                    </div>
                    <div className="middleDetails">
                        <div>
                            <Typography variant="headline" component="h2">{movie.title}</Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Genre</span>{movie.genres.join(',')}</Typography>
                        </div>
                    </div>
                    <div className="rightDetails"></div>
                </div>
            </div>);
    }

}
export default Details;