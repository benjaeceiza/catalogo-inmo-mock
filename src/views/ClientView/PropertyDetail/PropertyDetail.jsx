import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaBed, FaBath, FaRulerCombined, FaCar, FaMapMarkerAlt, FaWhatsapp, FaArrowLeft, FaCheck } from 'react-icons/fa';
import './PropertyDetail.css';

const PropertyDetail = ({ properties }) => {
    const { id } = useParams();
    const property = properties.find((prop) => prop.id === id);

    // Efecto para que cuando entres al detalle, la página suba al inicio automáticamente
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!property) {
        return (
            <div className="not-found-container">
                <h2>Ups, propiedad no encontrada</h2>
                <Link to="/catalogo" className="btn-outline">Volver al catálogo</Link>
            </div>
        );
    }

    // Lógica inteligente de imágenes (Fallback por si el JSON no tiene 3 fotos)
    const mainImage = property.images[0] || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80";
    const sideImage1 = property.images[1] || "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"; // Living moderno
    const sideImage2 = property.images[2] || "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80"; // Interior industrial 100% verificado

    const wspNumber = "5491123456789";
    const wspMessage = `Hola Terracota! Estoy interesado en la propiedad: ${property.title} (ID: ${property.id}). Me gustaría recibir más información.`;
    const wspLink = `https://wa.me/${wspNumber}?text=${encodeURIComponent(wspMessage)}`;

    return (
        <div className="property-detail-page">
            <div className="detail-container">

                <Link to="/catalogo" className="back-link"><FaArrowLeft /> Volver al catálogo</Link>

                {/* Cabecera */}
                <div className="detail-header">
                    <div className="header-info">
                        <div className="badges-wrapper">
                            <span className={`status-badge-lg ${property.operation.toLowerCase()}`}>{property.operation}</span>
                            <span className="type-badge">{property.type}</span>
                        </div>
                        <h1 className="detail-title">{property.title}</h1>
                        <p className="detail-location"><FaMapMarkerAlt className="loc-icon" /> {property.location.address}, {property.location.city}, {property.location.province}</p>
                    </div>
                    <div className="detail-price-box">
                        <h2 className="detail-price">{property.currency} {property.price.toLocaleString()}</h2>
                    </div>
                </div>

                {/* Galería Premium */}
                <div className="gallery-grid">
                    <div className="main-image">
                        <img src={mainImage} alt="Fachada principal" />
                    </div>
                    <div className="side-images">
                        <img src={sideImage1} alt="Interior 1" />
                        <img src={sideImage2} alt="Interior 2" />
                    </div>
                </div>

                {/* Contenido (2 Columnas) */}
                <div className="detail-content-layout">

                    <div className="main-details">
                        {/* Barra de Iconos */}
                        <div className="features-bar">
                            <div className="feature-item">
                                <div className="feat-icon-box"><FaBed /></div>
                                <span>{property.features.bedrooms} Dorm.</span>
                            </div>
                            <div className="feature-item">
                                <div className="feat-icon-box"><FaBath /></div>
                                <span>{property.features.bathrooms} Baños</span>
                            </div>
                            <div className="feature-item">
                                <div className="feat-icon-box"><FaCar /></div>
                                <span>{property.features.garage} Cocheras</span>
                            </div>
                            <div className="feature-item">
                                <div className="feat-icon-box"><FaRulerCombined /></div>
                                <span>{property.features.sqft_total} m² Totales</span>
                            </div>
                        </div>

                        <div className="description-section">
                            <h3>Descripción de la propiedad</h3>
                            <p>{property.description}</p>
                            <p>Esta propiedad es ideal para quienes buscan comodidad, excelente ubicación y calidad de vida. No dudes en consultarnos para coordinar una visita guiada con nuestros asesores.</p>
                        </div>

                        <div className="amenities-section">
                            <h3>Características Adicionales</h3>
                            <ul className="amenities-list">
                                {property.amenities.map((amenity, index) => (
                                    <li key={index}><FaCheck className="check-icon" /> {amenity}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Tarjeta de Contacto Lateral */}
                    <div className="contact-sidebar">
                        <div className="contact-card">
                            <h3>¿Te interesa esta propiedad?</h3>
                            <p>Un asesor inmobiliario está listo para ayudarte. Contactanos ahora y agendá tu visita.</p>

                            <a href={wspLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-large">
                                <FaWhatsapp className="wsp-icon" />
                                Contactar por WhatsApp
                            </a>
                            <button className="btn-outline-full">Consultar por Email</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PropertyDetail;