import React, { useEffect, useState } from "react";
import Footer from "../../components/footer.tsx";
import GameNavbar from "../../components/navigation/gameNavbar.tsx";
import Texts from "../../components/game/texts.tsx";
import Colors from "../../colors/colors.tsx";
import { Button, Card, Icon } from "@mui/material";
import { Link } from "react-router-dom";
import EndGameDialog from "../../components/game/endGameDialog.tsx";
import Icons from "../../components/game/icons.tsx";


const Puissance4GamePage = () => {
    const icons = Icons();
    const texts = Texts();
    const colors = Colors();

    const playerTurn = [1,2]
    const initialBoard = Array(42).fill(0);
    const [board, setBoard] = useState<number[]>(Array(42).fill(0));
    const [currentTurn, setCurrentTurn] = useState(playerTurn[1])
    const [gameWon, setGameWon] = useState(false);
    const [winner, setWinner] = useState<number | null>(null);

    
    const width = '50px'
    const height = '50px'
    const formColorP1 = colors.red
    const formColorP2 = colors.yellow


    const form = (value: number) => value === 1 ? <Icon component={icons.puissance4Circle} sx={{width: '100%', height: '100%', color: formColorP1}}/> 
            : value === 2 ? <Icon component={icons.puissance4Circle} sx={{width: '100%', height: '100%', color: formColorP2}}/> : null;

    const renderBoard = () => {
        return board.map((value, index) => (
            <Card key={index} style={{ width: width, height: height, margin: 'auto' }} onClick={() => handleClick(index)}>
                {form(value)}
            </Card>
        ));
    };

    const handleClick = (index: number) => {
        const colIndex = index % 7; // Determine la colonne
        let rowIndex = 0;
        for (let i = 5; i >= 0; i--) {
            const currentIndex = i * 7 + colIndex;
            if (!board[currentIndex]) {
                rowIndex = currentIndex;
                break;
            }
        }
    
        if (!board[rowIndex]) {
            const newBoard = [...board];
            newBoard[rowIndex] = currentTurn;
            setBoard(newBoard);
            setCurrentTurn(currentTurn === 1 ? 2 : 1);
        }
    };
        
    useEffect(() => {
        const checkWinner = () => {
            // Vérification horizontale
            for (let row = 0; row < 6; row++) {
                for (let col = 0; col < 4; col++) {
                    if (
                        board[row * 7 + col] === board[row * 7 + col + 1] &&
                        board[row * 7 + col] === board[row * 7 + col + 2] &&
                        board[row * 7 + col] === board[row * 7 + col + 3] &&
                        board[row * 7 + col] !== 0
                    ) {
                        setWinner(board[row * 7 + col]);
                        setGameWon(true);
                        return;
                    }
                }
            }
    
            // Vérification verticale
            for (let col = 0; col < 7; col++) {
                for (let row = 0; row < 3; row++) {
                    if (
                        board[row * 7 + col] === board[(row + 1) * 7 + col] &&
                        board[row * 7 + col] === board[(row + 2) * 7 + col] &&
                        board[row * 7 + col] === board[(row + 3) * 7 + col] &&
                        board[row * 7 + col] !== 0
                    ) {
                        setWinner(board[row * 7 + col]);
                        setGameWon(true);
                        return;
                    }
                }
            }
    
            // Vérification diagonale (ascendante)
            for (let col = 0; col < 4; col++) {
                for (let row = 3; row < 6; row++) {
                    if (
                        board[row * 7 + col] === board[(row - 1) * 7 + col + 1] &&
                        board[row * 7 + col] === board[(row - 2) * 7 + col + 2] &&
                        board[row * 7 + col] === board[(row - 3) * 7 + col + 3] &&
                        board[row * 7 + col] !== 0
                    ) {
                        setWinner(board[row * 7 + col]);
                        setGameWon(true);
                        return;
                    }
                }
            }
    
            // Vérification diagonale (descendante)
            for (let col = 0; col < 4; col++) {
                for (let row = 0; row < 3; row++) {
                    if (
                        board[row * 7 + col] === board[(row + 1) * 7 + col + 1] &&
                        board[row * 7 + col] === board[(row + 2) * 7 + col + 2] &&
                        board[row * 7 + col] === board[(row + 3) * 7 + col + 3] &&
                        board[row * 7 + col] !== 0
                    ) {
                        setWinner(board[row * 7 + col]);
                        setGameWon(true);
                        return;
                    }
                }
            }
        };
    
        checkWinner();
    }, [board]);
    
    
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
        gap: '2px',
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
                <p style={{backgroundColor: currentTurn === 1 ? formColorP1 : formColorP2, color: 'black', borderRadius: '10px', padding: '10px'}}> Tour du joueur {currentTurn}</p>
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