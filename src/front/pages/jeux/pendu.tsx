import React, { useState } from 'react';
import { Alert, AlertTitle, Button, FormControlLabel, Icon, Switch, TextField } from '@mui/material';
import GameNavbar from '../../components/navigation/gameNavbar.tsx';
import Footer from '../../components/footer.tsx';
import Colors from '../../colors/colors.tsx';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

const PenduGamePage = () => {
    const words = ['lunette', 'ordinateur', 'tableau', 'serpilliere', 'chocolat', 'etude', 'evenement', 'maison', 'obligation', 'polyvalence', 'twingo'];
    const drawerGoalText = 'Le but du jeu du pendu est de trouver un mot secret en devinant les lettres qui le composent. Le mot est initialement caché, représenté par des tirets ou des espaces vides, un pour chaque lettre du mot. Le joueur doit proposer des lettres, une à la fois, en essayant de deviner quelles lettres sont présentes dans le mot secret.';
    const drawerEndText = 'Le joueur gagne la partie s\'il parvient à deviner toutes les lettres du mot secret avant d\'atteindre le nombre maximum d\'erreurs autorisées.';
    const drawerHowPrePhraseText = 'Le joueur choisit entre le mode <b>Clavier</b> et le mode sans :';
    const drawerHow = ['Le joueur propose une lettre en tapant la lettre souhaitée suivi de la touche \'Entrée\' sur le clavier physique ou en cliquant sur la case correspondante sur le clavier virtuel.',
                       'Après chaque proposition de lettre, le jeu vérifie si la lettre est présente dans le mot secret. Si c\'est le cas, les occurrences de cette lettre sont révélées dans le mot, et le joueur peut proposer une autre lettre.',
                       'Si la lettre proposée n\'est pas dans le mot secret, une erreur est comptabilisée. Le nombre d\'erreurs est représenté graphiquement par des coeurs roses.',
                       'Le joueur a un nombre limité d\'erreurs autorisées (6). Si le joueur atteint ce nombre d\'erreurs sans avoir deviné correctement le mot secret, la partie est perdue.'];
    const [word, setWord] = useState(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
    });

    const [listWord, setListWord] = useState([...word]);
    const [strTry, setStrTry] = useState('');
    const [listAnswer, setListAnswer] = useState(() => Array(word.length).fill(null));
    const [attempt, setAttempt] = useState(0);
    const [life, setLife] = useState(8);
    const [completed, setCompleted] = useState(false);
    const [cpt, setCpt] = useState(0);
    const [letterInput, setLetterInput] = useState('');
    const [clickedLetters, setClickedLetters] = useState<string[]>([]);
    const [ switchChecked, setSwitchChecked] = useState<boolean>(false);

    const renderWordToDiscover = () => {
        return listAnswer.map((char, index) => (
            <span key={index} className="word-letter">
            <div style={{ borderRadius: '10px', border: 'solid 1px', borderColor: 'black', width: '30px', height: '30px', justifyContent: 'center', display: 'flex' }}>
                {char}
            </div>
            </span>
        ));
    };

    const handleKeyboardClick = (letter) => {
        handleLetterInput(letter);
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

    const Verif = () => {
    let answer;
    for (const i of listAnswer) {
        if (i !== null) {
            answer = listAnswer.join('');
        } else {
            console.log('You found any letter of the word');
        }
    }

    if (answer === word) {
        console.log(`Congratulations! The word was ${answer}, you succeed in ${attempt} attempts`);
    } else {
        console.log('You lose, you can retry');
    }
    };

    const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        handleLetterInput(letterInput);
        setLetterInput('');
    }
    };

    const renderKeyboard = () => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return alphabet.split('').map((letter, index) => (
          <Button
            key={index}
            onClick={() => handleLetterInput(letter)}
            disabled={clickedLetters.includes(letter)}
            style={keysStyle}
          >
            {letter}
          </Button>
        ));
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
        paddingTop: '30px',
    };

    const tryDivStyle: React.CSSProperties = {
        wordSpacing: '20px',
    };

    const keyboardStyle: React.CSSProperties = {
        margin: 'auto',
        justifyContent: 'center',
        width: '650px',
    };

    const keysStyle: React.CSSProperties = {
        //backgroundColor: 'blue',
        //color: 'white',
        margin: '2px',
    };

    const buttonDivStyle: React.CSSProperties = {
        justifyContent: 'center',
        display: 'flex',
    };

    const buttonStyle: React.CSSProperties = {
        backgroundColor: colors.mainGreen,
        color: 'white',
        fontSize: '12px',
    };

    return (
    <>
        <header>
            <GameNavbar drawerGoal={drawerGoalText} drawerHowPrePhrase={drawerHowPrePhraseText} drawerHow={drawerHow} drawerEnd={drawerEndText} />
        </header>
        <body style={bodyStyle}>
            <div style={switchStyle}>
                <FormControlLabel control={<Switch checked={switchChecked} onChange={() => setSwitchChecked(!switchChecked)} size='small' color='success'/>} label="Clavier"/>
            </div>
            <div style={guessStyle}>
                {renderWordToDiscover()}
            </div>
            <div style={tryDivStyle}>
                <p>Essais: </p>
                {renderTriedLetters()}
            </div>
            <div>
                {renderLifeIcons()}
            </div>
            {!switchChecked ? 
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <p>Enter a letter: </p>
                    <TextField type="text" size='small' style={{width: '50px'}} value={letterInput} onChange={(e) => setLetterInput(e.target.value)} onKeyDown={handleKeyDown} />
                </div>
            : null}
            
            {switchChecked ? 
                <div style={keyboardStyle}>
                    {renderKeyboard()}
                </div>
            : null}
            <button onClick={Verif}>Verify</button>
            <div style={buttonDivStyle}>
                <Button style={buttonStyle}> Rejouer </Button>
                <Link to="/jeux">
                    <Button style={buttonStyle}> Quitter </Button>
                </Link>
            </div>
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default PenduGamePage;