import React from "react";
import Navbar from "../components/navigation/navbar.tsx";
import Colors from "../colors/colors.tsx";
import Footer from "../components/footer.tsx";
import InBuildingPage from "./inBuilding.tsx";
import InMaintenancePage from "./inMaintenance.tsx";
import { useMobile } from "../components/contexts/mobileContext.tsx";
import CarouselComponent from "../components/carousel.tsx";
import Profile from "../assets/accueil/profile.JPEG"
import Banner from "../assets/accueil/FondLinkedin2021.png"
import LogoBL from "../assets/accueil/Logo BL entier.png"
import LogoSCO from "../assets/accueil/scoBrooball.jpg"
import LogoDucs from "../assets/accueil/LogoDucs.jpg"
import Paragraph from "../components/paragraph.tsx";
import Texts from "../components/game/texts.tsx";
import InfoSection from "../components/infoSection.tsx";

const HomePage = () => {
    const { isMobile } = useMobile()

    const texts = Texts()

    const inBuilding = false
    const inMaintenance = false

    // CSS

    const colors = Colors();

    const bodyStyle: React.CSSProperties = {
        backgroundColor: colors.lightGray,
    }

    const contentStyle: React.CSSProperties = {
        margin: '5vh',
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
    }

    const carouselStyle: React.CSSProperties = {
        justifyContent: 'center',
        alignSelf: 'center',
    }

    const profileStyle: React.CSSProperties = {
        width: isMobile ? '15vh' : '20vw',
    }

    const bannerStyle: React.CSSProperties = {
        width: '100%',
    }

    return (
        <>
            <header>
                <Navbar page="accueil"/>
            </header>
            { !inBuilding ? 
                <>
                { inMaintenance ? <InMaintenancePage />
                    :
                    <>
                        <body style={bodyStyle}>
                            <InfoSection title={"Présentation"} texts={[texts.presentation]} carousel={Profile} picLeft={true} />
                            {/* TODO: mettre vidéo BL à la place */}
                            <InfoSection title={"Professionnel"} banner={Banner} texts={[texts.spikeeLabs]} carousel={LogoBL} picLeft={false} />
                            <InfoSection title={"Sport"} texts={[texts.broomball, texts.running]} carousel={LogoSCO} picLeft={true} />
                            <InfoSection title={"Temps libre"} texts={[texts.hockey, texts.reading]} carousel={LogoDucs} picLeft={false} />
                        </body>
                        <footer>
                            <Footer/>
                        </footer>
                    </>
                    }
                </>
            : 
                <InBuildingPage />
            }            
        </>
    )
};

export default HomePage;