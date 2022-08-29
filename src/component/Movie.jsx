import React, {Component} from 'react';
import Card from './Card';

export default class Movie extends Component{
    state = {
        movie : [],
        selected_movie: {},
        click: false,
        // dates: "",
        loading: true,
    }
    componentDidMount(){
        this.getMovie();
    }
    getMovie(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a508205b77c4e96d3f3e4ecc246c8796&language=en-US&page=1`, {
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

      onChange = (event) => {
        /* signal to React not to nullify the event object */
        event.persist();
        this.setState({loading: true});
        console.log(event);
        this.setState({loading: true});
        if (event.target.value === "") {
          // if (this.state.dates.target.value !== "") {
          //   this.onDates(this.state.dates);
            // this.setState({dates: this.state.dates});
            // console.log(this.state);
          // }else{
            // this.getMovie();
          // }
            // this.setState({dates: ""});
            this.getMovie();
            console.log(this.state);
        }else{
          const filtered = this.state.movie.filter(movie => movie.title.includes(event.target.value));
          this.setState({
            loading: false,
            movie: filtered
          });
          console.log(this.state);
          console.log(filtered);
        }
      }
    render(){
        return(
            <>
            <label class="relative block">
                <span class="sr-only">Search</span>
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                </span>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" onKeyUp={this.onChange} debounce="1000" />
            </label>
                {(this.state.loading) ? <h1>Loading...</h1> : <Card movie={this.state.movie} />}
            </>
        )
    }
}