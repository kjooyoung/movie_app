import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = ({title, poster, genres, synopsis}) => {
    return(
        <div className='Movie'>
            <div className='Movie__Columns'>
                <MoviePoster poster={poster}/>
            </div>
            <div className='Movie__Columns'>
                <h1>{title}</h1>
                <div className='Movie_Genres'>
                    { genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>) }
                </div>
                <p className='Movie__Synopsis'>
                    {synopsis}
                </p>
            </div>
        </div>
    );
}

const MoviePoster = ({poster}) => ( <img className='Movie_Poster' src={poster} alt=''/> );

const MovieGenre = ({genre}) => ( <span className='Movie__Genre'>{genre}</span> );

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.popTypes = {
    poster: PropTypes.string.isRequired
}

MovieGenre.popTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;