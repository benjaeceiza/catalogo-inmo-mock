import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus, FaPause, FaPlay, FaHome, FaChartPie, FaSignOutAlt, FaBuilding, FaTag } from 'react-icons/fa';
import './AdminView.css';

// Banco de imágenes premium para la maqueta
const MOCK_IMAGES = [
  // Exteriores y Fachadas
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  // Livings y Salas de Estar
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
  // Cocinas y Comedores
  "https://images.unsplash.com/photo-1556912172-45b7ee88c227?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80",
  // Dormitorios y Baños
  "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  // Piletas / Patio
  "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80"
];
const AdminView = ({ properties, setProperties }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProp, setEditingProp] = useState(null);
  
  // Estado del formulario
  const [formData, setFormData] = useState({
    title: '', description: '', operation: 'Venta', type: 'Casa', price: '', currency: 'USD',
    city: '', address: '', bedrooms: '', bathrooms: '', sqft_covered: ''
  });

  // Estadísticas rápidas
  const totalProps = properties.length;
  const activeProps = properties.filter(p => p.isActive !== false).length;
  const suspendedProps = totalProps - activeProps;

  // Manejador del Formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Abrir Modal (Crear o Editar)
  const openModal = (prop = null) => {
    if (prop) {
      setFormData({
        title: prop.title, description: prop.description, operation: prop.operation, type: prop.type,
        price: prop.price, currency: prop.currency, city: prop.location.city, address: prop.location.address,
        bedrooms: prop.features.bedrooms, bathrooms: prop.features.bathrooms, sqft_covered: prop.features.sqft_covered
      });
      setEditingProp(prop);
    } else {
      setFormData({
        title: '', description: '', operation: 'Venta', type: 'Casa', price: '', currency: 'USD',
        city: '', address: '', bedrooms: '', bathrooms: '', sqft_covered: ''
      });
      setEditingProp(null);
    }
    setIsModalOpen(true);
  };

  // Guardar Propiedad
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingProp) {
      // Actualizar existente
      const updatedProperties = properties.map(p => 
        p.id === editingProp.id ? {
          ...p,
          title: formData.title, description: formData.description, operation: formData.operation, type: formData.type,
          price: Number(formData.price), currency: formData.currency,
          location: { ...p.location, city: formData.city, address: formData.address },
          features: { ...p.features, bedrooms: Number(formData.bedrooms), bathrooms: Number(formData.bathrooms), sqft_covered: Number(formData.sqft_covered) }
        } : p
      );
      setProperties(updatedProperties);
    } else {
      // Obtener 3 imágenes aleatorias
      const randomImages = [...MOCK_IMAGES].sort(() => 0.5 - Math.random()).slice(0, 3);
      
      // Crear nueva
      const newProp = {
        id: `prop-${Date.now()}`,
        title: formData.title, description: formData.description, operation: formData.operation, type: formData.type,
        price: Number(formData.price), currency: formData.currency,
        location: { city: formData.city, province: "San Luis", address: formData.address },
        features: { bedrooms: Number(formData.bedrooms), bathrooms: Number(formData.bathrooms), garage: 1, sqft_total: Number(formData.sqft_covered) + 20, sqft_covered: Number(formData.sqft_covered) },
        images: randomImages,
        amenities: ["Seguridad", "Luminoso"],
        isFeatured: true,
        isActive: true
      };
      setProperties([newProp, ...properties]);
    }
    setIsModalOpen(false);
  };

  // Acciones Rápidas
  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que querés eliminar esta propiedad para siempre?")) {
      setProperties(properties.filter(p => p.id !== id));
    }
  };

  const handleToggleStatus = (id) => {
    setProperties(properties.map(p => {
      if (p.id === id) return { ...p, isActive: p.isActive === false ? true : false };
      return p;
    }));
  };

  return (
    <div className="admin-layout">
      {/* Sidebar / Topbar del Admin */}
      <nav className="admin-nav">
        <div className="admin-brand">
          <FaBuilding className="admin-brand-icon" /> Terracota Admin
        </div>
        <div className="admin-nav-links">
          <Link to="/" className="btn-view-site"><FaHome /> Ver Sitio Web</Link>
          <button className="btn-logout"><FaSignOutAlt /> Salir</button>
        </div>
      </nav>

      <div className="admin-content">
        <div className="admin-header-row">
          <div>
            <h1>Dashboard Inmobiliario</h1>
            <p>Gestioná tus propiedades, precios y estados.</p>
          </div>
          <button className="btn-create" onClick={() => openModal()}><FaPlus /> Cargar Propiedad</button>
        </div>

        {/* Tarjetas de Estadísticas */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon-box blue"><FaHome /></div>
            <div className="stat-info">
              <h3>{totalProps}</h3>
              <p>Total Propiedades</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-box green"><FaChartPie /></div>
            <div className="stat-info">
              <h3>{activeProps}</h3>
              <p>Publicaciones Activas</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-box orange"><FaPause /></div>
            <div className="stat-info">
              <h3>{suspendedProps}</h3>
              <p>Pausadas / Suspendidas</p>
            </div>
          </div>
        </div>

        {/* Tabla de Propiedades */}
        <div className="table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Operación</th>
                <th>Precio</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((prop) => (
                <tr key={prop.id} className={prop.isActive === false ? 'row-suspended' : ''}>
                  <td>
                    <div className="prop-cell">
                      <img src={prop.images[0]} alt="thumb" className="prop-thumb" />
                      <div className="prop-cell-info">
                        <strong>{prop.title}</strong>
                        <span>{prop.location.city} - {prop.type}</span>
                      </div>
                    </div>
                  </td>
                  <td><span className={`badge-op ${prop.operation.toLowerCase()}`}>{prop.operation}</span></td>
                  <td className="price-cell">{prop.currency} {prop.price.toLocaleString()}</td>
                  <td>
                    {prop.isActive === false 
                      ? <span className="badge-status suspended">Pausada</span> 
                      : <span className="badge-status active">Activa</span>}
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn toggle" onClick={() => handleToggleStatus(prop.id)} title={prop.isActive === false ? "Activar" : "Pausar"}>
                        {prop.isActive === false ? <FaPlay /> : <FaPause />}
                      </button>
                      <button className="action-btn edit" onClick={() => openModal(prop)} title="Editar"><FaEdit /></button>
                      <button className="action-btn delete" onClick={() => handleDelete(prop.id)} title="Eliminar"><FaTrash /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {properties.length === 0 && (
                <tr><td colSpan="5" className="empty-state">No hay propiedades cargadas.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de Formulario */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{editingProp ? '✏️ Editar Propiedad' : '🏡 Nueva Propiedad'}</h2>
              <button className="btn-close-modal" onClick={() => setIsModalOpen(false)}>×</button>
            </div>
            
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="form-grid">
                <div className="form-group full-width">
                  <label>Título de la publicación</label>
                  <input type="text" name="title" value={formData.title} onChange={handleInputChange} required placeholder="Ej: Hermosa Casa con Pileta" />
                </div>
                
                <div className="form-group">
                  <label>Operación</label>
                  <select name="operation" value={formData.operation} onChange={handleInputChange}>
                    <option value="Venta">Venta</option>
                    <option value="Alquiler">Alquiler</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Tipo de Inmueble</label>
                  <select name="type" value={formData.type} onChange={handleInputChange}>
                    <option value="Casa">Casa</option>
                    <option value="Departamento">Departamento</option>
                    <option value="Terreno">Terreno</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Moneda</label>
                  <select name="currency" value={formData.currency} onChange={handleInputChange}>
                    <option value="USD">USD</option>
                    <option value="ARS">ARS</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Precio</label>
                  <input type="number" name="price" value={formData.price} onChange={handleInputChange} required />
                </div>

                <div className="form-group">
                  <label>Ciudad</label>
                  <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
                </div>

                <div className="form-group">
                  <label>Dirección / Barrio</label>
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
                </div>

                <div className="form-group">
                  <label>Habitaciones</label>
                  <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                  <label>Baños</label>
                  <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                  <label>Metros Cubiertos (m²)</label>
                  <input type="number" name="sqft_covered" value={formData.sqft_covered} onChange={handleInputChange} />
                </div>

                <div className="form-group full-width">
                  <label>Descripción detallada</label>
                  <textarea name="description" rows="3" value={formData.description} onChange={handleInputChange} required></textarea>
                </div>
              </div>

              {!editingProp && (
                <div className="image-notice">
                  <FaTag /> <strong>Nota Maqueta:</strong> Al guardar, se asignarán 3 imágenes premium aleatorias automáticamente.
                </div>
              )}

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                <button type="submit" className="btn-save">{editingProp ? 'Guardar Cambios' : 'Publicar Propiedad'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminView;