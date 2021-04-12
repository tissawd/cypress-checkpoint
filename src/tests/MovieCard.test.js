import { render, screen } from '@testing-library/react';
import MovieCard from './../components/MovieCard';


test('should render a MovieCard',()=>{
    render(<MovieCard/>);
    const movieCardElement = screen.getByRole(/img/i);
    expect(movieCardElement).toBeInTheDocument();
})