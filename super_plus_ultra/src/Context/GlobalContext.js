import { createContext } from 'react';

const GlobalContext = createContext({
    utilisateur: null,
    setUtilisateur: (value) => {},
    isAuthenticated: false,
    setIsAuthenticated: (value) => {},
    isAdmin: false, 
    setIsAdmin: (value) => {}, 
});

export default GlobalContext;