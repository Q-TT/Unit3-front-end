import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as watchListService from '../../services/watchListService'


const MovieForm = (props) => {
  // console.log(props)
  const location = useLocation()
  const fromResult  = location.state
  const [formData, setFormData] = useState({
    Title: `${fromResult.Title}`,
    Year: `${fromResult.Year}`,
    Type: `${fromResult.Type}`,
    Review: "",
  });

const { movieId } = useParams();

useEffect(() => {
  const fetchMovie = async () => {
    const movieData = await watchListService.show(movieId);
    setFormData(movieData);
  };
  fetchMovie();
}, [movieId]);

const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

const handleSubmit = (evt) => {
  evt.preventDefault();
  props.handleAddMovie(formData);
  console.log('formData', formData);
  // We'll update this function shortly...
}



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Title"> Name </label>
        <input
          type="text"
          id="Title"
          name="Title"
          value={formData.Title}    
          onChange={handleChange}
          
        />
        <label htmlFor="Type">Type </label>
        <input
          type="text" 
          id="Type"
          name="Type"
          value={formData.Type} 
          onChange={handleChange}   
        />
        <label htmlFor="Year"> Year </label>
        <input
          type="text"
          id="Year"
          name="Year"
          value={formData.Year}  
          onChange={handleChange}
        />
        <label htmlFor="Review"> Comment </label>
        <textarea
          type="text"
          id="Review"
          name="Review"
          value={formData.Comment}  
          onChange={handleChange}
          required   
        />
        <button type="submit">Add Comments</button>
      </form>
    </div>
)}

export default MovieForm;