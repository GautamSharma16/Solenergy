import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Offices from './pages/Offices';
import Sustainability from './pages/Sustainability';
import LearnSolar from './pages/LearnSolar';
import Documents from './pages/Documents';
import Rooftops from './pages/Rooftops';
import CommercialIndustrial from './pages/CommercialIndustrial';
import Institutional from './pages/Institutional';
import SolarCarport from './pages/SolarCarport';
import SolarFarms from './pages/SolarFarms';
import SolarPark from './pages/SolarPark';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import LargeProjects from './pages/LargeProjects';
import News from './pages/News';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import DealerLocator from './pages/DealerLocator';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/about-us/offices" element={<Offices />} />
          <Route path="/about-us/sustainability" element={<Sustainability />} />
          <Route path="/about-us/company-milestones" element={<Sustainability />} />
          <Route path="/about-us/learn-about-solar" element={<LearnSolar />} />
          <Route path="/about-us/company-documents" element={<Documents />} />
          
          {/* Solutions */}
          <Route path="/rooftops" element={<Rooftops />} />
          <Route path="/commercial-industrial" element={<CommercialIndustrial />} />
          <Route path="/institutional" element={<Institutional />} />
          <Route path="/solar-carport" element={<SolarCarport />} />
          <Route path="/solar-farms" element={<SolarFarms />} />
          <Route path="/solar-park" element={<SolarPark />} />
          
          {/* Products */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          
          {/* Projects & News */}
          <Route path="/large-projects" element={<LargeProjects />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dealer-locator" element={<DealerLocator />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
