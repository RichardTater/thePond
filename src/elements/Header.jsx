import { NavLink } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";

const Header = () => {
  return (

    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="http://localhost:3000/">
        <img
          alt="THE POND"
          className="mr-3 h-6 sm:h-9"
          src="https://w7.pngwing.com/pngs/88/543/png-transparent-rubber-duck-encapsulated-postscript-logo-duck-animals-pet-vertebrate.png"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          THE POND
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button href="http://localhost:3000/cart">
          Cart
        </Button>
        <Navbar.Toggle />
      </div>
      {/* <Navbar.Collapse>
        <Navbar.Link
          href="http://localhost:3000/"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="http://localhost:3000/about">
          About
        </Navbar.Link>
        <Navbar.Link href="https://www.linkedin.com/in/lane-vance-profile/">
          Contact
        </Navbar.Link>
      </Navbar.Collapse> */}
    </Navbar>


    // <Navbar>
    
    //   <h1 className="text-3xl font-bold underline">The Pond</h1>
    //   <nav>
    //     <NavLink to='/'>Home</NavLink>
    //     <NavLink to='/about'>About</NavLink>
    //     <NavLink to='/cart'>Cart</NavLink>
    //   </nav>
    
    // </Navbar>
  );
};

export default Header;
