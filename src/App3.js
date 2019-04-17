import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
  //
  // Life Circle
  //

  // render: componentWillMount() -> render() -> componentDidMount()
  // update: componentWillReceivePops() -> componentShouldUpdate() -> componenetWillUpdate() -> render()
  //                                        return (old props != new props)

class App extends Component {
    state = {
    }

    componentWillMount(){
    }

    componentDidMount(){
        this._getMovies();
    }

    _getMovies = async () => {
        const movies = await this._callApi();
        this.setState({
            movies : movies
        });
        
    }

    _callApi = async () => {
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
        .then((response) => response.json())
        .then((json) => json.data.movies)
        .catch((err) => console.error(err));
    }

    _renderMovies = () => {
        // const movies = [<Movie/>, <Movie/>, <Movie/>];
        const movies = this.state.movies.map((movie, index) => {
            console.log(movie)
            return <Movie 
                    title={movie.title} 
                    poster={movie.medium_cover_image} 
                    genres={movie.genres}
                    synopsis={movie.synopsis}
                    key={index}/>
        });
        return movies;
    }

    render = () => {
        return (
            <div className='App'>
                {
                    (this.state.movies == null) ? <h5>loading.....</h5> : this._renderMovies()
                }
            </div>
        );
    }
}

export default App;
