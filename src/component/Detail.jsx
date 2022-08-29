import React, { Component } from 'react';
import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export default class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            movie: []
        };
    }
    componentDidMount() {
        const id = this.props.match.params;
        console.log(id);
        this.getMovie(id);
    }
    getMovie(id){
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a508205b77c4e96d3f3e4ecc246c8796&language=en-US`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
        this.setState({
            loading: false,
            movie: json.results
        });
        console.log(this.state);
        })
        .catch(error => console.log("error ", error));
    }
    render(){
        return (
            <>
                {this.state.movie}
            </>
        );
    }
}