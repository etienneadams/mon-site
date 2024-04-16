import React from "react";
import { FunctionComponent, useState } from "react";
import Colors from "../../colors/colors.tsx";
import { Button, ListItemIcon, ListItemText, Popover, MenuItem } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Icons from "./icons.tsx";

type Props = {
    buttonTitle: string,
    optionTitles: string[],
    onClick: (event) => void,
    pictures: IconDefinition[],
};

const MenuComponent: FunctionComponent<Props> = (props: Props) => {
    const icons = Icons();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // CSS
    const colors = Colors();

    const menuIconStyle: React.CSSProperties = {
        color: colors.mainGreen, 
    };

    return (
        <>
            <Button onClick={handleClick} style={{color: colors.mainGreen, fontSize: '12px'}}>
                {props.buttonTitle} 
                {Boolean(anchorEl) ? 
                    <FontAwesomeIcon style={{paddingLeft: '5px', fontSize: '9px'}} icon={icons.demineurChevronDown} /> 
                    : <FontAwesomeIcon style={{paddingLeft: '5px', fontSize: '9px'}} icon={icons.demineurChevronRight} />}
            </Button>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {props.optionTitles.map((option, index) => (
                    <MenuItem key={index} onClick={props.onClick} data-value={index}>
                        <ListItemIcon>
                            <FontAwesomeIcon style={menuIconStyle} icon={props.pictures[index]} />
                        </ListItemIcon>
                        <ListItemText>{option}</ListItemText>
                    </MenuItem> 
                ))}
            </Popover>
        </>
    );
}

export default MenuComponent;
