import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  // var myStyledComponentStyles = {
  //   `backgroundColor: '#ecf0f1';
  //   fontFamily: 'sans-serif',
  //   paddingTop: '50px'
  // `}
  return (
    <div>
      <h1> Epicodus TapRoom</h1>
      <Link to="/">Home</Link> | <Link to="/newbeer">Add Beer</Link>
    </div>
  );
}

export default Header;
