import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const firstName = 'VotrePrénom';
    const lastName = 'VotreNom';

    // CSS
    const footerStyle: React.CSSProperties = {
        padding: '10px',
        backgroundColor: '#f2f2f2',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        height: '5%',
    };

    const footerContentStyle: React.CSSProperties = {

    };


    return (
        <footer style={footerStyle}>
            <div style={footerContentStyle}>
                <p>Sigle Certified</p>
                <p>Tous droits réservés © {currentYear}</p>
                <p>{firstName} {lastName}</p>    
            </div>
        
        </footer>
    );
};



export default Footer;

