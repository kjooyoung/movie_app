import React, { Component } from 'react';
import './Movie.css';


class Movie extends Component {
    render(){
        return(
            <div className='Movie'>
                <h1>극한직업</h1>
                <img src='http://img.sbs.co.kr/newsnet/etv/upload/2019/01/23/30000621861_700.jpg' alt=''/>
            </div>
        );
    }
}

export default Movie;