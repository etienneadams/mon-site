import React from "react";
import Footer from "../../components/footer.tsx";
import GameNavbar from "../../components/navigation/gameNavbar.tsx";
import Texts from "../../components/game/texts.tsx";

const TravleGamePage = () => {
    const texts = Texts();
    
    return (
        <>
            <header>
                <GameNavbar drawerGoal={texts.travleGoalText} drawerHow={texts.travleHow} drawerEnd={texts.travleEndText} />
            </header>
            <body>
                TravleGamePage
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default TravleGamePage;