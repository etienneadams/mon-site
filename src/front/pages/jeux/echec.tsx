import React from "react";
import Footer from "../../components/footer.tsx";
import GameNavbar from "../../components/navigation/gameNavbar.tsx";
import Texts from "../../components/game/texts.tsx";
import InMaintenancePage from "../inMaintenance.tsx";
import Colors from "../../colors/colors.tsx";

const EchecGamePage = () => {
    const inBuilding = false;
    const inMaintenance = true;
    const texts = Texts();

    // CSS

    const colors = Colors()

    const bodyStyle: React.CSSProperties = {
        backgroundColor: colors.lightGray,
    }
    
    return (
        <>
            <header>
                <GameNavbar drawerGoal={texts.travleGoalText} drawerHow={texts.travleHow} drawerEnd={texts.travleEndText} />
            </header>
            { inMaintenance ? <InMaintenancePage />
            : 
            <>            
                <body style={bodyStyle}>
                    EchecGamePage
                </body>
                <footer>
                    <Footer />
                </footer>
            </>
            }
        </>
    )
};

export default EchecGamePage;