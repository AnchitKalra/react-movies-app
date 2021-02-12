import React, { Component } from 'react';
import Header from '../../common/header/Header';
import moviesData from '../../common/Movies';
import { Typography } from '@material-ui/core';
import Home from '../home/Home';
import ReactDOM from 'react-dom';
import  Youtube  from 'react-youtube';
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
    backToHomeHandler = () => {
        ReactDOM.render(
            <Home />,
            document.getElementById('root')
        );
    }
    render() {
        let movie = this.state.movie
        const opts = {
            height : '300',
            width : '700', 
            playerVars : {
                autoplay : 1
            }
        }
        return (

            <div className="details">
                <Header />
                <Typography onClick={this.backToHomeHandler} style={{ cursor: 'pointer' }}> Back To Home </Typography>
                <div className='flex-conatinerDetails' style={{ display: 'flex' }}>
                    <div className="leftDetails">
                        <img src={movie.poster_url} alt={movie.title} />
                    </div>
                    <div className="middleDetails">
                        <div>
                            <Typography variant="headline" component="h2">{movie.title}</Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Genres: </span>{movie.genres.join(',')}</Typography>
                            <Typography><span className="bold">Duration: </span>{movie.duration}</Typography>
                            <Typography><span className="bold">Release Date: </span>{new Date(movie.release_date).toDateString()}</Typography>
                            <Typography><span className="bold">Rating: </span>{movie.critics_rating}</Typography><br /><br />
                            <Typography><span className="bold">Plot: <a href={movie.wiki_url}> (Wiki Link)</a></span>{movie.storyline}</Typography>
                        </div>
                        <div className = 'trailerContainer'>
                        <Typography><span className = 'bold'>Trailer: </span></Typography>
                        <Youtube videoId = {movie.trailer_url.split('?v=')[1]} opts = {opts} onReady = {this._onReady} />
                    </div>
                    </div>
                    
                    <div className="rightDetails"></div>
                </div>
            </div>);
    }

}
export default Details;