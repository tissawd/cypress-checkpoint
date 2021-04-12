import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/movies')
    // .then(response => console.log(response))
    .then(response => response.json())
    .then(result => setMovies(result))
    // .catch(err => console.log(err))
  })

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main>
        <MovieList movies={movies}/>
      </main>
    </div>
  );
}

export default App;
