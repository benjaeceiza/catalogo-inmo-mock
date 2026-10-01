import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandshake, FaChartLine, FaUsers, FaAward, FaBuilding, FaKey } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* 1. HERO SECTION */}
      <div className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>Nuestra Historia</h1>
          <p>Transformando el mercado inmobiliario con transparencia, tecnología y pasión.</p>
        </div>
      </div>

      {/* 2. HISTORIA (Texto + Imagen) */}
      <section className="story-section">
        <div className="story-content">
          <span className="tag">Quiénes Somos</span>
          <h2>Más de 15 años conectando familias con su hogar ideal</h2>
          <p>Terracota Real Estate nació con una misión clara: transparentar y agilizar el mercado inmobiliario en toda la región. Entendemos que comprar, vender o alquilar una propiedad no es solo una transacción financiera, es una de las decisiones más importantes en la vida de una persona.</p>
          <p>Hoy, lideramos el sector combinando el trato humano y personalizado de siempre, con las herramientas tecnológicas más avanzadas del mercado para que encuentres lo que buscás, en tiempo récord.</p>
        </div>
        <div className="story-image">
          <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" alt="Nuestra oficina" />
          <div className="experience-badge">
            <span className="years">15+</span>
            <span className="text">Años de<br/>Experiencia</span>
          </div>
        </div>
      </section>

      {/* 3. ESTADÍSTICAS */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-box">
            <FaBuilding className="stat-icon" />
            <h3>500+</h3>
            <p>Propiedades Gestionadas</p>
          </div>
          <div className="stat-box">
            <FaUsers className="stat-icon" />
            <h3>10k+</h3>
            <p>Clientes Felices</p>
          </div>
          <div className="stat-box">
            <FaAward className="stat-icon" />
            <h3>#1</h3>
            <p>Agencia en la Región</p>
          </div>
          <div className="stat-box">
            <FaKey className="stat-icon" />
            <h3>2.5k</h3>
            <p>Llaves Entregadas</p>
          </div>
        </div>
      </section>

      {/* 4. VALORES */}
      <section className="values-section">
        <div className="section-header-center">
          <h2>Nuestros Pilares</h2>
          <p>Lo que nos define y nos hace diferentes</p>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="icon-wrapper"><FaHandshake /></div>
            <h3>Transparencia Total</h3>
            <p>Sin letra chica. Te acompañamos en todo el proceso legal y financiero para que operes con total seguridad.</p>
          </div>
          <div className="value-card">
            <div className="icon-wrapper"><FaChartLine /></div>
            <h3>Innovación</h3>
            <p>Utilizamos tecnología de punta y análisis de datos para tasar tu propiedad al valor real y venderla más rápido.</p>
          </div>
          <div className="value-card">
            <div className="icon-wrapper"><FaUsers /></div>
            <h3>Trato Humano</h3>
            <p>Detrás de cada operación hay personas. Nuestro equipo de asesores está disponible 24/7 para tus consultas.</p>
          </div>
        </div>
      </section>

      {/* 5. EL EQUIPO */}
      <section className="team-section">
        <div className="section-header-center">
          <h2>Conocé a Nuestro Equipo</h2>
          <p>Los profesionales detrás de cada operación exitosa</p>
        </div>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" alt="CEO" />
            <h4>Martín Rodríguez</h4>
            <p>CEO & Fundador</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" alt="Directora Comercial" />
            <h4>Laura Fernández</h4>
            <p>Directora Comercial</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" alt="Asesor Legal" />
            <h4>Diego Álvarez</h4>
            <p>Asesor Legal Corporativo</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" alt="Agente Inmobiliaria" />
            <h4>Sofía Ruiz</h4>
            <p>Agente Inmobiliaria Senior</p>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION FINAL */}
      <section className="about-cta">
        <h2>¿Listo para dar el siguiente paso?</h2>
        <p>Contactanos hoy mismo y empezá a vivir la experiencia Terracota.</p>
        <div className="cta-buttons">
          <Link to="/catalogo" className="btn-primary">Ver Propiedades</Link>
          <Link to="/contacto" className="btn-outline-white">Contactar Asesor</Link>
        </div>
      </section>
    </div>
  );
};

export default About;