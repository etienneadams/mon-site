import React, { useState } from "react";
import Footer from "../../components/footer.tsx";
import GameNavbar from "../../components/navigation/gameNavbar.tsx";
import Texts from "../../components/game/texts.tsx";
import Colors from "../../colors/colors.tsx";
import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";
import CircleIcon from '@mui/icons-material/Circle';
import EndGameDialog from "../../components/game/endGameDialog.tsx";


const Puissance4GamePage = () => {
    const colors = Colors();
    const playerTurn = [1,2]
    const initialBoard = Array(42).fill(0);
    const [board, setBoard] = useState<number[]>(Array(42).fill(0));
    const [currentTurn, setCurrentTurn] = useState(playerTurn[1])
    const [gameWon, setGameWon] = useState(false);
    const [winner, setWinner] = useState<number | null>(null);
    const formColors = [colors.red, colors.green, colors.purple, colors.yellow]
    const [formColorP1, setFormColorP1] = useState<string>()
    const [formColorP2, setFormColorP2] = useState<string>()

    
    const width = '50px'
    const height = '50px'

    const texts = Texts();

    const setColorP1 = () => {
        const randomIndex = Math.floor(Math.random() * formColors.length);
        setFormColorP1(formColors[randomIndex])
    };

    const setColorP2 = () => {
        let randomIndex = Math.floor(Math.random() * formColors.length);
        while (formColors[randomIndex] === formColorP1) {
            randomIndex = Math.floor(Math.random() * formColors.length);
        }
        setFormColorP2(formColors[randomIndex])
    };

    setColorP1()
    setColorP2()

    const form = (value: number) => value === 1 ? <CircleIcon sx={{width: '100%', height: '100%', color: formColorP1}}/> : value === 2 ? <CircleIcon sx={{width: '100%', height: '100%', color: formColorP2}}/> : null;

    const renderBoard = () => {
        return board.map((value, index) => (
            <Card key={index} style={{ width: width, height: height, margin: 'auto' }} onClick={() => handleClick(index)}>
                {form(value)}
            </Card>
        ));
    };

    const handleClick = (index: number) => {
        if (!board[index]) {
            const newBoard = [...board];
            newBoard[index] = currentTurn;
            setBoard(newBoard);
            setCurrentTurn(currentTurn === 1 ? 2 : 1);
        }
    };

    const restart = () => {
        setBoard(initialBoard);
        setCurrentTurn(playerTurn[0]);
        setGameWon(false);
        setWinner(null);
    };

    // CSS
    

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
        gridTemplateColumns: 'repeat(7,6fr)',
        gap: '5px',
    };

    const buttonDivStyle: React.CSSProperties = {
        justifyContent: 'center',
        display: 'flex',
        marginTop: '10px',
    };

    const buttonStyle: React.CSSProperties = {
        backgroundColor: colors.mainGreen,
        color: 'white',
        fontSize: '12px',
        margin: '0px 100px',
    };
    

    return (
        <>
            <header>
                <GameNavbar drawerGoal={texts.puissance4GoalText} drawerHowPrePhrase={texts.puissance4HowPrePhraseText} drawerHow={texts.puissance4How} drawerEnd={texts.puissance4EndText}  />
            </header>
            <body style={bodyStyle}>
                <p style={{backgroundColor: currentTurn === 1 ? 'red' : 'yellow', color: 'white', borderRadius: '10px', padding: '10px'}}> Tour du joueur {currentTurn}</p>
                <div style={gameboardStyle}>
                    {renderBoard()}
                </div>
                <div style={buttonDivStyle}>
                <Button style={buttonStyle} onClick={restart}> Rejouer </Button>
                <Link to="/jeux">
                    <Button style={buttonStyle}> Quitter </Button>
                </Link>
            </div>
            {gameWon && (
                <EndGameDialog title={'Bravo'} content={`Le joueur ${winner} a gagné `} onClick={restart} />
            )}
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default Puissance4GamePage;