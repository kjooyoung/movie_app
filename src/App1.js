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
        greeting: 'Good Morning',
        movies: [{
            title:'생일',
            poster:'https://movie-phinf.pstatic.net/20190329_223/1553847778414CTAcF_JPEG/movie_image.jpg?type=m99_141_2'
          },{
            title:'헬보이',
            poster:'https://movie-phinf.pstatic.net/20190404_205/155434484507891fje_JPEG/movie_image.jpg?type=m99_141_2',
          },{
            title:'샤잠!',
            poster:'https://movie-phinf.pstatic.net/20190322_198/1553220632606va06v_JPEG/movie_image.jpg?type=m99_141_2'
          },{
            title:'미성년',
            poster:'https://movie-phinf.pstatic.net/20190411_137/1554973943268Tu8fN_JPEG/movie_image.jpg?type=m99_141_2'
          },{
            title:'돈',
            poster:'https://movie-phinf.pstatic.net/20190306_280/1551849045570X4iac_JPEG/movie_image.jpg?type=m99_141_2'
          
          }]
    }
    componentWillMount(){
        console.log('componenetWillMount() called')
    }

    componentDidMount(){
        console.log('componentDidMount() called')
        setTimeout((i, j) => {
            this.setState({
                greeting : 'Good Afternoon',
                movies: this.state.movies.concat([{
                    title: '어스',
                    poster : 'https://movie-phinf.pstatic.net/20190329_232/1553849027701K0DBy_JPEG/movie_image.jpg?type=m99_141_2'
                }])
            });
        }, 5000);
    }

    render() {
        return (
            <div className='App'>
              <h1>{this.state.greeting}</h1>
              {
                  this.state.movies.map((movie, index) => {
                  return <Movie title={movie.title} poster={movie.poster} key={index}/>
                  })
              }
            </div>
        );
    }
}

export default App;
