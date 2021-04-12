import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main>
        <MovieList movies={[{poster: "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg"}]}/>
      </main>
    </div>
  );
}

export default App;
