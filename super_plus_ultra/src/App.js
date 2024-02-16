import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
// PAGES
import AccueilPage from '../src/Pages/AccueilPage';
import ConsolePage from '../src/Pages/ConsolePage';
import JeuxPage from '../src/Pages/JeuxPage';
import AccessoirePage from '../src/Pages/AccessoirePage';
import All_InPage from '../src/Pages/All_InPage';
import MagazinePage from '../src/Pages/MagazinePage';
import ProduitDetails from '../src/Pages/ProduitsDetailsPage';
import PanierPage from '../src/Pages/PanierPage';
import ConnectionPage from '../src/Pages/ConnectionPage';
import InscriptionPage from '../src/Pages/InscriptionPage';
import ContactPage from '../src/Pages/ContactPage';
import ProfilPage from '../src/Pages/ProfilPage';
// COMPONENTS
import Header from './Components/HeaderComponent';
import Footer from './Components/FooterComponent';
// STYLES
import '../src/Styles/App.css';
import GlobalContext from "./Context/GlobalContext";


function App() {
  const [utilisateur, setUtilisateur] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <GlobalContext.Provider value={{ utilisateur, setUtilisateur, isAuthenticated, setIsAuthenticated, isAdmin, setIsAdmin }}>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path={'/accueil'} element={<AccueilPage />} />
        <Route path={'/Console'} element={<ConsolePage />} />
        <Route path={'/Jeux'} element={<JeuxPage />} />
        <Route path={'/Accessoire'} element={<AccessoirePage />} />
        <Route path={'/All_In'} element={<All_InPage />} />
        <Route path={'/Magazine'} element={<MagazinePage />} />
        <Route path={'/Details/:id'} element={<ProduitDetails />} />
        <Route path={'/Connection'} element={<ConnectionPage />} />
        <Route path={'/inscription'} element={<InscriptionPage />} />
        <Route path={'/Panier/:id_utilisateur'} element={<PanierPage />} />
        <Route path={'/Contact'} element={<ContactPage />} />
        <Route path={'/Profil/:id'} element={<ProfilPage />} />
      </Routes>
      <Footer />
  </BrowserRouter>
  </GlobalContext.Provider>
  );
}

export default App;
