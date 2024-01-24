import React from "react";
import Footer from "../../components/footer.tsx";
import GameNavbar from "../../components/navigation/gameNavbar.tsx";

const DemineurGamePage = () => {
    const drawerGoalText = 'Le but du jeu Démineur est de découvrir toutes les cases libres sur une grille sans déclencher de mines cachées. Le joueur doit utiliser des indices numériques pour éviter les cases piégées et marquer celles qui en sont certainement.';
    const drawerHow = ['Le Démineur se joue sur une grille rectangulaire composée de cases. Certaines cases contiennent des mines, tandis que d\'autres sont vides.',
                       'Le joueur commence en sélectionnant une case pour la découvrir. Cette action révèle soit une case vide, soit un numéro indiquant le nombre de mines adjacentes.',
                       'Si un joueur découvre une case piégée, la partie est terminée, et toutes les mines sont révélées.',
                       'Les cases numérotées indiquent le nombre de mines présentes dans les cases adjacentes (horizontalement, verticalement et en diagonale).',
                       'Le joueur peut marquer les cases qu\'il soupçonne de contenir une mine en plaçant un drapeau sur celles-ci. Cela permet d\'éviter de les découvrir accidentellement.',
                       'Le joueur continue de découvrir les cases et de marquer les mines jusqu\'à ce que toutes les cases libres soient révélées, remportant ainsi la partie.'];
    const drawerEndText = 'La partie se termine si un joueur découvre une case contenant une mine alors la partie est perdue ou si tous les espaces libres sont découverts sans déclencher de mine alors la partie est remportée.';


    return (
        <>
            <header>
                <GameNavbar drawerGoal={drawerGoalText} drawerHow={drawerHow} drawerEnd={drawerEndText} />
            </header>
            <body>
                DemineurGamePage
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default DemineurGamePage;