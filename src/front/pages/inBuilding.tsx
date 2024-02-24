import React from "react";
import Footer from "../components/footer.tsx";
import work from "../assets/work.png";

const InBuildingPage = () => {

    // CSS

    const bodyStyle: React.CSSProperties = {
        height: '80vh',
        backgroundImage: `url(${work})`,
        backgroundSize: 'auto auto', 
        backgroundPosition: 'center', 
    };

    return (
        <>
            <body style={bodyStyle}>
                
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default InBuildingPage;