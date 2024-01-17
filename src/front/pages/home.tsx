import React from "react";
import Navbar from "../components/navigation/navbar.tsx";
import Colors from "../colors/colors.tsx";

const HomePage = () => {

    // CSS
    const colors = Colors();

    const divStyle: React.CSSProperties = {
        backgroundColor: colors.lightGray,
    };

    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
            <div style={divStyle}>  
                <h1>
                    Home Page
                </h1>
                </div>
            </body>
            
        </>
    )
};

export default HomePage;