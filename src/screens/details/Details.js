import React, { Component } from 'react';
import Header from '../../common/header/Header';
import moviesData from '../../common/Movies';
import { Typography } from '@material-ui/core';
import Home from '../home/Home';
import ReactDOM from 'react-dom';
import Youtube from 'react-youtube';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import  StarBorderIcon  from '@material-ui/icons/StarBorder';

import './Details.css';
let artistHandler = (artist) => {
    window.open(artist)
}
class Details extends Component {
    constructor() {
        super();
        this.state = {
            movie: {},
            starIcons: [
                {
                   id: 1,
                   stateId: "star1",
                   color: "black"
                },
                {
                   id: 2,
                   stateId: "star2",
                   color: "black"
                },
                {
                   id: 3,
                   stateId: "star3",
                   color: "black"
                },
                {
                   id: 4,
                   stateId: "star4",
                   color: "black"
                },
                {
                   id: 5,
                   stateId: "star5",
                   color: "black"
                }
             ]
        }
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
   starClickHandler = (id) => {
    for(var star of this.state.starIcons) {
        if(star.id <= id) {
            star.color = 'yellow'
        }
        else {
            star.color = 'black'
        }
    }
    this.setState({startIcon : star})
   }
    render() {
        let movie = this.state.movie
        const opts = {
            height: '300',
            width: '700',
            playerVars: {
                autoplay: 1
            }
        }

        return (

            <div className="details">
                <Header showBookShowButton = "true"/>
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
                        <div className='trailerContainer'>
                            <Typography><span className='bold'>Trailer: </span></Typography>
                            <Youtube videoId={movie.trailer_url.split('?v=')[1]} opts={opts} onReady={this._onReady} />
                        </div>
                    </div>

                    <div className="rightDetails">
                        <Typography><span className='bold'>Rate this Title: </span></Typography>
                        {this.state.starIcons.map(star => (
                                <StarBorderIcon className = {star.color} key = {"star" + star.id} onClick = {() => {this.starClickHandler(star.id)}} /> 
                        )

                        )}
                        <GridList cols={2} className="gridcontainer">
                            {this.state.movie.artists.map(artist => {



                                return (
                                    <GridListTile key={artist.id} style={{ cursor: 'pointer' }}>
                                        <img src={artist.profile_url} alt={artist.first_name + ' ' + artist.last_name} className="upcoming" onClick={() => artistHandler(artist.wiki_url)} />
                                        <GridListTileBar title={artist.first_name + ' ' + artist.last_name} />
                                    </GridListTile>
                                )
                            })
                            }
                        </GridList>

                    </div>
                </div>
            </div>);
    }

}
export default Details;