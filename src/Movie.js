// import React, { Component } from 'react'
import React from 'react'
import propTypes from 'prop-types'
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css'
//
// class Movie extends Component {
//
//     static propTypes = {
//         title: propTypes.string.isRequired,
//         poster: propTypes.string.isRequired
//     }
//     render() {
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h1>{this.props.title}</h1>
//             </div>
//                 )
//     }
// }

// class MoviePoster extends Component{
//     static propTypes = {
//         poster: propTypes.string.isRequired
//     }
//     render() {
//         return(
//             <h2>{this.props.poster}</h2>
//         )
//     }
// }


function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
            <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre,index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis = '...'
                    trimRight
                    basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genres">{genre}</span>
    )
}


// 단지 리턴을 하기위해 컴포넌트가 존재한다. (function 컴포넌트)
// component will mount ,did mount , update  이런 것들이 필요가 없음!
//1개의 props , 1개의 html 태그
function MoviePoster({poster, alt}) {
    return (
        <img src ={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

//Movie Type 확인하기
Movie.propTypes = {
    title : propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.array.isRequired,
    synopsis: propTypes.string.isRequired
}

//MoviePoster 타입확인하기
MoviePoster.propTypes = {
    poster: propTypes.string.isRequired,
    alt: propTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: propTypes.string.isRequired
}

export default Movie;