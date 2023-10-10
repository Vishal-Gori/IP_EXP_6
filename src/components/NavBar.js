// Nav.js
import React from 'react';

function NavBar() {
  return (
    <nav>
      <a href="#about">About</a>
      <a href="#tech">Technology</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default NavBar;


// import { Link } from 'react-router-dom'

// const NavBar = () => {
//   return (
//     <>
//     <center>
//         <Link to="/">Home</Link>
//         <Link to="/profile">Profile</Link>
//         <Link to="/contact">Contact</Link>
//     </center>
//     </>
//   )
// }

// export default NavBar