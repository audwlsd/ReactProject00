import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

    //컴포넌트 로드시
    state = {}

    //컴포넌트가 mount된 이후
    componentDidMount() {
        this._makeMovies()
    }

    _makeMovies = async () => {
        const movies = await this._callApi()
        this.setState({
            movies
            // 원래: movies: movies 였지
        })
    }

    _callApi = () => {
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
            .then(response => response.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err))
    }

    _renderMovies = () => {
        const movies = this.state.movies.map(movie => {
            return <Movie
                key={movie.id}
                title = {movie.title_english}
                poster={movie.medium_cover_image}
                genres = {movie.genres}
                synopsis = {movie.synopsis}
            />
        })

        return movies
    }

  render() {
        const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
          {movies ? this._renderMovies() : 'loading'}
      </div>
    )
  }
}

export default App;