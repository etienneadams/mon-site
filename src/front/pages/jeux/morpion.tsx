import React from "react";
import Footer from "../../components/footer.tsx";
import GameNavbar from "../../components/navigation/gameNavbar.tsx";

const MorpionGamePage = () => {
    const drawerGoalText = 'Le but du jeu Morpion est d\'aligner trois symboles identiques horizontalement, verticalement ou en diagonale sur une grille de 3x3 cases. Les deux joueurs, l\'un utilisant les "X" et l\'autre les "O", alternent pour placer leurs symboles sur la grille. Le premier joueur qui parvient à aligner trois de ses symboles remporte la partie.';
    const drawerHowPrePhraseText = 'Le joueur choisit entre le mode 1 joueur (contre l\'ordinateur) et le mode 2 joueurs (joueur contre joueur) :';
    const drawerHow = ['Le Morpion se joue sur une grille de 3x3 cases, créant ainsi neuf positions possibles.',
                       'Les joueurs prennent tour à tour leur tour pour placer leur symbole sur une case vide.',
                       'L\'objectif est d\'aligner trois de ses symboles (soit "X" soit "O") horizontalement, verticalement ou en diagonale avant l\'adversaire.'];
    const drawerEndText = 'La partie se termine dès qu\'un joueur réussit à aligner trois de ses symboles ou si la grille est remplie sans qu\'aucun joueur ne parvienne à aligner trois symboles.';

    return (
        <>
            <header>
                <GameNavbar drawerGoal={drawerGoalText} drawerHowPrePhrase={drawerHowPrePhraseText} drawerHow={drawerHow} drawerEnd={drawerEndText}  />
            </header>
            <body>
                Morpion
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default MorpionGamePage;