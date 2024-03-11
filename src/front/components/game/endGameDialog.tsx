import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import React from "react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Colors from "../../colors/colors.tsx";
import Icons from "./icons.tsx";


type Props = {
    title: string,
    content: string,
    onClick: () => void,
    secretWord?: string,
};

const EndGameDialog: FunctionComponent<Props> = (props: Props) => {
    const icons = Icons()
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
                        <IconButton component={icons.endGameDialogReplay} style={{fontSize: '50px', color: colors.mainGreen}} onClick={props.onClick}></IconButton>
                        <Link to="/jeux">
                            <IconButton component={icons.endGameDialogHouse} style={{fontSize: '50px', color: colors.mainGreen}}></IconButton>
                        </Link>
                    </DialogActions>
                </Dialog>
    );
}

export default EndGameDialog;