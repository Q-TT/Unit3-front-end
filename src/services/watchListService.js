const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/watch-list`;

const index = async () => {
    try {
      const res = await fetch(BASE_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
};

const show = async (movieId) => {
  try {
    const res = await fetch(`${BASE_URL}/${movieId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const search = async (keyWordInput) => {
  const url = `https://www.omdbapi.com/?s=${keyWordInput}&apikey=${process.env.API_KEY}`;
  const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '329af762c4msh2fc3311648b8a48p16e39ajsn634c5aa3b058',
    'x-rapidapi-host': 'omdb-api4.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};
try {
  let movies = await fetch(url, options);
  let moviesResult = await movies.text();
  console.log(moviesResult);
} catch (error) {
  console.error(error);
}
};
  
export { index, show, search };