import { render, screen } from '@testing-library/react';
import MovieCard from './../components/MovieCard';


test('should render a MovieCard',()=>{
    render(<MovieCard/>);
    const movieCardElement = screen.getByRole(/img/i);
    expect(movieCardElement).toBeInTheDocument();
});
test('should render a image to display GOTG', ()=>{
    render(<MovieCard/>);
    const picElement = screen.getByRole(/img/i);
    expect(picElement.getAttribute("src")).toEqual("https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg");

});