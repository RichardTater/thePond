import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 className="text-3xl font-bold underline">The Pond</h1>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
    </header>
  );
};

export default Header;
