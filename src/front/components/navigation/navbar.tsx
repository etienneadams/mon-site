import * as React from "react";
import { FunctionComponent, useState, useEffect } from "react";
import logo from '../../assets/etienne-adamczuk-logo.png';
import { Tabs, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Colors from "../../colors/colors.tsx";

type Props = {
    page: string;
};

const Navbar: FunctionComponent<Props> = (props: Props) => {
    const [value, setValue] = useState<string>(props.page);
    const navigate = useNavigate();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        navigate(`/${value}`);
        console.log(value);
    }, [value, navigate]);

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

    return (
        <div style={divStyle}>
            <img style={imgStyle} src={logo} alt="logo" />
            <div>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab value="accueil" label="Accueil" />
                    <Tab value="parcours" label="Parcours" />
                    <Tab value="jeux" label="Jeux" />
                    <Tab value="contact" label="Contact" />
                </Tabs>
            </div>
        </div>
    );
};

export default Navbar;