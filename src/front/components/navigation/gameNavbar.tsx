import * as React from "react";
import { FunctionComponent, useState } from "react";
import logo from '../../assets/etienne-adamczuk-logo.png';
import { Link, useLocation } from "react-router-dom";
import Colors from "../../colors/colors.tsx";
import InfoIcon from '@mui/icons-material/Info';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Drawer, Icon, IconButton, List, ListItem } from "@mui/material";

type Props = {
    drawerGoal: string,
    drawerHowPrePhrase?: string,
    drawerHow: string[],
    drawerEnd: string,
};

const GameNavbar: FunctionComponent<Props> = (props: Props) => {

    const location = useLocation(); // Utilisation de useLocation pour accéder à l'URL
    const [ drawerOpened, setDrawerOpened ] = useState<boolean>(false);

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

    const drawerStyle: React.CSSProperties = {
        margin: '10px',
        width: '300px',
    };

    const drawerSubtitleStyle: React.CSSProperties = {
        backgroundColor: colors.mainGreen, 
        color: 'white', 
        borderRadius: '5px', 
        paddingLeft: '20px',
    };


    return (
        <div style={divStyle}>
            <Link to={"/accueil"}>
                <img style={imgStyle} src={logo} alt="logo" />
            </Link>
            <div style={titleStyle}>
                {decodedGameTitle}
            </div>
            <IconButton component={InfoIcon} color="success" onClick={() => setDrawerOpened(true)} style={{marginRight: '10px', fontSize: '40px'}}/>
            <Drawer style={drawerStyle} anchor="right" open={drawerOpened} onClose={() => setDrawerOpened(false)}> 
                <div style={drawerStyle}>
                    <h2 style={{color: colors.mainGreen, justifyContent: 'center', display: 'flex'}}> Règles </h2>
                    <h3 style={drawerSubtitleStyle}> But du jeu</h3>
                    <p>{props.drawerGoal}</p>
                    <h3 style={drawerSubtitleStyle}> Comment jouer ?</h3>
                    <p>{props.drawerHowPrePhrase}</p>
                    <List>
                        {props.drawerHow.map((item, index) => (
                            <ListItem key={index}>{index+1}° {item}</ListItem>
                        ))}
                    </List>
                    <h3 style={drawerSubtitleStyle}> Fin du jeu</h3>
                    <p>{props.drawerEnd}</p>
                    <b style={{justifyContent: 'center', display: 'flex'}}> Bon jeu ! <Icon style={{paddingLeft: '10px', fontSize: '20px', color: colors.mainGreen}} component={ThumbUpIcon} /></b>
                </div>
            </Drawer>
        </div>
    );
};

export default GameNavbar;
