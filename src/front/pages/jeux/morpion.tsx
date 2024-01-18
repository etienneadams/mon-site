import React from "react";
import Footer from "../../components/footer.tsx";
import GameNavbar from "../../components/navigation/gameNavbar.tsx";

const MorpionGamePage = () => {

    return (
        <>
            <header>
                <GameNavbar />
            </header>
            <body>
                Morpion
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default MorpionGamePage;