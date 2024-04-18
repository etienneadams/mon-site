import React from "react";
import Footer from "../../components/footer.tsx";
import GameNavbar from "../../components/navigation/gameNavbar.tsx";
import Texts from "../../components/game/texts.tsx";
import InMaintenancePage from "../inMaintenance.tsx";

const EchecGamePage = () => {
    const inBuilding = false;
    const inMaintenance = true;
    const texts = Texts();
    
    return (
        <>
            <header>
                <GameNavbar drawerGoal={texts.travleGoalText} drawerHow={texts.travleHow} drawerEnd={texts.travleEndText} />
            </header>
            { inMaintenance ? <InMaintenancePage />
            : 
            <>            
                <body>
                    EchecGamePage
                </body>
                <footer>
                    <Footer />
                </footer>
            </>}
        </>
    )
};

export default EchecGamePage;