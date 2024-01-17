import React from "react";
import Navbar from "../components/navigation/navbar.tsx";
import Colors from "../colors/colors.tsx";
import Footer from "../components/footer.tsx";

const HomePage = () => {

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
            <body style={bodyStyle}>
                begin
                <h1>
                    Home Page
                </h1>
                end
            </body>
            <footer>
                <Footer/>
            </footer>
            
        </>
    )
};

export default HomePage;