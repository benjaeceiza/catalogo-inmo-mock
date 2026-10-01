import React from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaStar, FaBuilding, FaTree, FaCity, FaHome } from 'react-icons/fa';
import './Home.css';

const Home = ({ properties }) => {
  // Filtramos solo las destacadas para la home
  const featuredProperties = properties.filter(prop => prop.isFeatured).slice(0, 3);

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <header className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Encontrá el lugar de tus sueños</h1>
          <p>Propiedades exclusivas seleccionadas para vos.</p>
          
          <div className="glass-search-bar">
            <input type="text" placeholder="¿Dónde querés vivir? (Ej: Centro)" className="search-input" />
            <select className="search-select">
              <option value="">Tipo de Propiedad</option>
              <option value="casa">Casa</option>
              <option value="departamento">Departamento</option>
            </select>
            <button className="btn-primary">Buscar</button>
          </div>
        </div>
      </header>

      {/* 2. ZONAS Y CATEGORÍAS */}
      <section className="categories-section">
        <div className="section-header-center">
          <h2>Explorá por Categorías</h2>
          <p>Encontrá rápidamente lo que estás buscando</p>
        </div>
        <div className="categories-grid">
          <div className="category-card casa">
            <div className="cat-overlay"></div>
            <FaHome className="cat-icon" />
            <h3>Casas Familiares</h3>
          </div>
          <div className="category-card depto">
            <div className="cat-overlay"></div>
            <FaCity className="cat-icon" />
            <h3>Deptos Céntricos</h3>
          </div>
          <div className="category-card lote">
            <div className="cat-overlay"></div>
            <FaTree className="cat-icon" />
            <h3>Terrenos y Lotes</h3>
          </div>
          <div className="category-card inversion">
            <div className="cat-overlay"></div>
            <FaBuilding className="cat-icon" />
            <h3>Inversiones</h3>
          </div>
        </div>
      </section>

      {/* 3. PROPIEDADES DESTACADAS */}
      <section className="catalog-section">
        <div className="section-header">
          <div>
            <h2>Propiedades Destacadas</h2>
            <p className="subtitle">Las mejores oportunidades del mercado actual</p>
          </div>
          <Link to="/catalogo" className="btn-outline">Ver todo el catálogo</Link>
        </div>

        <div className="property-grid">
          {featuredProperties.map((prop) => (
            <div key={prop.id} className="property-card">
              <div className="card-image">
                 <img src={prop.images[0]} alt={prop.title} />
                 <span className={`status-badge ${prop.operation.toLowerCase()}`}>{prop.operation}</span>
              </div>
              <div className="card-body">
                <h4 className="price">{prop.currency} {prop.price.toLocaleString()}</h4>
                <h3 className="title">{prop.title}</h3>
                <p className="location"><FaMapMarkerAlt className="loc-icon"/> {prop.location.address}, {prop.location.city}</p>
                
                <div className="features-row">
                  <span><FaBed /> {prop.features.bedrooms} hab.</span>
                  <span><FaBath /> {prop.features.bathrooms} bañ.</span>
                  <span><FaRulerCombined /> {prop.features.sqft_total}m²</span>
                </div>
                
                <Link to={`/propiedad/${prop.id}`} className="btn-details">
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BANNER TASACIÓN (CALL TO ACTION) */}
      <section className="valuation-banner">
        <div className="valuation-content">
          <h2>¿Querés vender o alquilar tu propiedad?</h2>
          <p>Confiá en expertos. Tasamos tu inmueble al valor real del mercado y te ayudamos a cerrar la operación rápido y seguro.</p>
          <Link to="/contacto" className="btn-primary-white">Solicitar Tasación Sin Cargo</Link>
        </div>
      </section>

      {/* 5. MINI ABOUT */}
      <section className="mini-about-section">
        <div className="mini-about-image">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" alt="Agentes Inmobiliarios" />
        </div>
        <div className="mini-about-content">
          <span className="tag">Por qué elegirnos</span>
          <h2>Más de 15 años haciendo realidad el sueño de tu hogar</h2>
          <p>En Terracota Real Estate no solo vendemos propiedades, construimos relaciones de confianza. Nuestro equipo de profesionales te acompaña en cada paso, brindándote seguridad jurídica y tranquilidad.</p>
          <ul>
            <li>✔️ Atención personalizada 24/7</li>
            <li>✔️ Asesoramiento legal y financiero</li>
            <li>✔️ Catálogo exclusivo verificado</li>
          </ul>
          <Link to="/nosotros" className="btn-outline">Conocé nuestra historia</Link>
        </div>
      </section>

      {/* 6. TESTIMONIOS */}
      <section className="testimonials-section">
        <div className="section-header-center">
          <h2>Lo que dicen nuestros clientes</h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
            <p>"Vendieron mi casa en Villa Mercedes en menos de un mes. Excelentes profesionales, se encargaron de todos los papeles."</p>
            <h4>— Carlos Gómez</h4>
          </div>
          <div className="testimonial-card">
            <div className="stars"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
            <p>"Nos ayudaron a encontrar el departamento perfecto para nuestro hijo estudiante. Super atentos y transparentes."</p>
            <h4>— María Laura López</h4>
          </div>
          <div className="testimonial-card">
            <div className="stars"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
            <p>"Invertí en un terreno en Merlo gracias a su asesoramiento. Un servicio nivel premium de principio a fin."</p>
            <h4>— Roberto Sánchez</h4>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;