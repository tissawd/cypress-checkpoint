import {render, screen} from '@testing-library/react';
import NavBar from '../components/NavBar';


test('Should render a Navigation component called NavBar',() => {
    render (<NavBar/>);
    const navBarElement = screen.getByRole(/Navigation/i);
    expect(navBarElement).toBeInTheDocument(); 
});


test('Should include a search box and button with text label search',() => {
    render (<NavBar/>);
    const searchBoxElement = screen.getByRole(/searchbox/i);
    expect(searchBoxElement).toBeInTheDocument();
    const buttonElement = screen.getByRole(/button/i);
    expect(buttonElement).toBeInTheDocument();
});
test('should have list items labeled Home and Login',()=>{
    render(<NavBar/>);
    const homeElement = screen.getByText(/Home/i);
    expect(homeElement).toBeInTheDocument();
    const loginElement = screen.getByText(/login/i);
    expect(loginElement).toBeInTheDocument();
});
test('should contain a header labeled GMDB',()=>{
    render(<NavBar/>);
    const gmdbElement = screen.getByRole(/heading/i);
    expect(gmdbElement.innerHTML).toEqual('GMDB');
});



// test('should have onclick event on all the button',() =>{
//     const NavBarElement = screen.getByRole(/OnClick/i)
//     expect(OnClick).toBe();
// });