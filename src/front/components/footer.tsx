import React from 'react';
import Colors from '../colors/colors.tsx';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const firstName = 'Etienne';
    const lastName = 'ADAMCZUK';

    // CSS
    const colors = Colors();

    const footerStyle: React.CSSProperties = {
        padding: '10px',
        backgroundColor: colors.lighterGray,
        position: 'fixed',
        bottom: '0',
        width: '100%',
    };

    const footerContentStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between', // Pour espacer les éléments
        alignItems: 'center', // Pour centrer le texte verticalement
    };

    return (
        <div style={footerStyle}>
            <div style={footerContentStyle}>
                <p>© Tous droits réservés {currentYear}</p>
                <p>by {firstName} {lastName}</p>
            </div>
        </div>
    );
};

export default Footer;
