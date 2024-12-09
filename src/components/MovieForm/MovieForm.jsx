import { useState } from 'react';
import { useLocation } from 'react-router-dom';


const MovieForm = () => {
  // console.log(props)
  const location = useLocation()
  const fromResult  = location.state
  console.log(fromResult)
  const [formData, setFormData] = useState({
    Title: `${fromResult.Title}`,
    Year: `${fromResult.Year}`,
    Type: `${fromResult.Type}`,
    Comment: "",
  });

const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  
const handleSubmit = (evt) => {
  evt.preventDefault();
  console.log('formData', formData);
  // We'll update this function shortly...
}
  return (
    <div>
      <form>
        <label htmlFor="name"> Name </label>
        <input
          id="name"
          name="name"
          value={formData.Title}    
          onChange={handleChange}
          required 
        />
        <label htmlFor="year"> Year </label>
        <input
          id="year"
          name="year"
          value={formData.Year}  
          onChange={handleChange}
          required   
        />
        <label htmlFor="comment"> Comment </label>
        <textarea
          type="text"
          id="comment"
          name="comment"
          value={formData.Comment}  
          onChange={handleChange}
          required   
        />
        <button type="submit">Add Comments</button>
      </form>
    </div>
)}

export default MovieForm;