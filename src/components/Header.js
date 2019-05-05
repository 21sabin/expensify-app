import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header>
    <div>
      <h1>Expensify</h1>
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
      <Link to="/edit">Edit</Link>
    </div>
    </header>
  )

  export default Header;
  