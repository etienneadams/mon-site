import React, { useEffect, useState } from 'react';
import { Alert, AlertTitle, Button, FormControlLabel, Icon, IconButton, Switch, TextField } from '@mui/material';
import GameNavbar from '../../components/navigation/gameNavbar.tsx';
import Footer from '../../components/footer.tsx';
import Colors from '../../colors/colors.tsx';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EndGameDialog from '../../components/game/endGameDialog.tsx';
import Texts from '../../components/game/texts.tsx';


const PenduGamePage = () => {
    const texts = Texts();
    
    const [word, setWord] = useState(() => {
        const randomIndex = Math.floor(Math.random() * texts.penduWords.length);
        return texts.penduWords[randomIndex].toLowerCase();        
    });
    console.log('word = ',word)

    const [listWord, setListWord] = useState([...word]);
    const [strTry, setStrTry] = useState('');
    const [listAnswer, setListAnswer] = useState(() => Array(word.length).fill(null));
    const [attempt, setAttempt] = useState(0);
    const [life, setLife] = useState(8);
    const [completed, setCompleted] = useState(false);
    const [cpt, setCpt] = useState(0);
    const [letterInput, setLetterInput] = useState('');
    const [clickedLetters, setClickedLetters] = useState<string[]>([]);
    const [switchChecked, setSwitchChecked] = useState<boolean>(true);
    const [gameWon, setGameWon] = useState(false);
    const [gameLost, setGameLost] = useState(false);

    useEffect(() => {
        if (life === 0) {
            setGameLost(true);
        }
    }, [life]);

    useEffect(() => {
        let answer;
        for (const i of listAnswer) {
            if (i !== null) {
                answer = listAnswer.join('');
            }
        }

        if (answer === word) {
            setGameWon(true);
        }
    }, [listAnswer, word]);

    const renderWordToDiscover = () => {
        return listAnswer.map((char, index) => (
            <span key={index} className="word-letter">
            <div style={{ borderRadius: '10px', border: 'solid 1px', borderColor: 'black', width: '30px', height: '30px', justifyContent: 'center', display: 'flex' }}>
                {char}
            </div>
            </span>
        ));
    };

    const handleLetterInput = (letter) => {
        if (life > 0 && !completed) {
            console.log(listAnswer);
            if (listWord.includes(letter)) {
                const updatedListAnswer = listAnswer.map((char, index) =>
                    (letter === listWord[index] ? letter : char)
            );
            setListAnswer(updatedListAnswer);
            if (!strTry.includes(letter)) {
                setStrTry((prev) => prev + letter);
            } else {
                console.log('Choose another one, letter already chosen');
            }
            } else if (strTry.includes(letter)) {
                console.log('Choose another one, letter already chosen');
            } else {
                setLife((prev) => prev - 1);
                console.log(`The letter ${letter} is not in the word.`);
                console.log(`${life} lives left.`);
            }

            let tempCpt = 0;
            for (const i of listAnswer) {
                if (i !== null) {
                    tempCpt += 1;
                }
            }

            setCpt(tempCpt);

            if (cpt === listAnswer.length) {
            setCompleted(true);
            }
            
        } else if (life === 0) {
            return (
                <Alert>
                    <AlertTitle> Perdu !</AlertTitle>
                </Alert>
            );
        }
    };

    const renderTriedLetters = () => {
        return strTry.split('').map((letter, index) => (
            <span key={index} style={{ color: listWord.includes(letter) ? 'green' : 'red' }} className="word-letter">
                {letter}
            </span>
        ));
    };

    const renderLifeIcons = () => {
    const lifeIcons: React.ReactNode[] = [];
    for (let i = 0; i < life; i++) {
        lifeIcons.push(<Icon key={i} component={FavoriteIcon} style={{ color: 'pink' }} />);
    }
    return lifeIcons;
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleLetterInput(letterInput);
            setLetterInput('');
        }
    };

    const handleKeyClick = (key: string) => {
        // Mettre à jour les touches cliquées
        handleLetterInput(key);
        setClickedLetters([...clickedLetters, key.toLowerCase()]);
    };

    const isKeyClicked = (key: string) => {
        // Vérifier si la touche a déjà été cliquée
        return clickedLetters.includes(key.toLowerCase());
    };

    const renderKeyboard = () => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return alphabet.split('').map((letter, index) => (
          <Button
            key={index}
            onClick={() => handleKeyClick(letter.toLowerCase())}
            disabled={isKeyClicked(letter)}
            style={{ margin: '2px', backgroundColor: isKeyClicked(letter) ? colors.disabledBlue : colors.royalBlue , color: 'white'}}
          >
            {letter}
          </Button>
        ));
    };

    const resetGame = () => {
        const randomIndex = Math.floor(Math.random() * texts.penduWords.length);
        const newWord = texts.penduWords[randomIndex];  // Sélectionnez un nouveau mot
    
        setWord(newWord);
        setListWord([...newWord]);
        setStrTry('');
        setListAnswer(Array(newWord.length).fill(null));
        setAttempt(0);
        setLife(8);
        setCompleted(false);
        setCpt(0);
        setLetterInput('');
        setClickedLetters([]);
        setGameWon(false);
        setGameLost(false);
    };    


    // CSS

    const colors = Colors();

    const bodyStyle: React.CSSProperties = {
        backgroundColor: colors.lighterGray,
        height: '80vh',
    };

    const switchStyle: React.CSSProperties = {
        float: 'right',
    };

    const guessStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '60px',
        height: '100px',
    };

    const tryDivStyle: React.CSSProperties = {
        wordSpacing: '20px',
        margin: '30px 20px',
    };

    const keyboardStyle: React.CSSProperties = {
        margin: 'auto',
        justifyContent: 'center',
        width: '650px',
        height: '150px',
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
            <GameNavbar drawerGoal={texts.penduGoalText} drawerHowPrePhrase={texts.penduHowPrePhraseText} drawerHow={texts.penduHow} drawerEnd={texts.penduEndText} />
        </header>
        <body style={bodyStyle}>
            <div style={switchStyle}>
                <FormControlLabel control={<Switch checked={switchChecked} onChange={() => setSwitchChecked(!switchChecked)} size='small' color='success'/>} label="Clavier"/>
            </div>
            <div style={guessStyle}>
                {renderWordToDiscover()}
            </div>
            {switchChecked ?
                <>
                    <div style={{marginBottom: '30px'}}>
                        {renderLifeIcons()}
                    </div>
                    <div style={keyboardStyle}>
                        {renderKeyboard()}
                    </div>
                </>
            :   
                <>
                    <div style={tryDivStyle}>
                        <p>Essais: </p>
                        {renderTriedLetters()}
                    </div>
                    <div style={{marginBottom: '30px'}}>
                        {renderLifeIcons()}
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <p>Enter a letter: </p>
                        <TextField type="text" size='small' style={{width: '50px'}} value={letterInput} onChange={(e) => setLetterInput(e.target.value)} onKeyDown={handleKeyDown} />
                    </div>
                </>
            }
            <div style={buttonDivStyle}>
                <Button style={buttonStyle} onClick={resetGame}> Rejouer </Button>
                <Link to="/jeux">
                    <Button style={buttonStyle}> Quitter </Button>
                </Link>
            </div>
            {gameWon && (
                <EndGameDialog title={'Bravo'} content={texts.penduWinText} onClick={resetGame} />
            )}
            {gameLost && (
                <EndGameDialog title={'Perdu'} content={texts.penduLoseText} onClick={resetGame} secretWord={word}/>
            )}
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default PenduGamePage;