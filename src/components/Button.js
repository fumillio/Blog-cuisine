import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to }) => (
  <Link to={to} className="button">Retour</Link>
);

export default Button;