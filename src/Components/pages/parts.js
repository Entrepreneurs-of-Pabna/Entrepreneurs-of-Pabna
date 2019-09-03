import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <p className="page-err">404 : Page Not Found !</p>
      <h4>Please go back to <Link className="" style={{"color":"#3504a8"}} to="/">Home Page</Link>.</h4>
  </div>
  )
}

export const Block = (props) => {
  return <div style={{"height":props.height}}></div>
}
