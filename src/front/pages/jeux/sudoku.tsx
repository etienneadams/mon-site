import React, { useEffect, useState } from "react" 
import Footer from "../../components/footer.tsx" 
import GameNavbar from "../../components/navigation/gameNavbar.tsx" 
import Texts from "../../components/game/texts.tsx" 
import { Badge, Button, Card, IconButton } from "@mui/material" 
import Colors from "../../colors/colors.tsx" 
import { Link } from "react-router-dom" 
import InMaintenancePage from "../inMaintenance.tsx" 
import Icons from "../../components/game/icons.tsx" 
import MenuComponent from "../../components/game/menuComponent.tsx" 
import EndGameDialog from "../../components/game/endGameDialog.tsx" 
import { useMobile } from "../../components/contexts/mobileContext.tsx"

const SudokuGamePage = () => {
    const { isMobile } = useMobile();

    const texts = Texts() 
    const icons = Icons() 

    const inMaintenance = false 
    let errors = 0 
    const [gameboard, setGameboard] = useState<number[][]>(Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0)))     
    const [answerBoard, setAnswerBoard] = useState<number[]>(Array(9).fill(0)) 
    const [currentDifficulty, setCurrentDifficulty] = useState<number>(0) 
    const [numberOfHints, setNumberOfHints] = useState<number>(3) 
    const [isClicked, setIsClicked] = useState<boolean[][]>(Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => false)))  
    const [selectedRow, setSelectedRow] = useState<number[]>([]) 
    const [selectedCol, setSelectedCol] = useState<number[]>([]) 
    const [isCommentMode, setIsCommentMode] = useState<boolean>(false) 
    const [coupleGrids, setCoupleGrids] = useState(Array(2)) 
    const [isHover, setIsHover] = useState<boolean[]>(Array(9).fill(false)) 
    const [isUnremovable, setIsUnremovable] = useState<boolean[][]>(Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => false)))  
    const [isGameWon, setIsGameWon] = useState<boolean>(false)
    const [isGameLost, setIsGameLost] = useState<boolean>(false)
    const [solvedGrid, setSolvedGrid] = useState<number[][]>(Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0)))
    const [collection, setCollection] = useState<number[][][]>([])


    const widthCard = '30px' 
    const heightCard = '30px' 
    const centeredHeight = '180%' 

    const initializeGameBoard = () => {
        //setGameboard(texts.sudokuEasyGrids[0]) 
        console.log("Entrer dans initializeGameBoard")
        pickGameboard()
        setSolvedGrid(texts.sudokuEasySolvedGrids[0])
        setCoupleGrids([texts.sudokuEasyGrids[0], texts.sudokuEasySolvedGrids[0]])
        setIsUnremovable(prevState => {
            const newState = prevState.map(row => [...row])
            for (let i = 0; i < gameboard.length; i++) {
                for (let j = 0; j < gameboard[i].length; j++) {
                    if (gameboard[i][j] !== 0) {
                        newState[i][j] = true
                    }
                }
            }
            return newState
        })
        console.log("list remove : " + isUnremovable)
        setIsCommentMode(false)
        setNumberOfHints(3)
        setIsGameLost(false)
        setIsGameWon(false)
    } 

    const pickGameboard = () => {
        console.log("enter pickGameboard")
        currentDifficulty === 1 ?
            //setCollection(texts.sudokuMediumGrids)
            setGameboard(texts.sudokuMediumGrids[0])
        : currentDifficulty === 2 ?
            //setCollection(texts.sudokuHardGrids)
            setGameboard(texts.sudokuHardGrids[0])
        : currentDifficulty === 3 ?
            //setCollection(texts.sudokuExpertGrids)
            setGameboard(texts.sudokuExpertGrids[0])
        : currentDifficulty === 4 ?
            //setCollection(texts.sudokuMasterGrids)
            setGameboard(texts.sudokuMasterGrids[0])
        : //setCollection(texts.sudokuEasyGrids)
        setGameboard(texts.sudokuEasyGrids[0])
        //const randomIndex = Math.floor(Math.random() * collection.length)
        //console.log("rand : " + randomIndex)
        //setGameboard(collection[randomIndex])
        //console.log("collection :" + collection)
        console.log("gameboard: " + gameboard)
    }

    useEffect(() => {
        initializeGameBoard()
    }, [])

    useEffect(() => {
        initializeGameBoard()
    }, [currentDifficulty])

    useEffect(() => {
        const initialUnremovable = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => false))
        setIsUnremovable(initialUnremovable)
    }, [])

    useEffect(() => {
        let completed = false
        let emptyCases = 0

        for (let i = 0; i < gameboard.length; i++) {
            for (let j = 0; j < gameboard.length; j++) {
                if (gameboard[i][j] === 0) {
                    emptyCases += 1
                }
            }
        }
        completed = emptyCases === 0 ? true : false

        if (completed) {
            let differencies = 0
            for (let i = 0; i < gameboard.length; i++) {
                for (let j = 0; j < gameboard.length; j++) {
                    if (gameboard[i][j] !== solvedGrid[i][j]) {
                        differencies += 1
                    }
                }
            }
            if (differencies === 0) {
                setIsGameWon(true)
            } else {
                setIsGameLost(true)
            }
        }
    }, [gameboard, solvedGrid])

    const checkCol = (colIndex, gameboard, num) => {
        for (let i = 0; i < 9; i++) {
            console.log("values : " + gameboard[i][colIndex])
            if (gameboard[i][colIndex] === num) {
                errors += 1  
                
                console.log("error : "+errors) 
            } 
        } 
    } 

    const checkRow = (rowIndex, gameboard, num) => {
        for (let i = 0; i < 9; i++) {
            console.log("values : " + gameboard[rowIndex][i])
            if (gameboard[rowIndex][i] === num) {
                errors += 1 
                console.log("error : "+errors) 
            } 
        } 
    } 

    const identifyBox = (rowIndex, colIndex) => {
        const boxes = ['box1', 'box2', 'box3',
                        'box4', 'box5', 'box6',
                        'box7', 'box8', 'box9']
        const boxRow = Math.floor(rowIndex / 3) 
        const boxCol = Math.floor(colIndex / 3) 
        const boxIndex = boxRow * 3 + boxCol 
        console.log("box n°"+boxes[boxIndex]) 
        return boxes[boxIndex] 
    } 

    const checkBox = (boxNum, gameboard, num) => {

    }

    const handleDifficultyChange = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const selectedDifficulty = Number(event.currentTarget.getAttribute('data-value')) 
        setCurrentDifficulty(selectedDifficulty) 
        initializeGameBoard()
        console.log("difficulty: " + currentDifficulty) 
        console.log("selected difficulty: " + selectedDifficulty) 
    }

    const renderBoard = () => {
        return gameboard.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'grid' }}>
                {row.map((value, colIndex) => (
                    <Card key={colIndex} style={gameboardGridStyle(rowIndex, colIndex)} onClick={() => handleGameBoardClick(rowIndex, colIndex)}>
                        {value !== 0 ? value : ""}
                    </Card>
                ))}
            </div>
        )) 
    } 

    const handleGameBoardClick = (rowIndex: number, colIndex: number) => {
        setIsClicked(prevState => {
            const newState = [...prevState] 
            for (let i = 0; i < newState.length; i++) {
                for (let j = 0; j < newState.length; j++) {
                    newState[i][j] = false 
                } 
            } 
            newState[rowIndex][colIndex] = true 
            
            setSelectedRow([rowIndex]) 
            setSelectedCol([colIndex]) 
            console.log(rowIndex, colIndex) 
            //identifyBox(rowIndex, colIndex) 
            return newState 
        }) 
    } 

    const renderAnswerBoard = () => {
        return answerBoard.map((value, index) => (
            <Card key={index} style={answerStyle(index)} onClick={() => handleAnswerClick(index + 1)} onMouseEnter={(index) => handleHover(index)} onMouseLeave={(index) => handleHover(index)}>
                {index + 1}
            </Card>
        )) 
    } 

    const handleHover = (index: React.MouseEvent<HTMLElement>) => {
        const ind = Number(index.currentTarget.getAttribute('data-value')) 
        isHover[ind] = !isHover[ind] 
    } 

    const handleAnswerClick = (index: number) => {
        setGameboard(prevGameboard => {
            const newGameboard = prevGameboard.map(row => [...row]) 
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (isClicked[i][j]) {
                        //checkCol(i,newGameboard,index) 
                        //checkRow(j,newGameboard,index) 
                        newGameboard[i][j] = index 
                    }
                }
            }
            return newGameboard 
        }) 
    } 

    const handleRemoveClick = () => {
        setGameboard(prevGameboard => {
            const newGameboard = prevGameboard.map(row => [...row])
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (isClicked[i][j]) {
                        console.log(" clicked value : " + prevGameboard[i][j])
                        console.log("remove : " + isUnremovable[i][j])
                        if (!isUnremovable[i][j]) {
                            newGameboard[i][j] = 0
                        }
                    }
                }
            }
            return newGameboard 
        })
    }

    const handleCommentClick = () => {
        setIsCommentMode(!isCommentMode) 
    }

    const handleHintClick = () => {
        setNumberOfHints((prevNumberOfHints) => prevNumberOfHints - 1)
        setGameboard(prevGameboard => {
            const newGameboard = prevGameboard.map(row => [...row])
            const newUnremovable = isUnremovable.map(row => [...row])
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (isClicked[i][j] && !isUnremovable[i][j]) {
                        console.log("ici")
                        newGameboard[i][j] = solvedGrid[i][j]
                        newUnremovable[i][j] = true
                    }
                }
            }
            setIsUnremovable(newUnremovable)
            return newGameboard
        })
    }

    const restart = () => {
        initializeGameBoard()
    } 
    
    // CSS

    const colors = Colors() 

    const bodyStyle: React.CSSProperties = {
        backgroundColor: colors.lighterGray,
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    } 

    const gameAreaStyle: React.CSSProperties = {
        display: isMobile ? 'grid' : 'flex',
        //display: 'flex',
    } 

    const gameboardAreaStyle: React.CSSProperties = {

    } 

    const gameboardStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(9,9fr)',
        gap: '1px',
    } 

    const gameboardGridStyle = (rowIndex: number, colIndex: number): React.CSSProperties => {
        const backgroundColor = isClicked[rowIndex][colIndex] ? colors.mainGreen : 'transparent' 
        const color = isClicked[rowIndex][colIndex] ? 'white' : 'black' 
        const fontWeight = isUnremovable[rowIndex][colIndex] ? 'bold' : 'normal'
        
        let rowColBackgroundColor = backgroundColor 
    
        if (selectedRow.includes(rowIndex) || selectedCol.includes(colIndex)) {
            rowColBackgroundColor = colors.veryLightGreen 
        } 

        if (selectedRow.includes(rowIndex) && selectedCol.includes(colIndex)) {
            rowColBackgroundColor = colors.mainGreen 
        } 
    
        return {
            width: widthCard, 
            height: heightCard, 
            margin: 'auto', 
            textAlign: 'center', 
            lineHeight: centeredHeight,
            backgroundColor: rowColBackgroundColor,
            color: color,
            fontWeight: fontWeight,
        } 
    } 
    

    const answerAreaStyle: React.CSSProperties = {
        marginLeft: isMobile ? '' : '30px',
        marginTop: isMobile ? '20px' : '',
    } 

    const actionButtonsStyle: React.CSSProperties = {
        width: isMobile ? '80vw' : '',
        justifyItems: 'center',
        display: 'grid',
        gridTemplateColumns: 'repeat(4,2fr)',
        gap: '1px',
    } 

    const actionButtonIconsStyle: React.CSSProperties = {
        fontSize: isMobile ? '5vh' : '50px', 
        backgroundColor: colors.veryLightGreen, 
        color: colors.mainGreen,
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
    } 

    const actionTextsStyle: React.CSSProperties = {
        fontSize: '50%',
        color: colors.mainGreen,
        marginLeft: '13px',
    } 

    const answerBoardStyle: React.CSSProperties = {
        width: isMobile ? '80vw' : '',
        justifyContent: 'center',
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(9,1fr)' : 'repeat(3,3fr)',
        gap: '3px',
    } 

    const answerStyle = (index: number): React.CSSProperties => {
        return {
            width : isMobile ? '40px' : "60px",
            height : isMobile ? '40px' : "60px",
            margin: 'auto', 
            fontSize: isMobile ? '23px' : "35px", 
            fontFamily: "helvetica", 
            color: colors.mainGreen, 
            //background: isHover[index] ? colors.bombRed : colors.veryLightGreen, 
            background: colors.veryLightGreen, 
            textAlign: 'center', 
            lineHeight: centeredHeight, 
            marginBottom: '8px'
        } 
    } 

    const buttonDivStyle: React.CSSProperties = {
        width: isMobile ? '80vw' : 'auto',
        justifyContent: 'center',
        display: 'flex',
        marginTop: '20px',
    } 

    const buttonStyle: React.CSSProperties = {
        backgroundColor: colors.mainGreen,
        color: 'white',
        fontSize: '12px',
        margin: '0px 100px',
    } 

    return (
        <>
            <header>
                <GameNavbar drawerGoal={texts.sudokuGoalText} drawerHow={texts.sudokuHow} drawerEnd={texts.sudokuEndText} />
            </header>
            
            { inMaintenance ? <InMaintenancePage />
            : 
                <>
                    <body style={bodyStyle}>
                        { isMobile ? 
                        <>
                            <div style={gameAreaStyle}>
                                <div style={gameboardAreaStyle}>
                                    <div>
                                        <MenuComponent buttonTitle={"Difficulté"} optionTitles={texts.sudokuOptions} onClick={(event) => handleDifficultyChange(event)} pictures={icons.sudokuMenuOptions} />
                                    </div>
                                    <div style={gameboardStyle}>
                                        {renderBoard()} 
                                    </div>
                                </div>
                                <div style={answerAreaStyle}>
                                    <div style={actionButtonsStyle}>
                                        <IconButton component={icons.sudokuReplay} sx={actionButtonIconsStyle}/>
                                        <IconButton component={icons.sudokuEdit} sx={actionButtonIconsStyle} onClick={handleRemoveClick}/> 
                                        <Badge badgeContent={isCommentMode ? 'ON' : 'OFF'} color="success" >
                                            <IconButton component={icons.sudokuComment} sx={actionButtonIconsStyle} onClick={handleCommentClick}/> 
                                        </Badge>
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
                        </>
                        :
                        <>
                            <div style={gameAreaStyle}>
                                <div style={gameboardAreaStyle}>
                                    <div>
                                        <MenuComponent buttonTitle={"Difficulté"} optionTitles={texts.sudokuOptions} onClick={(event) => handleDifficultyChange(event)} pictures={icons.sudokuMenuOptions} />
                                    </div>
                                    <div style={gameboardStyle}>
                                        {renderBoard()} 
                                    </div>
                                </div>
                                <div style={answerAreaStyle}>
                                    <div style={actionButtonsStyle}>
                                        <IconButton component={icons.sudokuReplay} sx={actionButtonIconsStyle}/>
                                        <IconButton component={icons.sudokuEdit} sx={actionButtonIconsStyle} onClick={handleRemoveClick}/> 
                                        <Badge badgeContent={isCommentMode ? 'ON' : 'OFF'} color="success" >
                                            <IconButton component={icons.sudokuComment} sx={actionButtonIconsStyle} onClick={handleCommentClick}/> 
                                        </Badge>
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
                        </>
                        }
                        <div style={buttonDivStyle}>
                            <Button style={buttonStyle} onClick={restart}> Rejouer </Button>
                            <Link to="/jeux">
                                <Button style={buttonStyle}> Quitter </Button>
                            </Link>
                        </div>
                        {isGameWon && (
                            <EndGameDialog title={'Bravo'} content={`Vous avez gagné`} onClick={restart} />
                        )}
                        {isGameLost && (
                            <EndGameDialog title={'Dommage'} content={`Vous avez perdu`} onClick={restart} />
                        )}
                    </body>
                    <footer>
                        <Footer />
                    </footer>
                </>
            }
        </>
    )
} 

export default SudokuGamePage