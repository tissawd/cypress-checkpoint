import {render, screen} from '@testing-library/react';
import NavBar from '../components/NavBar';


test('Should render a Navigation component called NavBar',() => {
    render (<NavBar/>);
    const navBarElement = screen.getByRole(/Navigation/i);
    expect(navBarElement).toBeInTheDocument(); 
});
// test('Should include a search box and button with text label search',() => {
//     const NavBarElement = screen.getByRole(/searchbox/i);
//     expect(searchbox).toBe(searchbox);
//     const NavBarElement = screen.getByRole(/search/i);
//     expect(search).toBe(search); 
// });
// test('should have onclick event on all the button',() =>{
//     const NavBarElement = screen.getByRole(/OnClick/i)
//     expect(OnClick).toBe();
// });