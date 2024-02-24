import React from "react";
import Navbar from "../components/navigation/navbar.tsx";
import Colors from "../colors/colors.tsx";
import Footer from "../components/footer.tsx";
import InBuildingPage from "./inBuilding.tsx";
import InMaintenancePage from "./inMaintenance.tsx";

const HomePage = () => {
    const inBuilding = false;
    const inMaintenance = true;
    // CSS
    const colors = Colors();

    const bodyStyle: React.CSSProperties = {
        backgroundColor: colors.lightGray,
    };

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
                            begin
                            <h1>
                                ParcoursPage
                            </h1>
                            end
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