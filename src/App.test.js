import { render, screen } from '@testing-library/react';
import App from './App';


test('is a navbar on the page', () => {
  render(<App />);
  const navBarElement = screen.getByRole(/navigation/i);
  expect(navBarElement).toBeInTheDocument();
});
test('should display list of movie images',()=>{
  render(<App />);
  const movieListElement = screen.getByRole(/img/i);
  expect(movieListElement).toBeInTheDocument();
  
});
