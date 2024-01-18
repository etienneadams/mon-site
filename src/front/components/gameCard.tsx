import { Box, Button, Card, CardContent, Divider, Icon, List, ListItem } from "@mui/material";
import React from "react";
import { FunctionComponent } from "react";
import Colors from "../colors/colors.tsx";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Link } from "react-router-dom";

type Props = {
    title: string;
    rules: string;
    goal: string;
    image: string;
};

const GameCard: FunctionComponent<Props> = (props: Props) => {


    //CSS 

    const colors = Colors();

    const spanStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        width: '100%', 
        alignItems: 'center',
    };

    const cardContentStyle: React.CSSProperties = {
        textAlign: 'center', 
        margin: 'auto',
    };

    const titleStyle: React.CSSProperties = {
        fontWeight: 'bold',
        textAlign: 'center', 
        justifyItems: 'center',
    };

    const rulesStyle: React.CSSProperties = {
        textAlign: 'center', 
        marginBottom: '-20px', 
        marginTop: '-5px',
    };

    const imgStyle: React.CSSProperties = {
        width: '100%',
        height: 'auto',
    };

    const buttonStyle: React.CSSProperties = {
        color: colors.mainGreen,
        backgroundColor: colors.lighterGray,
        borderRadius: '20px',
        margin: '5px 0',
    };


    return (
        <Box color={colors.mainGreen} sx={{width: '60vw'}}>
            <Card>
                <span style={spanStyle}>
                    <CardContent style={cardContentStyle}>
                        <p style={titleStyle}>{props.title}</p>
                    </CardContent>
                    <Divider orientation="vertical" flexItem/> 
                    <CardContent>
                        <h4 style={rulesStyle}>Règles : </h4>
                        <List>
                            <ListItem style={{marginBottom: '-30px'}}>
                                <Icon component={SportsEsportsIcon}/>
                                <p style={{marginLeft: '10px'}}>{props.rules}</p>
                            </ListItem>
                            <ListItem style={{marginBottom: '-30px'}}>
                                <Icon component={EmojiEventsIcon} />
                                <p style={{marginLeft: '10px'}}>{props.goal}</p>
                            </ListItem>
                        </List>
                    </CardContent>
                    <Divider orientation="vertical" flexItem/> 
                    <CardContent>
                        <img src={props.image} alt="TicTacToe" style={imgStyle}/>
                    </CardContent>
                </span>
            </Card>
            <Link to={`/${props.title}`}>
                <Button style={buttonStyle}> Jouer </Button>
            </Link>
        </Box>
    )
};

export default GameCard;