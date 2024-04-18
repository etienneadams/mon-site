import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const firstName = 'Etienne';
    const lastName = 'ADAMCZUK';

    // CSS

    const footerStyle: React.CSSProperties = {
        padding: '1px',
        bottom: '0',
    };

    const footerContentStyle: React.CSSProperties = {
        alignItems: 'center',
        textAlign: 'center',
    };

    return (
        <div style={footerStyle}>
            <div style={footerContentStyle}>
                <p>© {currentYear} - by {firstName} {lastName}</p>
            </div>
        </div>
    );
};

export default Footer;
