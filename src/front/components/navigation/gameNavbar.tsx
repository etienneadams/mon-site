import * as React from "react";
import { FunctionComponent } from "react";
import logo from '../../assets/etienne-adamczuk-logo.png';
import { Link, useLocation } from "react-router-dom";
import Colors from "../../colors/colors.tsx";
import InfoIcon from '@mui/icons-material/Info';
import { IconButton } from "@mui/material";

const GameNavbar: FunctionComponent = () => {

    const location = useLocation(); // Utilisation de useLocation pour accéder à l'URL

    // Fonction pour traiter les espaces dans le titre du jeu
    const processGameTitle = (title: string) => {
        // Remplace les espaces par des caractères spéciaux (%20)
        return encodeURIComponent(title);
    };

    const gameTitleFromPath = location.pathname.split('/').pop(); // Récupération du dernier segment de l'URL
    const decodedGameTitle = decodeURIComponent(gameTitleFromPath || ''); // Décodage du titre du jeu


    // CSS
    const colors = Colors();

    const divStyle: React.CSSProperties = {
        backgroundColor: colors.lighterGray,
        display: 'flex',
        alignItems: 'center',
    };

    const imgStyle: React.CSSProperties = {
        height: '10vh',
        paddingLeft: '10px',
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '20px',
        margin: 'auto',
    };


    return (
        <div style={divStyle}>
            <Link to={"/accueil"}>
                <img style={imgStyle} src={logo} alt="logo" />
            </Link>
            <div style={titleStyle}>
                {decodedGameTitle}
            </div>
            <IconButton component={InfoIcon} color="success" style={{marginRight: '10px', fontSize: '40px'}}/>
            
        </div>
    );
};

export default GameNavbar;
