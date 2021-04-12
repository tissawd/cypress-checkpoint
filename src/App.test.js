import { render, screen } from '@testing-library/react';
import App from './App';


test('is a navbar on the page', () => {
  render(<App />);
  const navBarElement = screen.getByRole(/navigation/i);
  expect(navBarElement).toBeInTheDocument();
});

