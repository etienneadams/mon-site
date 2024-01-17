import * as React from "react";
import { FunctionComponent } from "react";
import logo from '../../assets/etienne-adamczuk-logo.png';
import { Tabs, Tab, AppBar } from "@mui/material";

const Navbar: FunctionComponent = () => {
    const [value, setValue] = React.useState('accueil');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    // CSS


    const imgStyle: React.CSSProperties = {
        width: '10%',
        paddingLeft: '10px',
    };

    return (
        <AppBar color="transparent">
            <img style={imgStyle} src={logo} alt="logo" />
            <Tabs value={value} onChange={handleChange} centered>
                <Tab value="accueil" label="Accueil" />
                <Tab value="parcours" label="Parcours" />
                <Tab value="jeux" label="Jeux" />
                <Tab value="contact" label="Contact" />
            </Tabs>
        </AppBar>
    );
};

export default Navbar;