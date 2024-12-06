import { Link } from 'react-router-dom';

const WatchList = (props) => {
  return(
    <main>
      {props.watchList.map((movie) => (
        <>
          <Link key={movie._id} to={`/watch-list/${movie._id}`}>
            <h2>{movie.title}</h2>
          </Link>
            <ul>
              <li>
                Year: {movie.title}
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
            <p> Review created at: {new Date(movie.createdAt).toLocaleDateString()}</p> 
        </>
      ))}
    </main>
  )
};
export default WatchList;