import React from "react";
import Footer from "../../components/footer.tsx";
import GameNavbar from "../../components/navigation/gameNavbar.tsx";

const Puissance4GamePage = () => {
    const drawerGoalText = 'Le but du jeu Puissance 4 est d\'aligner quatre jetons de sa propre couleur horizontalement, verticalement ou en diagonale sur une grille verticale. Deux joueurs s\'affrontent en plaçant tour à tour leurs jetons dans une colonne de la grille. Le premier joueur qui réussit à aligner quatre de ses jetons remporte la partie.';
    const drawerHowPrePhraseText = 'Le joueur choisit entre le mode 1 joueur (contre l\'ordinateur) et le mode 2 joueurs (joueur contre joueur) :';
    const drawerHow = ['Le Puissance 4 se joue sur une grille verticale de 7 colonnes et 6 lignes, créant ainsi 42 positions possibles.',
                       'Les joueurs alternent pour placer un jeton de leur couleur dans l\'une des colonnes vides de la grille.',
                       'L\'objectif est d\'aligner quatre jetons de sa propre couleur horizontalement, verticalement ou en diagonale avant l\'adversaire.'];
    const drawerEndText = 'La partie se termine dès qu\'un joueur réussit à aligner quatre de ses jetons ou si la grille est remplie sans qu\'aucun joueur ne parvienne à aligner quatre jetons.';


    return (
        <>
            <header>
                <GameNavbar drawerGoal={drawerGoalText} drawerHowPrePhrase={drawerHowPrePhraseText} drawerHow={drawerHow} drawerEnd={drawerEndText}  />
            </header>
            <body>
                Puissance4GamePage
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default Puissance4GamePage;