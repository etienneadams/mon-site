import React, { useEffect, useState } from "react";
import Footer from "../../components/footer.tsx";
import GameNavbar from "../../components/navigation/gameNavbar.tsx";
import Texts from "../../components/game/texts.tsx";
import Colors from "../../colors/colors.tsx";
import { Button, Card, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import TimerIcon from '@mui/icons-material/Timer';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import { faBomb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EndGameDialog from "../../components/game/endGameDialog.tsx";
import { Dropdown, DropdownItem } from 'flowbite-react';

const DemineurGamePage = () => {
    const texts = Texts()
    const index = 0;
    const difficulties = [80, 252, 480] // 10 * 8, 18 * 14, 24 * 20
    const numberOfBombsList = [10, 40, 99]
    const [currentNumberOfBombs, setCurrentNumberOfBombs] = useState<number>(numberOfBombsList[index])
    const [currentDifficulty, setCurrentDifficulty] = useState<number>(difficulties[index]);
    let rows = 10;
    let cols = 8;
    const [board, setBoard] = useState<number[]>(Array(currentDifficulty).fill(0));
    const [isClicked, setIsClicked] = useState<boolean[]>(Array(currentDifficulty).fill(false));
    const [rightClicked, setRightClicked] = useState<boolean[]>(Array(currentDifficulty).fill(false));
    const [gameWon, setGameWon] = useState<boolean>(false);
    const [gameLost, setGameLost] = useState<boolean>(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [timer, setTimer] = useState(0);


    const width = currentDifficulty === difficulties[0] ? '40px' : currentDifficulty === difficulties[1] ? '30px' : '20px';
    const height = currentDifficulty === difficulties[0] ? '40px' : currentDifficulty === difficulties[1] ? '30px' : '20px';


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
    };

    const handleDifficultyChange = (event) => {
        const selectedDifficulty = event.target.value as number;
        setCurrentDifficulty(difficulties[selectedDifficulty]);
        setCurrentNumberOfBombs(numberOfBombsList[selectedDifficulty]);
        setRowsAndCols(selectedDifficulty);
        console.log(currentDifficulty);
    };

    const setRowsAndCols = (index: number) => {
        switch (index) {
            case 0:
                rows = 10;
                cols = 8;
                break;
            case 1:
                rows = 18;
                cols = 14;
                break;
            case 2:
                rows = 24;
                cols = 20;
                break;
            default:
                rows = 10;
                cols = 8;
                break;
        }
    };

    const bombAffectsAdjacentsCases = (board: number[]) => {
        for (let i = 0; i < currentDifficulty; i++) {
            const x = i % rows;
            const y = Math.floor(i / rows);            
            if (board[i] === 10) {
                for (let xOffset = -1; xOffset <= 1; xOffset++) {
                    for (let yOffset = -1; yOffset <= 1; yOffset++) {
                        const adjX = x + xOffset;
                        const adjY = y + yOffset;
                        
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
    };    

    useEffect(() => {
        initializeBoard();
    }, []); 

    useEffect(() => {
        const isGameWon = checkWin();
        if (isGameWon) {
            setGameWon(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isClicked]);

    useEffect(() => {
        let interval;
        if (gameStarted) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [gameStarted]);

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
            {rightClicked[index] ? (
                <GpsFixedIcon style={{ fontSize: '20px' }} />
            ) : (
                isClicked[index] ? 
                    value === 10 ? (
                        <FontAwesomeIcon icon={faBomb} style={bombStyle} />
                    ) : (
                        <p style={{fontSize: '20px', textAlign: 'center', lineHeight: '10%'}}>{value}</p>
                    )
                : 
                    <div style={{backgroundColor: 'grey'}} />
            )}
        </Card>
        ));
    };
    

    const renderTimer = () => {
        return (
            <p>: {formatTime(timer)}</p>
        );
    };

    const handleClick = (index: number, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!gameStarted) {
            setGameStarted(true);
        }
        if  (event.type === 'click') {
            const updatedClickedArray = [...isClicked];
            updatedClickedArray[index] = true;
            setIsClicked(updatedClickedArray);
            if (board[index] === 10) {
                setGameLost(true);
            }
        } else if (event.type === 'contextmenu') {
            event.preventDefault();
            const updatedRightClickedArray = [...rightClicked];
            updatedRightClickedArray[index] = true;
            setRightClicked(updatedRightClickedArray);
        }
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
    };

    // CSS
    const colors = Colors()

    const bodyStyle: React.CSSProperties = {
        backgroundColor: colors.lighterGray,
        height: currentDifficulty === 80 ? '80vh' : '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    };

    const dropdownStyle: React.CSSProperties = {
        position: 'sticky',
        marginRight: '300px',
        borderRadius: '10px',
        border: '1px solid',
        //marginBottom: '10px',
        color: colors.mainGreen,
    };

    const dropdownItemsStyle: React.CSSProperties = {
        backgroundColor: colors.mainGreen,
        color: 'white',
    };

    const timerDivStyle: React.CSSProperties = {
        height: '50px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        backgroundColor: colors.mainGreen,
        color: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: '10px',
        borderRadius: '10px',
    };

    const gameboardStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: `repeat(${rows},${cols}fr)`,
        gap: '2px',
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

    return (
        <>
            <header>
                <GameNavbar drawerGoal={texts.demineurGoalText} drawerHow={texts.demineurHow} drawerEnd={texts.demineurEndText} />
            </header>
            <body style={bodyStyle}>
                <div>
                    <Dropdown style={dropdownStyle} value={difficulties.indexOf(currentDifficulty)} onChange={(event) => handleDifficultyChange(event)} label={"Difficulté"} defaultValue={0}>
                        <DropdownItem value={0}>Facile</DropdownItem>
                        <DropdownItem value={1}>Moyen</DropdownItem>
                        <DropdownItem value={2}>Difficile</DropdownItem>
                        <DropdownItem value={3}>Expert</DropdownItem>
                    </Dropdown>
                </div>
                <div style={timerDivStyle}>
                    <IconButton component={TimerIcon} style={{fontSize: '40px', color: 'white', justifyContent: 'center', display: 'flex'}} />
                    {renderTimer()}
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
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default DemineurGamePage;