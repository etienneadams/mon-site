import React from "react";
import Footer from "../components/footer.tsx";
import maintenance from "../assets/mountain_landscape.png";

const InMaintenancePage = () => {

    // CSS
    const bodyStyle: React.CSSProperties = {
        height: '80vh',
        position: 'relative', // Assure que les éléments enfants soient positionnés relativement à celui-ci
        backgroundImage: `url(${maintenance})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        //filter: 'blur(4px)', // Applique le flou à l'arrière-plan seulement
    };

    const divStyle: React.CSSProperties = {
        position: 'absolute', // Positionne le texte par rapport à son conteneur parent
        top: '50%', // Place le texte au milieu de son conteneur parent verticalement
        left: '50%', // Place le texte au milieu de son conteneur parent horizontalement
        transform: 'translate(-50%, -50%)', // Centre le texte
        backdropFilter: 'blur(4px)', // Applique le flou au texte seulement
        width: '100%',
        height: '100%', 
    };

    const textStyle: React.CSSProperties = {
        color: 'white',
        textAlign: 'center',
        lineHeight: '50vh',
        fontFamily: 'helvetica',
        fontSize: '36px',
    };

    return (
        <>
            <body style={bodyStyle}>
                <div style={divStyle}>
                    <h2 style={textStyle}>Page en maintenance</h2>                 
                    <p style={{color: 'white', textAlign: 'center', fontSize: '30px', marginTop: '-40px', fontFamily: 'Trebuchet MS'}}> Navré de la gêne occasionnée</p>
                    <p style={{fontFamily: 'Brush Script MT', color: 'white', fontSize: '30px', textAlign: 'center', paddingTop: '25px'}}> Bientôt de retour !</p>
                </div>
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default InMaintenancePage;
