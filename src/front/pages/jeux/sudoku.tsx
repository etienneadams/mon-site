import React, { useState } from "react";
import Footer from "../../components/footer.tsx";
import GameNavbar from "../../components/navigation/gameNavbar.tsx";
import Texts from "../../components/game/texts.tsx";
import { Badge, Button, Card, IconButton } from "@mui/material";
import Colors from "../../colors/colors.tsx";
import { Link } from "react-router-dom";
import InMaintenancePage from "../inMaintenance.tsx";
import Icons from "../../components/game/icons.tsx";

const SudokuGamePage = () => {
    const texts = Texts();
    const icons = Icons();

    const inBuilding = false;
    const inMaintenance = true;
    const index = 0;
    const [board, setBoard] = useState<number[]>(Array(9).fill(0));
    const [currentDifficulty, setCurrentDifficulty] = useState<number>(index);
    const [numberOfHints, setNumberOfHints] = useState<number>(3);

    const width = '30px';
    const height = '30px';
    const centeredHeight = '180%';
    
    const generateSudokuBoard = () => {
        const board = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0));
      
        const isSafe = (row, col, num) => {
          // Vérifier la ligne
          for (let i = 0; i < 9; i++) {
            if (board[row][i] === num) {
              return false;
            }
          }
      
          // Vérifier la colonne
          for (let i = 0; i < 9; i++) {
            if (board[i][col] === num) {
              return false;
            }
          }
      
          // Vérifier la région 3x3
          const startRow = Math.floor(row / 3) * 3;
          const startCol = Math.floor(col / 3) * 3;
          for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
              if (board[i][j] === num) {
                return false;
              }
            }
          }
      
          return true;
        };
    };

    const setNumberAtStart = () => {
        switch (currentDifficulty) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
        }
    };

    const renderBoard = () => {
        return board.map((value, index) => (
            <Card key={index} style={{ width: width, height: height, margin: 'auto', textAlign: 'center', lineHeight: centeredHeight }} >
                {board[value]}
            </Card>
        ));
    };

    const renderAnswerBoard = () => {
        return board.map((value, index) => (
            <Card key={index} style={{ width: "60px", height: "60px", margin: 'auto', fontSize: "35px", fontFamily: "helvetica", color: colors.mainGreen, background: colors.veryLightGreen, textAlign: 'center', lineHeight: centeredHeight, marginBottom: '8px'}} >
                {index + 1}
            </Card>
        ));
    };

    const handleHintClick = () => {
        setNumberOfHints((prevNumberOfHints) => prevNumberOfHints - 1);
    };

    const restart = () => {
        setNumberOfHints(3);
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

    const gameAreaStyle: React.CSSProperties = {
        display: 'flex',
    };

    const gameboardAreaStyle: React.CSSProperties = {

    };

    const difficultyButtonStyle: React.CSSProperties = {
        color: colors.mainGreen,
        fontSize: '10px',
    };

    const gameboardStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(9,9fr)',
        gap: '1px',
    };

    const answerAreaStyle: React.CSSProperties = {
        marginLeft: '30px',
    };

    const actionButtonsStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,2fr)',
        gap: '4px',
    };

    const actionButtonIconsStyle: React.CSSProperties = {
        fontSize: '50px', 
        backgroundColor: colors.veryLightGreen, 
        color: colors.mainGreen,
    };

    const actionTextsStyle: React.CSSProperties = {
        fontSize: '50%',
        color: colors.mainGreen,
        marginLeft: '13px',
    };

    const answerBoardStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,3fr)',
        gap: '3px',
    };

    const buttonDivStyle: React.CSSProperties = {
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
                <GameNavbar drawerGoal={texts.sudokuGoalText} drawerHow={texts.sudokuHow} drawerEnd={texts.sudokuEndText} />
            </header>
            
            { inMaintenance ? <InMaintenancePage />
            : 
                <>
                    <body style={bodyStyle}>
                        <div style={gameAreaStyle}>
                            <div style={gameboardAreaStyle}>
                                <div>
                                    <Button style={difficultyButtonStyle}> Facile </Button>
                                    <Button style={difficultyButtonStyle}> Moyenne </Button>
                                    <Button style={difficultyButtonStyle}> Difficile </Button>
                                    <Button style={difficultyButtonStyle}> Experte </Button>
                                    <Button style={difficultyButtonStyle}> Maître </Button>
                                </div>
                                <div style={gameboardStyle}>
                                    {renderBoard()}{renderBoard()} {renderBoard()} 
                                    {renderBoard()} {renderBoard()} {renderBoard()} 
                                    {renderBoard()} {renderBoard()} {renderBoard()}  
                                </div>
                            </div>
                            <div style={answerAreaStyle}>
                                <div style={actionButtonsStyle}>
                                    <IconButton component={icons.sudokuReplay} sx={actionButtonIconsStyle}/>
                                    <IconButton component={icons.sudokuEdit} sx={actionButtonIconsStyle}/> 
                                    <IconButton component={icons.sudokuComment} sx={actionButtonIconsStyle}/> 
                                    <Badge badgeContent={numberOfHints} color="success" >
                                        <IconButton component={icons.sudokuHint} sx={actionButtonIconsStyle} onClick={handleHintClick} disabled= {numberOfHints > 0 ? false : true} /> 
                                    </Badge>
                                    <p style={actionTextsStyle}> Annuler </p> <p style={actionTextsStyle}> Effacer </p> <p style={actionTextsStyle}> Notes </p> <p style={actionTextsStyle}> Indices</p>

                                </div>
                                <br />
                                <div style={answerBoardStyle}>
                                    {renderAnswerBoard()} 
                                </div>
                            </div>
                        </div>
                        <div style={buttonDivStyle}>
                            <Button style={buttonStyle} onClick={restart}> Rejouer </Button>
                            <Link to="/jeux">
                                <Button style={buttonStyle}> Quitter </Button>
                            </Link>
                        </div>
                    </body>
                    <footer>
                        <Footer />
                    </footer>
                </>
            }
        </>
    )
};

export default SudokuGamePage;