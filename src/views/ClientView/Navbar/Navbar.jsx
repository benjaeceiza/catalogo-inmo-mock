import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBuilding, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Función para abrir/cerrar el menú
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Función para cerrar el menú (usada al hacer clic en un link)
  const closeMenu = () => setIsOpen(false);

  // Efecto para trabar el scroll del body cuando el menú mobile está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <FaBuilding className="logo-icon" /> Terracota
        </Link>
        
        {/* Botón Hamburguesa / Cerrar (Solo visible en Mobile) */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links del Navbar (Sidebar en mobile) */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>Inicio</NavLink>
          <NavLink to="/catalogo" onClick={closeMenu}>Propiedades</NavLink>
          <NavLink to="/nosotros" onClick={closeMenu}>Nosotros</NavLink>
          <Link to="/contacto" className="btn-outline" onClick={closeMenu}>Contacto</Link>
        </div>
      </nav>

      {/* Overlay oscuro para fondo cuando el sidebar está abierto */}
      <div 
        className={`nav-overlay ${isOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Navbar;