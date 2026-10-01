import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa'; // Importamos el icono
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import './ClientView.css';

const ClientView = () => {
  // Podés configurar el número del cliente acá
  const wspNumber = "5491123456789"; 
  const defaultMessage = "Hola Terracota! Vengo desde su página web y quiero hacer una consulta.";
  const wspLink = `https://wa.me/${wspNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="client-layout">
      <Navbar />
      
      <main className="main-content">
        <Outlet />
      </main>

      <Footer />

      {/* BOTÓN WHATSAPP FLOTANTE */}
      <a 
        href={wspLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-wsp"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="floating-wsp-icon" />
      </a>
    </div>
  );
};

export default ClientView;