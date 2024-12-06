import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as watchListService from '../../services/watchListService'

const MovieDetails = (props) => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
      const fetchMovie = async () => {
        const movieData = await watchListService.show(movieId);
        console.log(movieData);
        setMovie(movieData)
      };
      fetchMovie();
    }, [movieId]);

    if (!movie) return <main>Loading...</main>;
    return (
      <main> 
        <h2>{movie.title}</h2> 
        <ul>
              <li>
                Year: {movie.year}
              </li>
              <li>
                Country: {movie.country} 
              </li>
              <li>
                Language: {movie.language} 
              </li>
              <li>
                Category: {movie.category}
              </li>
              <li>
                Director: {movie.director}
              </li>
              <li>
                Actors: {movie.actors}
              </li>
              <li>
                IMDB rating: {movie.imdbRating}
              </li>
              <li>
                Plot: {movie.plot}
              </li>
            </ul>
            <p>Review: {movie.review}</p>
      </main>
    )
}

export default MovieDetails; 