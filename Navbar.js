import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i class='fas fa-code'></i> Felicific 2021
        </Link>
      </h1>
      <ul>
        <li>
          <a href='profiles.html'>Developers</a>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
