import React from "react";
import Footer from "../components/footer.tsx";
import Navbar from "../components/navigation/navbar.tsx";
import Colors from "../colors/colors.tsx";

const GamePage = () => {

    //CSS
    const colors = Colors();

    const bodyStyle: React.CSSProperties = {
        backgroundColor: colors.lightGray,
    };
    
    return (
        <>
            <header>
                <Navbar page="jeux"/>
            </header>
            <body style={bodyStyle}>
                begin
                <h1>
                    Game Page
                </h1> 
                end
            </body>
            <footer>
                <Footer/>
            </footer>
        </>
    )
};

export default GamePage;