import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaSearch, FaFilter, FaTimes } from 'react-icons/fa';
import './Catalog.css';

const Catalog = ({ properties }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [operation, setOperation] = useState('Todos');
  const [propertyType, setPropertyType] = useState('Todos');
  
  // Nuevo estado para controlar si los filtros están visibles en celular
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Cada vez que entramos al catálogo, arranca arriba de todo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProperties = properties.filter((prop) => {
    const matchSearch = prop.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        prop.location.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchOperation = operation === 'Todos' || prop.operation === operation;
    const matchType = propertyType === 'Todos' || prop.type === propertyType;
    return matchSearch && matchOperation && matchType;
  });

  return (
    <div className="catalog-page">
      <div className="catalog-header">
        <h1>Catálogo de Propiedades</h1>
        <p>Encontrá la opción perfecta usando nuestros filtros avanzados.</p>
      </div>

      <div className="catalog-container">
        
        {/* Botón exclusivo para Mobile */}
        <div className="mobile-filter-toggle">
          <button 
            className="btn-outline-full" 
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            {showMobileFilters ? <FaTimes /> : <FaFilter />} 
            {showMobileFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
          </button>
        </div>

        {/* Sidebar de Filtros (Se oculta en mobile si showMobileFilters es false) */}
        <aside className={`filters-sidebar ${showMobileFilters ? 'open' : ''}`}>
          <div className="filters-card">
            <h3 className="desktop-only-title"><FaFilter /> Filtros</h3>
            
            <div className="filter-group">
              <label>Buscar</label>
              <div className="search-input-wrapper">
                <FaSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Ciudad o título..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="filter-group">
              <label>Operación</label>
              <div className="pills-container">
                <button className={operation === 'Todos' ? 'active' : ''} onClick={() => setOperation('Todos')}>Todos</button>
                <button className={operation === 'Venta' ? 'active' : ''} onClick={() => setOperation('Venta')}>Venta</button>
                <button className={operation === 'Alquiler' ? 'active' : ''} onClick={() => setOperation('Alquiler')}>Alquiler</button>
              </div>
            </div>

            <div className="filter-group">
              <label>Tipo de Inmueble</label>
              <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                <option value="Todos">Todos los tipos</option>
                <option value="Casa">Casas</option>
                <option value="Departamento">Departamentos</option>
                <option value="Terreno">Terrenos / Lotes</option>
              </select>
            </div>

            <button 
              className="btn-clear-filters"
              onClick={() => {
                setSearchTerm('');
                setOperation('Todos');
                setPropertyType('Todos');
              }}
            >
              Limpiar Filtros
            </button>
          </div>
        </aside>

        {/* Resultados */}
        <main className="catalog-results">
          <div className="results-info">
            <span>Mostrando <strong>{filteredProperties.length}</strong> propiedades</span>
          </div>

          {filteredProperties.length === 0 ? (
            <div className="no-results">
              <h2>Ups... no hay resultados</h2>
              <p>No encontramos propiedades que coincidan con tu búsqueda.</p>
              <button className="btn-primary" onClick={() => {
                setSearchTerm(''); setOperation('Todos'); setPropertyType('Todos');
              }}>Borrar filtros</button>
            </div>
          ) : (
            <div className="property-grid">
              {filteredProperties.map((prop) => (
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
          )}
        </main>
      </div>
    </div>
  );
};

export default Catalog;