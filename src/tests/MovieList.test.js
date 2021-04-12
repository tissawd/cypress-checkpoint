import { render, screen } from '@testing-library/react';
import MovieList from './../components/MovieList';

test('should render movie list',()=>{
    render(<MovieList movies={[{poster: "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg"}]} />);
    const movieListElement = screen.getByRole(/img/i);
    expect (movieListElement).toBeInTheDocument();
});
test('should have mulitple images',()=>{
  const movies = [
    {poster: "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg"},
    {poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},
    {poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},
  ];

    render(<MovieList movies={movies} /> );
    screen.debug();
    const imagesElement= screen.getAllByRole(/img/i);
    expect (imagesElement).toHaveLength(3);
})