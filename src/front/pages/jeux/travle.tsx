import React from "react";
import Footer from "../../components/footer.tsx";
import GameNavbar from "../../components/navigation/gameNavbar.tsx";

const TravleGamePage = () => {
    const drawerGoalText = 'Le but du jeu Travle est de relier deux pays en créant un chemin constitué des pays qui les relient. Le joueur devra utiliser leur connaissance géographique pour trouver la séquence de pays permettant de relier efficacement le point de départ au point d\'arrivée.';
    const drawerHow = ['Le joueur prend connaissance des pays qu\'il devra joindre.',
                       'En utilisant ses connaissance des frontières et des relations géographiques entre les pays, le joueur doit identifier les pays qui connectent le point de départ au point d\'arrivée.',
                       'Le joueur écrit le nom des pays pour former le chemin. Chaque pays doit être directement relié au pays précédent et au pays suivant dans la séquence.',
                       'L\'objectif est donc de relier les deux pays initiaux en un nombre d\'essai maximum.'];
    const drawerEndText = 'Le jeu s\'arrête si le chemin est créé correctement (vitoire) ou si le nombre d\'essai maximum est atteint (défaite).';

    return (
        <>
            <header>
                <GameNavbar drawerGoal={drawerGoalText} drawerHow={drawerHow} drawerEnd={drawerEndText} />
            </header>
            <body>
                TravleGamePage
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default TravleGamePage;