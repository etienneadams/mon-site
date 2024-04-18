import React from "react";
import Footer from "../components/footer.tsx";
import Navbar from "../components/navigation/navbar.tsx";
import Colors from "../colors/colors.tsx";
import GameCard from "../components/game/gameCard.tsx";
import TicTacToeImage from "../assets/Tic Tac Toe.png";
import P4Image from "../assets/Puissance 4.png";
import PenduImage from "../assets/Pendu.png";
import BombImage from "../assets/minesweeper.jpg";
import TravleImage from "../assets/travle.png";
import SudokuImage from "../assets/sudoku.png";
import EchecImage from "../assets/echec.png";

const GamePage = () => {

    //CSS
    const colors = Colors();

    const bodyStyle: React.CSSProperties = {
        backgroundColor: colors.lightGray,
        display: 'grid',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
    };

    
    return (
        <>
            <header>
                <Navbar page="jeux"/>
            </header>
            <body style={bodyStyle}>
                <GameCard title={"Morpion"} rules={"2 joueurs"} goal={"aligner 3 symboles"} image={TicTacToeImage}/>
                <GameCard title={"Puissance 4"} rules={"2 joueurs"} goal={"aligner 4 pions"} image={P4Image}/>
                <GameCard title={"Pendu"} rules={"1 joueur"} goal={"trouver le mot"} image={PenduImage}/>
                <GameCard title={"Demineur"} rules={"1 joueur"} goal={"éviter les bombes"} image={BombImage}/>
                <GameCard title={"Sudoku"} rules={"1 joueur"} goal={"remplir la grille"} image={SudokuImage}/>
                <GameCard title={"Travle"} rules={"1 joueur"} goal={"relier les pays"} image={TravleImage}/>
                <GameCard title={"Echec"} rules={"2 joueurs"} goal={"mettre le roi adverse en echec"} image={EchecImage}/>
            </body>
            <footer>
                <Footer/>
            </footer>
        </>
    )
};

export default GamePage;