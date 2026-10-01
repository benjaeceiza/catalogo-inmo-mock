import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contacto</h1>
        <p>Estamos acá para ayudarte a encontrar tu próximo hogar.</p>
      </div>

      <div className="contact-container">
        {/* Info de contacto */}
        <div className="contact-info">
          <h2>Información de Contacto</h2>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Nuestra Oficina</h4>
              <p>Centro, Villa Mercedes, San Luis</p>
            </div>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h4>Teléfono / WhatsApp</h4>
              <p>+54 9 11 2345-6789</p>
            </div>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>hola@terracota.com.ar</p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="contact-form-wrapper">
          <h2>Envianos un mensaje</h2>
          
          {/* Formulario estructurado y listo para recibir el action de Web3Forms */}
          <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
            {/* Descomentá esta línea y poné tu key cuando lo pases a producción */}
            {/* <input type="hidden" name="access_key" value="TU_ACCESS_KEY_ACA" /> */}
            
            <div className="form-group">
              <label htmlFor="name">Nombre completo</label>
              <input type="text" id="name" name="name" placeholder="Ej: Juan Pérez" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="juan@ejemplo.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows="5" placeholder="¡Hola! Me gustaría saber más sobre..." required></textarea>
            </div>

            <button type="submit" className="btn-primary btn-submit">Enviar Consulta</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;