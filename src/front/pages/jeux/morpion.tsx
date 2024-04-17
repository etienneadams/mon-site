import React, { useEffect, useState } from "react";
import Footer from "../../components/footer.tsx";
import GameNavbar from "../../components/navigation/gameNavbar.tsx";
import Texts from "../../components/game/texts.tsx";
import Colors from "../../colors/colors.tsx";
import { Button, Card } from "@mui/material";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Link } from "react-router-dom";
import EndGameDialog from "../../components/game/endGameDialog.tsx";
import { useMobile } from "../../components/contexts/mobileContext.tsx";

const MorpionGamePage = () => {
    const { isMobile } = useMobile()

    const playerTurn = [1,2]
    const initialBoard = Array(9).fill(0);
    const [board, setBoard] = useState<number[]>(Array(9).fill(0));
    const [currentTurn, setCurrentTurn] = useState(playerTurn[1])
    const [gameWon, setGameWon] = useState(false);
    const [winner, setWinner] = useState<number | null>(null);

    const texts = Texts();

    const width = `${window.innerWidth - 10} vw`
    const height = `${window.innerWidth - 10} vw`

    const form = (value: number) => value === 1 ? <ClearRoundedIcon sx={{width: '100%', height: '100%'}}/> : value === 2 ? <CircleOutlinedIcon sx={{width: '100%', height: '100%'}}/> : null;

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

    useEffect(() => {
        const checkWinner = () => {
            // Vérifier les lignes
            for (let i = 0; i < 3; i++) {
                if (board[i * 3] === board[i * 3 + 1] && board[i * 3] === board[i * 3 + 2] && board[i * 3] !== 0) {
                    setWinner(board[i * 3]);
                    console.log(board[i * 3]);
                    setGameWon(true);
                    return;
                }
            }

            // Vérifier les colonnes
            for (let i = 0; i < 3; i++) {
                if (board[i] === board[i + 3] && board[i] === board[i + 6] && board[i] !== 0) {
                    setWinner(board[i]);
                    console.log(board[i]);
                    setGameWon(true);
                    return;
                }
            }

            // Vérifier les diagonales
            if ((board[0] === board[4] && board[0] === board[8]) || (board[2] === board[4] && board[2] === board[6])) {
                if (board[4] !== 0) {
                    setWinner(board[4]);
                    console.log(board[4]);
                    setGameWon(true);
                    return;
                }
            }
        };

        checkWinner();
    }, [board]);

    


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
        width: isMobile ? '80vw' : 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,3fr)',
        gap: '5px',
    };

    const buttonDivStyle: React.CSSProperties = {
        width: isMobile ? '80vw' : 'auto',
        justifyContent: 'center',
        display: 'flex',
        marginTop: '20px',
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
                <GameNavbar drawerGoal={texts.morpionGoalText} drawerHowPrePhrase={texts.morpionHowPrePhraseText} drawerHow={texts.morpionHow} drawerEnd={texts.morpionEndText}  />
            </header>
            <body style={bodyStyle}>
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

export default MorpionGamePage;