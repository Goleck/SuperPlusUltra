import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProduitDetailsComponent from '../Components/ProduitsDetailsComponent';
import AdminModificationComponent from '../Components/AdminModificationComponent';
import ProduitService from '../Services/Produits';
import GlobalContext from '../Context/GlobalContext';
import '../Styles/PageStyle.css';

const ProduitDetailsPage = () => {
    const { id } = useParams();
    const [produit, setProduit] = useState({});
    const { utilisateur } = useContext(GlobalContext);

    useEffect(() => {
        const fetchProduit = async () => {
            try {
                const response = await ProduitService.GetDetailsById(id);
                setProduit(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des détails du produit :', error);
            }
        };

        fetchProduit();
    }, [id]);

    return (
        <div>
            <div className='Titre_Accueil'><h1>PRODUIT DETAILS</h1></div>
            <ProduitDetailsComponent produit={produit} />
            {utilisateur && utilisateur.is_Admin ? (
                <AdminModificationComponent produit={produit} />
            ) : (
                null
            )}
        </div>
    );
};

export default ProduitDetailsPage;
