import React, { useState } from 'react';
const apiKey = import.meta.env.API_KEY;
import MovieForm from '../MovieForm/MovieForm';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=9b18590f`);
      const data = await response.json();
      setResults(data.Search);
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [showOtherComponent, setShowOtherComponent] = useState(false);


  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      <ul style={{ listStyleType: 'none' }}>
        {results.map((result) => {
          console.log(result)
        return (
          <li key={result.id}> 
            <img src={result.Poster}/>
            <p> 
                {result.Title} 
            </p>
            <p> 
                {result.Type} in [{result.Year}]       
            </p>
            <Link to= "/watch-list/new" state={ result }>Next Step</Link>
            {/* <Link to="/watch-list/new" element={<MovieForm result={result}/>}>Add your review</Link> */}
          </li> )
        })}
      </ul>
    </div>
  );
}

export default SearchBar;