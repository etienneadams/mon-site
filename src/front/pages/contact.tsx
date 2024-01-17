import React, { useState } from "react";
import Navbar from "../components/navigation/navbar.tsx";
import Footer from "../components/footer.tsx";
import Colors from "../colors/colors.tsx";
import { Alert, Box, Button, Card, CardContent, CardHeader, Dialog, DialogContent, DialogTitle, Divider, FormControl, FormControlLabel, FormLabel, Icon, Radio, RadioGroup, TextField } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";

const ContactPage = () => {
    const [open, setOpen] = useState(false);
    const [mailValue, setMailValue] = useState<string>();


    const handleOpen = () => {
        setOpen(!open);
    };

    const handleForm = () => {
        if (mailValue === undefined) {
            <Alert severity="error">

            </Alert>
        } else {

        }
    };


    //CSS
    const colors = Colors();

    const bodyStyle: React.CSSProperties = {
        backgroundColor: colors.lightGray,
        height: '75vh',
        alignItems: 'center',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
    };

    const cardStyle: React.CSSProperties = {
        //alignItems: 'center',
        //width: '20px',
        borderRadius: '20px',
    };

    const cardHeaderStyle: React.CSSProperties = {
        backgroundColor: colors.mainGreen,
        color: 'white',
        textAlign: 'center',
    };

    const contactLinkStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center', // Centre les éléments verticalement dans chaque ligne
    };

    const dialogStyle: React.CSSProperties = {
        //width: '900px',
        //borderRadius: '20px',
    };


    return (
        <>
            <header>
                <Navbar page={"contact"}/>
            </header>
            <body style={bodyStyle}>
                <Box sx={{ width: '80vw'}}>
                    <Card variant='outlined' style={cardStyle}>
                        <CardHeader style={cardHeaderStyle} title={'Me Contacter'}/>
                        <CardContent style={contactLinkStyle}>
                            <Icon component={GitHubIcon}/>
                            <Link to={"https://github.com/etienneadams"} target="_blank">
                                <Button style={{color: colors.mainGreen}} >Github</Button>
                            </Link>
                        </CardContent>
                        <Divider />
                        <CardContent style={contactLinkStyle}>
                            <Icon component={LinkedInIcon}/>
                            <Link to={"https://fr.linkedin.com/in/etienne-adamczuk"} target="_blank">
                                <Button style={{color: colors.mainGreen}}>LinkedIn</Button>
                            </Link>
                        </CardContent>
                        <Divider/>
                        <CardContent style={contactLinkStyle}>
                            <Icon component={MailIcon}/>
                            <Button style={{color: colors.mainGreen}} onClick={handleOpen}>Mail</Button>
                        </CardContent>
                        <Divider />
                        <CardContent style={contactLinkStyle}>
                            <Icon component={YouTubeIcon}/>
                            <Link to={"https://m.twitch.tv/mrxsoisson/home"} target="_blank">
                                <Button style={{color: colors.mainGreen}}>Twitch</Button>
                            </Link>
                        </CardContent>
                        <Divider />
                        <CardContent style={contactLinkStyle}>
                            <Icon component={YouTubeIcon}/>
                            <Link to={"https://youtube.com/@MrSoisson-adams?si=A2m2mv-O2uodqQMs"} target="_blank">
                                <Button style={{color: colors.mainGreen}}>Youtube</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </Box>
                <Dialog open={open} style={dialogStyle}>
                    <DialogTitle style={{textAlign: 'center', color: colors.mainGreen}}> <b>Mail</b> </DialogTitle>
                    <Divider/>
                    <DialogContent>
                    <FormControl>
                        <FormLabel>Choisir l'email :</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="etienneadamczuk@gmail.com" control={<Radio />} label="Email personnel"/>
                            <FormControlLabel value="etienne.adamczuk@reseau.eseo.fr" control={<Radio />} label="Email professionnel" />
                        </RadioGroup>
                    </FormControl>
                    </DialogContent>
                    <DialogContent>
                        <h4> Message </h4>
                        <TextField variant="outlined" multiline maxRows={10}></TextField>
                    </DialogContent>
                    <DialogContent>
                        <Button style={{color: colors.mainGreen}} onClick={handleOpen}> Fermer</Button>
                        <Button style={{color: colors.mainGreen}} onClick={handleForm}> Valider</Button>
                    </DialogContent>
                </Dialog>
            </body>
                
            <footer>
                <Footer/>
            </footer>
        </>
    )
};

export default ContactPage;