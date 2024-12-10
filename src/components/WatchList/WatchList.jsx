import { Link } from 'react-router-dom';

const WatchList = (props) => {
  return(
    <main>
      {props.watchList.map((movie) => (
        <>
          <Link key={movie._id} to={`/watch-list/${movie._id}`}>
            <h2>{movie.Title}</h2>
          </Link>
            <p> Review: {movie.Review}</p>
            <p> Review created at: {new Date(movie.createdAt).toLocaleDateString()}</p> 
        </>
      ))}
    </main>
  )
};
export default WatchList;