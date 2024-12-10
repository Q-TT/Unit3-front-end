import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as watchListService from '../../services/watchListService'
import CommentForm from '../CommentForm/CommentForm';
import WatchList from '../WatchList/WatchList';

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

   
    const handleAddComment = async (commentFormData) => {
      const newComment = await watchListService.createComment(movieId, commentFormData);
      setMovie({ ...movie, Comments: [...movie.Comments, newComment] });
    };


    if (!movie) return <main>Loading...</main>;
    return (
      <main> 
        <h2>{movie.Title}</h2> 
        <ul>
              <li> 
                Type: {movie.Type}      
              </li>
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
                imdbID: {movie.imdbID}  
              </li>
              <li>
                Plot: {movie.Plot}
              </li>
            </ul>
            <p>Review: {movie.Review}</p>
        <h2>Comments</h2>
        <h4>Comments on the review:</h4>
        {/* <ul style={{ listStyleType: 'none' }}> */}
          {movie.Comments.map((eachComment) => {
          return (
            <li key={eachComment.id} style={{ listStyleType: 'number' }}>  
              {eachComment.text} 
              <p>
                {eachComment.author.username} posted on
                {new Date(eachComment.createdAt).toLocaleDateString()}
              </p>          
            </li>
          )
          })}
        {/* </ul> */}

        <CommentForm handleAddComment={handleAddComment}/>
      </main>
    )
}

export default MovieDetails; 