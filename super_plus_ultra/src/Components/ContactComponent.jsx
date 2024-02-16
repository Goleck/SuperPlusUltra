// Style
import '../Styles/ContactStyle.css';


const ContactComponent = () => {
    return (
        <div className='Total_Contact'>
          <div className='Contact'>
            <h1>CONTACTEZ-NOUS PAR TELEPHONE</h1>
            <p>Rapide et efficace, pour tout demande. N'hésitez pas à nous appeller au :</p>
            <h2> +33 (0)2 41 35 38 12</h2>
          </div>
          <div className="Contact">
          <h1>CONTACTEZ-NOUS PAR MAIL</h1>
            <p>Ecrivez-nous sur l'adresse mail suivante :</p>
            <h2>SuperPlusUltra@Contact.com</h2>
          </div>
          <div className="Contact">
          <h1>CONTACTEZ-NOUS PAR COURRIER</h1>
            <p>Certes moin rapide mais tout aussi efficace, pour tout demande. N'hésitez pas à nous contacter à l'adresse suivante :</p>
            <h2>12 rue du pont 59000 LILLE</h2>
          </div>
        </div>
      );
      
};

export default ContactComponent;
