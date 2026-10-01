import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBuilding } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <FaBuilding className="logo-icon" /> Terracota
      </Link>
      <div className="nav-links">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/catalogo">Propiedades</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
        <Link to="/contacto" className="btn-outline">Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;