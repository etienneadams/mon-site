import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import React from "react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Colors from "../../colors/colors.tsx";
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';


type Props = {
    title: string,
    content: string,
    onClick: () => void,
    secretWord?: string,
};

const EndGameDialog: FunctionComponent<Props> = (props: Props) => {

    // CSS
    const colors = Colors();

    const dialogTitleStyle: React.CSSProperties = {
        display: 'flex', 
        justifyContent: 'center', 
        color: 'white', 
        backgroundColor: colors.mainGreen, 
        margin: '10px', 
        borderRadius: '10px',
    };

    return (
        <Dialog open={true} >
                    <DialogTitle style={dialogTitleStyle}>{props.title} !</DialogTitle>
                    <DialogContent>
                        {props.content} ! 
                    </DialogContent>
                    {props.secretWord && (
                        <DialogContent>
                            Le mot secret était <b>{props.secretWord}</b> 
                        </DialogContent>
                    )}
                    <DialogActions style={{display: 'flex', justifyContent: 'center'}}>
                        <IconButton component={ReplayRoundedIcon} style={{fontSize: '50px', color: colors.mainGreen}} onClick={props.onClick}></IconButton>
                        <Link to="/jeux">
                            <IconButton component={HouseRoundedIcon} style={{fontSize: '50px', color: colors.mainGreen}}></IconButton>
                        </Link>
                    </DialogActions>
                </Dialog>
    );
}

export default EndGameDialog;