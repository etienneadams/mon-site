import React, { useState } from "react";
import Footer from "../../components/footer.tsx";
import GameNavbar from "../../components/navigation/gameNavbar.tsx";
import Texts from "../../components/game/texts.tsx";
import { Card } from "@mui/material";
import Colors from "../../colors/colors.tsx";

const SudokuGamePage = () => {
    const texts = Texts();
    const [board, setBoard] = useState<number[]>(Array(9).fill(0));

    const width = '30px';
    const height = '30px';

    const renderBoard = () => {
        return board.map((value, index) => (
            <Card key={index} style={{ width: width, height: height, margin: 'auto' }} >
                
            </Card>
        ));
    };

    
    
    // CSS

    const colors = Colors();

    const bodyStyle: React.CSSProperties = {
        backgroundColor: colors.lighterGray,
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    };

    const gameboardStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(9,9fr)',
        gap: '5px',
    };

    return (
        <>
            <header>
                <GameNavbar drawerGoal={texts.sudokuGoalText} drawerHow={texts.sudokuHow} drawerEnd={texts.sudokuEndText} />
            </header>
            <body style={bodyStyle}>
                <div style={gameboardStyle}>
                    {renderBoard()}{renderBoard()} {renderBoard()} 
                    {renderBoard()} {renderBoard()} {renderBoard()} 
                    {renderBoard()} {renderBoard()} {renderBoard()}  
                </div>
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default SudokuGamePage;