import React, { Component } from 'react';
import Header from '../../common/header/Header';
import moviesData from '../../common/Movies';
import Home from '../home/Home';
class Details extends Component {
    constructor() {
        super();
        this.state = {movie : {}}
    }
    componentDidMount = () => {
        //console.log(this.props.movieId + 'props')
        let currentState = this.state
        currentState.movie = moviesData
        currentState.movie = moviesData.filter(mov => {
            return(
                mov.id === this.props.movieId
            )
        })[0]
        this.setState({currentState})
        console.log(this.state.movie)

    }
    render() {

        return (
        <div>
            <Header />
            <div className = 'flex-conatinerDetails'>
            <div className = "leftDetails"></div>
            <div className = "middleDetails"></div>
            <div className = "rightDetails"></div>
            </div>
        </div>)
    }

}
export default Details;