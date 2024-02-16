import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Service
import ProduitService from '../Services/Produits';
// Style
import '../Styles/ProduitsStyle.css';


const ProduitComponent = () => {
    const [produits, setProduits] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await ProduitService.GetJeux();
                setProduits(response.data);
            } catch (e) {
                console.log(e);
            }
        };

        fetchProduits();
    }, []);

    return (
        <div className='Produit_total_Presentation' >
          {produits.map((produit, index) => (
            <div key={index} className='Produit_Presentation' onClick={() => {navigate("/Details/"+produit.Id_Produits)}}>
              <img className='Produit_img' src={produit.Image} alt='Produit_img' />
              <p>{produit.Titre}</p>  
              <p>Prix: {produit.Prix}€</p>
            </div>
          ))}
        </div>
      );
      
};

export default ProduitComponent;
