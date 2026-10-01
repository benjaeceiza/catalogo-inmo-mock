import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ClientView from './views/ClientView/ClientView';
import Home from './views/ClientView/Home/Home';
import Catalog from './views/ClientView/Catalog/Catalog';
import About from './views/ClientView/About/About';
import Contact from './views/ClientView/Contact/Contact';
import PropertyDetail from './views/ClientView/PropertyDetail/PropertyDetail';
import AdminView from './views/AdminView/AdminView';
import propertiesData from './data/properties.json';


function App() {
  const [properties, setProperties] = useState(propertiesData);

  return (
    <BrowserRouter>
      {/* Navbar temporal solo para que vos cambies entre admin y cliente rápido */}
      <nav className="dev-nav">
        <Link to="/">👁️ Vista Cliente</Link>
        <Link to="/admin">⚙️ Panel Admin</Link>
      </nav>

      <Routes>
        {/* Rutas del Cliente */}
        <Route path="/" element={<ClientView />}>
          <Route index element={<Home properties={properties} />} />
          <Route path="catalogo" element={<Catalog properties={properties} />} />
          <Route path="nosotros" element={<About />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="propiedad/:id" element={<PropertyDetail properties={properties} />} />
        </Route>

        {/* Ruta del Admin */}
        <Route 
          path="/admin" 
          element={<AdminView properties={properties} setProperties={setProperties} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;