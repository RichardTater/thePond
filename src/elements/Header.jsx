import { NavLink } from "react-router-dom";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar>
    
      <h1 className="text-3xl font-bold underline">The Pond</h1>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/cart'>Cart</NavLink>
      </nav>
    
    </Navbar>
  );
};

export default Header;
