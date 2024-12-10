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
        <h2>{movie.Title}</h2> 
        <ul>
              <li>
                Year: {movie.Year}
              </li>
              <li>
                Country: {movie.Country} 
              </li>
              <li>
                Language: {movie.Language} 
              </li>
              <li>
                Director: {movie.Director}
              </li>
              <li>
                Actors: {movie.Actors}
              </li>
              <li>
                IMDB rating: {movie.imdbRating}
              </li>
              <li>
                Plot: {movie.Plot}
              </li>
            </ul>
            <p>Review: {movie.Review}</p>
      </main>
    )
}

export default MovieDetails; 