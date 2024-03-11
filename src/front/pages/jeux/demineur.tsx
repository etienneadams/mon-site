import React, { useEffect, useState } from "react";
import Footer from "../../components/footer.tsx";
import GameNavbar from "../../components/navigation/gameNavbar.tsx";
import Texts from "../../components/game/texts.tsx";
import Colors from "../../colors/colors.tsx";
import { Button, Card, Icon, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EndGameDialog from "../../components/game/endGameDialog.tsx";
import MenuComponent from "../../components/game/menuComponent.tsx";
import Icons from "../../components/game/icons.tsx";

const DemineurGamePage = () => {
    const texts = Texts();
    const icons = Icons();

    const index = 0;
    const difficulties = [80, 252, 480] // 10 * 8, 18 * 14, 24 * 20
    const numberOfBombsList = [10, 40, 99]
    const [currentNumberOfBombs, setCurrentNumberOfBombs] = useState<number>(numberOfBombsList[index])
    const [currentDifficulty, setCurrentDifficulty] = useState<number>(difficulties[index]);
    const [rows, setRows] = useState<number>(10);
    const [cols, setCols] = useState<number>(8);
    const [board, setBoard] = useState<number[]>(Array(currentDifficulty).fill(0));
    const [isClicked, setIsClicked] = useState<boolean[]>(Array(currentDifficulty).fill(false));
    const [rightClicked, setRightClicked] = useState<boolean[]>(Array(currentDifficulty).fill(false));
    const [gameWon, setGameWon] = useState<boolean>(false);
    const [gameLost, setGameLost] = useState<boolean>(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [timer, setTimer] = useState(0);
    const [isFlagMode, setIsFlagMode] = useState<boolean>(false);
    const [numbOfFlags, setNumbOfFlags] = useState<number>(currentNumberOfBombs);
    const [isGamePaused, setIsGamePaused] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);


    const width = currentDifficulty === difficulties[0] ? '40px' : currentDifficulty === difficulties[1] ? '30px' : '20px';
    const height = currentDifficulty === difficulties[0] ? '40px' : currentDifficulty === difficulties[1] ? '30px' : '20px';

    const calculateScreenSize = () => {
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;
        if (winWidth > winHeight) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    }

    const initializeBoard = () => {
        const newBoard = Array(currentDifficulty).fill(0);
        const bombIndices = new Set<number>();
        while (bombIndices.size < currentNumberOfBombs) {
            const randomIndex = Math.floor(Math.random() * currentDifficulty);
            bombIndices.add(randomIndex);
        }
        bombIndices.forEach(index => newBoard[index] = 10);
        bombAffectsAdjacentsCases(newBoard);
        setBoard(newBoard);
        setIsClicked(Array(currentDifficulty).fill(false));
        setRightClicked(Array(currentDifficulty).fill(false));
        setGameWon(false);
        setGameLost(false);
        setGameStarted(false);
        setTimer(0);
        setIsFlagMode(false);
        setIsGamePaused(false);
        setIsMenuOpen(false);
        calculateScreenSize();
        //setNumbOfFlags(numberOfBombsList[currentDifficulty]);
    };

    const handleDifficultyChange = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        initializeBoard();
        const selectedDifficulty = Number(event.currentTarget.getAttribute('data-value'));
        setCurrentDifficulty(difficulties[selectedDifficulty]);
        setCurrentNumberOfBombs(numberOfBombsList[selectedDifficulty]);
        setRowsAndCols(selectedDifficulty);
    };
    
    const setRowsAndCols = (index: number) => {
        switch (index) {
            case 1:
                setRows(18);
                setCols(14);
                break;
            case 2:
                setRows(24);
                setCols(20);
                break;
            default:
                setRows(10);
                setCols(8);
                break;
        }
    };

    const bombAffectsAdjacentsCases = (board: number[]) => {
        for (let i = 0; i < currentDifficulty; i++) {
            const x = isMobile ? i % cols : i % rows;
            const y = isMobile ? Math.floor(i / cols) : Math.floor(i / rows);            
            if (board[i] === 10) {
                for (let xOffset = -1; xOffset <= 1; xOffset++) {
                    for (let yOffset = -1; yOffset <= 1; yOffset++) {
                        const adjX = x + xOffset;
                        const adjY = y + yOffset;
                        
                        if (isMobile) {
                            if (adjX >= 0 && adjX < cols && adjY >= 0 && adjY < rows) {
                                const adjIndex = adjY * cols + adjX;
                                if (board[adjIndex] !== 10) {
                                    board[adjIndex]++;
                                }
                            }
                        } else {
                            if (adjX >= 0 && adjX < rows && adjY >= 0 && adjY < cols) {
                                const adjIndex = adjY * rows + adjX;
                                if (board[adjIndex] !== 10) {
                                    board[adjIndex]++;
                                }
                            }
                        }
                    }
                }
            }
        }
    };    

    useEffect(() => {
        const isGameWon = checkWin();
        if (isGameWon) {
            setGameWon(true);
            setIsGamePaused(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isClicked]);

    useEffect(() => {
        let interval;
        if (gameStarted && !isGamePaused) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [gameStarted, isGamePaused]);
    

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    };

    const renderBoard = () => {
        return board.map((value, index) => (
            <Card key={index} 
              style={{ 
                  width: width, 
                  height: height, 
                  margin: 'auto', 
                  backgroundColor: !isClicked[index] ? colors.lightGrass : 'white', 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
              }} 
              onClick={(event) => handleClick(index, event)} 
              onContextMenu={(event) => handleClick(index, event)}>
            {rightClicked[index] && value !== -1 ? (
                <Icon component={icons.demineurGpsFixed} style={{ fontSize: '20px' }} />
         
            ) : rightClicked[index] && value === -1 ? (
                <Card key={index} 
                    style={{ 
                        width: width, 
                        height: height, 
                        margin: 'auto', 
                        backgroundColor: !isClicked[index] ? colors.lightGrass : 'white', 
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} 
                    onClick={(event) => handleClick(index, event)} 
                    onContextMenu={(event) => handleClick(index, event)}/>
                  
            ) : (
                isClicked[index] ? 
                    value === 10 ? (
                        <FontAwesomeIcon icon={icons.demineurBomb} style={bombStyle} />
                    ) : (
                        <p style={{fontSize: '20px', textAlign: 'center', lineHeight: '10%'}}>{value > 0 ? value : ''}</p>
                    )
                : 
                    <div style={{backgroundColor: 'grey'}} />
            )}
        </Card>
        ));
    };
    
    const renderTimer = () => {
        return (
            <p> : {formatTime(timer)}</p>
        );
    };

    const renderFlags = () => {
        return (
            <button style={{color: colors.mainGreen, backgroundColor: isFlagMode ? colors.lightRed : 'transparent',
            border: '1px solid', borderColor: colors.mainGreen, borderRadius: '5px'}} onClick={handleFlagClick}>
                <Icon component={icons.demineurGpsFixed} style={{fontSize: '20px', color: colors.bombRed, alignItems: 'center'}} /> <b style={{textAlign: 'center'}}>:  {numbOfFlags}</b>
            </button>
        );
    };

    const handleClick = (index: number, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!gameStarted) {
            setGameStarted(true);
        }
        if (event.type === 'click') {
            if (isFlagMode) {
                if (!rightClicked[index]) {
                    if (numbOfFlags > 0) {
                        const updatedRightClickedArray = [...rightClicked];
                        updatedRightClickedArray[index] = true;
                        setRightClicked(updatedRightClickedArray);
                        setNumbOfFlags(numbOfFlags - 1);
                    } else {
                        event.preventDefault();
                    }
                } else {
                    removeFlag(index);
                }
            } else {
                const updatedClickedArray = [...isClicked];
                updatedClickedArray[index] = true;
                setIsClicked(updatedClickedArray);
                if (board[index] === 10) {
                    setGameLost(true);
                    setIsGamePaused(true);
                }
            }
        } else if (event.type === 'contextmenu') {
            if (!rightClicked[index]) {
                if (numbOfFlags > 0) {
                    event.preventDefault();
                    const updatedRightClickedArray = [...rightClicked];
                    updatedRightClickedArray[index] = true;
                    setRightClicked(updatedRightClickedArray);
                    setNumbOfFlags(numbOfFlags - 1);
                } else {
                    event.preventDefault();
                }
            } else {
                removeFlag(index);
            }
        }
    };

    const removeFlag = (index: number) => {
        const updatedRightClickedArray = [...rightClicked];
        updatedRightClickedArray[index] = false;
        setRightClicked(updatedRightClickedArray);
        setNumbOfFlags(numbOfFlags + 1);
    };
    
    const handleTimerClick = () => {
        setIsGamePaused(true);
    };

    const handleFlagClick = () => {
        setIsFlagMode(!isFlagMode);
    };

    const resume = () => {
        setIsGamePaused(false);
    };

    const checkWin = () => {
        for (let i = 0; i < currentDifficulty; i++) {
            if (board[i] !== 10 && !isClicked[i]) {
                return false;
            }
            if (board[i] === 10 && isClicked[i]) {
                return false;
            }
        }
        return true;
    };

    const restart = () => {
        initializeBoard();
        setGameWon(false);
        setNumbOfFlags(currentNumberOfBombs);
    };

    // CSS
    const colors = Colors()

    const bodyStyle: React.CSSProperties = {
        backgroundColor: colors.lighterGray,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    };

    const gameHeadStyle: React.CSSProperties = {
        width: '500px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        textAlign: 'center',
        justifyItems: 'center',
    };

    const timerDivStyle: React.CSSProperties = {
        width: '110px',
        height: '50px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        backgroundColor: colors.mainGreen,
        color: 'white',
        alignContent: 'center',
        marginBottom: '10px',
        borderRadius: '10px',
        paddingRight: '8px',
    };

    const flagAreaStyle: React.CSSProperties = {
        justifyItems: 'center',
    };
    
    const gameboardStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: isMobile ? `repeat(${cols},${rows}fr)` : `repeat(${rows},${cols}fr)`,
        gap: '2px',
        filter: isGamePaused ? 'blur(5px)' : 'none',
    };
    
    const bombStyle: React.CSSProperties = {
        color: colors.bombRed,
        textAlign: 'center',
        lineHeight: '10%',
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

    const playButtonStyle: React.CSSProperties = {
        color: colors.mainGreen,
        position: 'absolute',
        fontSize: '10vh',
    };


    return (
        <>
            <header>
                <GameNavbar drawerGoal={texts.demineurGoalText} drawerHow={texts.demineurHow} drawerEnd={texts.demineurEndText} />
            </header>
            <body style={bodyStyle}>
                <div style={gameHeadStyle}>
                    <div>
                        <MenuComponent 
                            buttonTitle={"Difficulté"} 
                            optionTitles={texts.demineurOptions} 
                            onClick={(event) => handleDifficultyChange(event)} 
                            pictures={icons.demineurMenuOptions} 
                        />
                    </div>
                    <div style={timerDivStyle}>
                        <IconButton component={icons.demineurTimer} style={{fontSize: '50px', color: 'white'}} onClick={handleTimerClick}/>
                        {renderTimer()}
                    </div>
                    <div style={flagAreaStyle}>
                        {renderFlags()}
                    </div>
                </div>
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
                    <EndGameDialog title={'Bravo'} content={`Vous avez gagné en ${formatTime(timer)}`} onClick={restart} />
                )}
                {gameLost && (
                    <EndGameDialog title={'Dommage'} content={`Vous avez perdu`} onClick={restart} />
                )}
                {isGamePaused && (
                    <IconButton component={icons.demineurPlayCircle} style={playButtonStyle} onClick={resume}/>
                )}
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default DemineurGamePage;