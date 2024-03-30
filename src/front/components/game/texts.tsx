const texts = () => {
    // pendu
    const penduWords = [
        'lunette', 'ordinateur', 'tableau', 'serpilliere', 'chocolat', 'etude', 'evenement', 'maison', 'obligation', 'polyvalence', 'twingo',
        'ane', 'axe', 'bel', 'bip', 'car', 'col', 'coq', 'cor', 'cou', 'cri', 'gag', 'gaz', 'gel', 'jus', 'net', 'nul', 'val', 'ski', 'sot', 'tas', 'tic',
        'atre', 'beau', 'bete', 'boxe', 'brun', 'cerf', 'chez', 'cire', 'dame', 'dent', 'dock', 'dodo', 'drap', 'dune', 'emeu', 'fado', 'faux', 'ibis', 'jazz', 'joli', 'joue', 'kaki', 'logo', 'loin', 'long', 'lune', 'lynx', 'mine', 'mure', 'ouie', 'ours', 'pion', 'rhum', 'ride', 'rock', 'seau', 'test', 'thym', 'trou', 'truc', 'user', 'vert', 'Yogi', 'watt',
        'acces', 'aimer', 'aloes', 'assez', 'avion', 'awale', 'balai', 'banjo', 'barbe', 'bonne', 'bruit', 'buche', 'cache', 'capot', 'carte', 'chien', 'crane', 'cycle', 'ebene', 'essai', 'gifle', 'honni', 'jambe', 'koala', 'livre', 'lourd', 'maman', 'moult', 'noeud', 'ortie', 'peche', 'poire', 'pomme', 'poste', 'prune', 'radar', 'radis', 'robot', 'route', 'rugby', 'seuil', 'taupe', 'tenue', 'texte', 'tyran', 'usuel', 'valse',
        'acajou', 'agneau', 'alarme', 'ananas', 'angora', 'animal', 'arcade', 'aviron', 'azimut', 'babine', 'balade', 'bonzai', 'basson', 'billet', 'bouche', 'boucle', 'bronze', 'cabane', 'caiman', 'cloche', 'cheque', 'cirage', 'coccyx', 'crayon', 'garage', 'gospel', 'goulot', 'gramme', 'grelot', 'guenon', 'hochet', 'hormis', 'humour', 'hurler', 'jargon', 'limite', 'lionne', 'menthe', 'oiseau', 'podium', 'poulpe', 'poumon', 'puzzle', 'quartz', 'rapide', 'seisme', 'tetine', 'tomate', 'walabi', 'whisky', 'zipper',
        'abriter', 'ballast', 'baryton', 'bassine', 'batavia', 'billard', 'bretzel', 'cithare', 'chariot', 'clairon', 'corbeau', 'cortege', 'crapaud', 'cymbale', 'dentier', 'djembe', 'drapeau', 'exemple', 'fourmis', 'grandir', 'iceberg', 'javelot', 'jockey', 'journal', 'journee', 'jouxter', 'losange', 'macadam', 'mondial', 'notable', 'oxygene', 'panique', 'petrole', 'poterie', 'pouvoir', 'renegat', 'scooter', 'senteur', 'sifflet', 'spirale', 'sucette', 'strophe', 'tonneau', 'trousse', 'tunique', 'ukulele', 'vautour', 'zozoter',
        'aquarium', 'araignee', 'arbalete', 'archipel', 'banquise', 'batterie', 'brocante', 'brouhaha', 'capeline', 'clavecin', 'cloporte', 'debutant', 'diapason', 'gangster', 'gothique', 'hautbois', 'herisson', 'logiciel', 'objectif', 'paranoia', 'parcours', 'pastiche', 'question', 'quetsche', 'scarabee', 'scorpion', 'symptome', 'tabouret', 'tomahawk', 'toujours', 'tourisme', 'triangle', 'utopique', 'zeppelin',
        'accordeon', 'ascenseur', 'ascension', 'aseptiser', 'autoroute', 'avalanche', 'balalaika', 'bilboquet', 'bourricot', 'brillance', 'cabriolet', 'contrario', 'cornemuse', 'dangereux', 'epluchage', 'feodalite', 'forteresse', 'gondolier', 'graphique', 'horoscope', 'intrepide', 'klaxonner', 'mascarade', 'metaphore', 'narrateur', 'peripetie', 'populaire', 'printemps', 'quemander', 'tambourin', 'vestiaire', 'xylophone',
        'acrostiche', 'apocalypse', 'attraction', 'aventurier', 'bouillotte', 'citrouille', 'controverse', 'coquelicot', 'dissimuler', 'flibustier', 'forestiere', 'grenouille', 'impossible', 'labyrinthe', 'maharadjah', 'prudemment', 'quadriceps', 'soliloquer', 'subjective',
        'baccalaureat', 'abracadabra', 'francophile', 'pandemonium', 'chlorophylle', 'metallurgie', 'metamorphose', 'montgolfiere', 'kaleidoscope', 'conquistador', 'conspirateur', 'rhododendron', 'qualification', 'protozoaire', 'quadrilatere', 'zygomatique', 'sorcellerie', 'belligerant'
    ];
    const penduGoalText = 'Le but du jeu du pendu est de trouver un mot secret en devinant les lettres qui le composent. le mot est initialement cache, represente par des tirets ou des espaces vides, un pour chaque lettre du mot. le joueur doit proposer des lettres, une à la fois, en essayant de deviner quelles lettres sont presentes dans le mot secret.';
    const penduEndText = 'Le joueur gagne la partie s\'il parvient à deviner toutes les lettres du mot secret avant d\'atteindre le nombre maximum d\'erreurs autorisees.';
    const penduHowPrePhraseText = 'Le joueur choisit entre le mode clavier et le mode sans :';
    const penduHow = ['Le joueur propose une lettre en tapant la lettre souhaitee suivi de la touche \'entree\' sur le clavier physique ou en cliquant sur la case correspondante sur le clavier virtuel.',
                       'Apres chaque proposition de lettre, le jeu verifie si la lettre est presente dans le mot secret. si c\'est le cas, les occurrences de cette lettre sont revelees dans le mot, et le joueur peut proposer une autre lettre.',
                       'Si la lettre proposee n\'est pas dans le mot secret, une erreur est comptabilisee. le nombre d\'erreurs est represente graphiquement par des coeurs roses.',
                       'Le joueur a un nombre limite d\'erreurs autorisees (6). si le joueur atteint ce nombre d\'erreurs sans avoir devine correctement le mot secret, la partie est perdue.'];
    const penduWinText = 'Vous avez trouvez le mot secret';
    const penduLoseText = 'Vous n\'avez plus d\'essai';

    // Morpion
    const morpionGoalText = 'Le but du jeu Morpion est d\'aligner trois symboles identiques horizontalement, verticalement ou en diagonale sur une grille de 3x3 cases. Les deux joueurs, l\'un utilisant les "X" et l\'autre les "O", alternent pour placer leurs symboles sur la grille. Le premier joueur qui parvient à aligner trois de ses symboles remporte la partie.';
    const morpionHowPrePhraseText = 'Le joueur choisit entre le mode 1 joueur (contre l\'ordinateur) et le mode 2 joueurs (joueur contre joueur) :';
    const morpionHow = ['Le Morpion se joue sur une grille de 3x3 cases, créant ainsi neuf positions possibles.',
                       'Les joueurs prennent tour à tour leur tour pour placer leur symbole sur une case vide.',
                       'L\'objectif est d\'aligner trois de ses symboles (soit "X" soit "O") horizontalement, verticalement ou en diagonale avant l\'adversaire.'];
    const morpionEndText = 'La partie se termine dès qu\'un joueur réussit à aligner trois de ses symboles ou si la grille est remplie sans qu\'aucun joueur ne parvienne à aligner trois symboles.';

    // Puissance 4
    const puissance4GoalText = 'Le but du jeu Puissance 4 est d\'aligner quatre jetons de sa propre couleur horizontalement, verticalement ou en diagonale sur une grille verticale. Deux joueurs s\'affrontent en plaçant tour à tour leurs jetons dans une colonne de la grille. Le premier joueur qui réussit à aligner quatre de ses jetons remporte la partie.';
    const puissance4HowPrePhraseText = 'Le joueur choisit entre le mode 1 joueur (contre l\'ordinateur) et le mode 2 joueurs (joueur contre joueur) :';
    const puissance4How = ['Le Puissance 4 se joue sur une grille verticale de 7 colonnes et 6 lignes, créant ainsi 42 positions possibles.',
                       'Les joueurs alternent pour placer un jeton de leur couleur dans l\'une des colonnes vides de la grille.',
                       'L\'objectif est d\'aligner quatre jetons de sa propre couleur horizontalement, verticalement ou en diagonale avant l\'adversaire.'];
    const puissance4EndText = 'La partie se termine dès qu\'un joueur réussit à aligner quatre de ses jetons ou si la grille est remplie sans qu\'aucun joueur ne parvienne à aligner quatre jetons.';

    // Demineur
    const demineurGoalText = 'Le but du jeu Démineur est de découvrir toutes les cases libres sur une grille sans déclencher de mines cachées. Le joueur doit utiliser des indices numériques pour éviter les cases piégées et marquer celles qui en sont certainement.';
    const demineurHow = ['Le Démineur se joue sur une grille rectangulaire composée de cases. Certaines cases contiennent des mines, tandis que d\'autres sont vides.',
                       'Le joueur commence en sélectionnant une case pour la découvrir. Cette action révèle soit une case vide, soit un numéro indiquant le nombre de mines adjacentes.',
                       'Si un joueur découvre une case piégée, la partie est terminée, et toutes les mines sont révélées.',
                       'Les cases numérotées indiquent le nombre de mines présentes dans les cases adjacentes (horizontalement, verticalement et en diagonale).',
                       'Le joueur peut marquer les cases qu\'il soupçonne de contenir une mine en plaçant un drapeau sur celles-ci. Cela permet d\'éviter de les découvrir accidentellement.',
                       'Le joueur continue de découvrir les cases et de marquer les mines jusqu\'à ce que toutes les cases libres soient révélées, remportant ainsi la partie.'];
    const demineurEndText = 'La partie se termine si un joueur découvre une case contenant une mine alors la partie est perdue ou si tous les espaces libres sont découverts sans déclencher de mine alors la partie est remportée.';
    const demineurOptions = ['Facile',
                            'Difficile',
                            'Expert']

    // Sudoku 
    const sudokuGoalText = 'Le but du jeu Sudoku est de remplir une grille de 9x9 cases avec des chiffres de 1 à 9, de telle sorte que chaque ligne, chaque colonne et chaque région de 3x3 cases contienne tous les chiffres de 1 à 9 sans répétition.'
    const sudokuHow = ['La grille est divisée en neuf régions de 3x3 cases, formant un total de 81 cases. Certaines cases sont déjà remplies avec des chiffres, ce sont les indices initiaux.',
                        'Le joueur doit remplir les cases vides en plaçant un chiffre de 1 à 9 dans chacune d\'elles.',
                        'Chaque chiffre doit apparaître une seule fois dans chaque ligne, chaque colonne et chaque région de 3x3 cases.',
                        'Le joueur utilise des techniques de résolution telles que la recherche de candidats, l\'élimination, les paires et les triples pour déterminer où placer les chiffres manquants.',
                        'Le Sudoku est un jeu de patience et de logique, et le joueur doit utiliser son raisonnement pour remplir la grille correctement.']
    const sudokuEndText = 'Le jeu s\'arrête lorsque la grille est remplie correctement, chaque ligne, colonne et région contient tous les chiffres de 1 à 9 sans répétition.'
    const sudokuOptions = ['Facile',
                            'Moyen',
                            'Difficile',
                            'Expert',
                            'Maître']
    const sudokuEasyGrid1 = [[5,0,0,3,1,7,9,2,0],
                            [0,0,7,0,0,0,1,0,5],
                            [0,0,0,8,5,6,0,0,0],
                            [0,2,0,0,7,0,0,0,8],
                            [0,0,8,5,9,0,2,0,0],
                            [0,9,0,2,3,0,6,0,7],
                            [2,0,0,4,6,0,0,0,1],
                            [8,4,0,1,2,0,0,0,0],
                            [0,5,0,7,0,9,0,4,0]]

    const sudokuEasyGrid1Solved = [[5,8,4,3,1,7,9,2,6],
                                  [6,3,7,9,4,2,1,8,5],
                                  [9,1,2,8,5,6,4,7,3],
                                  [3,2,1,6,7,4,5,9,8],
                                  [7,6,8,5,9,1,2,3,4],
                                  [4,9,5,2,3,8,6,1,7],
                                  [2,7,9,4,6,3,8,5,1],
                                  [8,4,3,1,2,5,7,6,9],
                                  [1,5,6,7,8,9,3,4,2]]
    
    const sudokuEasyGrid1Test = [[5,8,4,3,1,7,9,2,6],
                                [6,3,7,9,4,2,1,8,5],
                                [9,1,2,8,5,6,4,7,3],
                                [3,2,1,6,7,4,5,9,8],
                                [7,6,8,5,9,1,2,3,4],
                                [4,9,5,2,3,8,6,1,7],
                                [2,7,9,4,6,3,8,5,1],
                                [8,4,3,1,2,5,7,6,9],
                                [1,5,6,7,8,9,3,4,0]] // 2

    const sudokuMediumGrid1 = [[3,2,0,7,0,0,0,9,0],
                              [8,0,0,4,0,0,2,0,0],
                              [0,4,0,2,9,3,8,0,0],
                              [0,0,2,3,0,0,1,0,0],
                              [0,8,4,9,0,0,0,2,6],
                              [0,6,0,5,0,0,9,7,0],
                              [2,0,8,0,0,0,5,0,9],
                              [0,0,0,0,0,5,0,0,0],
                              [0,0,7,0,0,9,0,3,0]]

    const sudokuMediumGrid1Solved = [[3,2,5,7,6,8,4,9,1],
                                    [8,7,9,4,5,1,2,6,3],
                                    [6,4,1,2,9,3,8,5,7],
                                    [7,9,2,3,4,6,1,8,5],
                                    [5,8,4,9,1,7,3,2,6],
                                    [1,6,3,5,8,2,9,7,4],
                                    [2,3,8,6,7,4,5,1,9],
                                    [9,1,6,8,3,5,7,4,2],
                                    [4,5,7,1,2,9,6,3,8]]

    const sudokuHardGrid1 = [[6,8,3,1,0,0,0,0,0],
                            [0,0,0,0,0,5,7,1,0],
                            [0,0,0,0,0,0,0,0,0],
                            [5,0,9,0,0,4,2,0,0],
                            [0,0,0,8,0,0,0,0,0],
                            [0,4,0,0,0,0,0,9,0],
                            [1,3,0,2,0,6,4,0,0],
                            [0,6,0,0,0,0,0,0,9],
                            [0,0,0,0,0,0,0,2,3]]

    const sudokuExpertGrid1 = [[0,0,5,8,0,0,0,0,0],
                              [2,0,0,0,0,0,0,0,0],
                              [0,0,0,0,0,6,7,4,3],
                              [7,0,9,0,0,0,8,0,0],
                              [0,0,0,0,0,0,0,7,4],
                              [0,0,0,0,0,4,1,0,9],
                              [0,6,0,0,0,0,0,0,0],
                              [1,0,0,0,2,7,6,5,0],
                              [5,0,0,0,0,3,0,0,0]]

    const sudokuExpertGrid1Solved = [[0,0,5,8,0,0,0,0,0],
                                    [2,0,0,0,0,0,0,0,0],
                                    [0,0,0,0,0,6,7,4,3],
                                    [7,0,9,0,0,0,8,0,0],
                                    [0,0,0,0,0,0,0,7,4],
                                    [0,0,0,0,0,4,1,0,9],
                                    [0,6,0,0,0,0,0,0,0],
                                    [1,0,0,0,2,7,6,5,0],
                                    [5,0,0,0,0,3,0,0,0]]

    const sudokuMasterGrid1 = [[0,0,4,0,0,0,0,8,0],
                                [2,0,0,7,0,0,0,0,0],
                                [0,6,0,0,0,8,0,0,9],
                                [0,0,5,4,0,0,0,0,0],
                                [1,0,0,0,0,5,0,0,2],
                                [0,0,0,0,0,0,0,9,0],
                                [0,0,6,0,0,9,3,0,5],
                                [8,3,0,0,1,0,0,0,0],
                                [0,0,1,0,0,2,0,0,6]]

    const sudokuEasyGrids = [sudokuEasyGrid1]
    const sudokuEasySolvedGrids = [sudokuEasyGrid1Solved]
    const sudokuMediumGrids= [sudokuMediumGrid1]
    const sudokuMediumSolvedGrids = [sudokuMediumGrid1Solved]
    const sudokuHardGrids = [sudokuHardGrid1]
    const sudokuHardSolvedGrids = []
    const sudokuExpertGrids = [sudokuExpertGrid1]
    const sudokuExpertSolvedGrids = []
    const sudokuMasterGrids = [sudokuMasterGrid1]
    const sudokuMasterSolvedGrids = []

    // Travle
    const travleGoalText = 'Le but du jeu Travle est de relier deux pays en créant un chemin constitué des pays qui les relient. Le joueur devra utiliser leur connaissance géographique pour trouver la séquence de pays permettant de relier efficacement le point de départ au point d\'arrivée.';
    const travleHow = ['Le joueur prend connaissance des pays qu\'il devra joindre.',
                       'En utilisant ses connaissance des frontières et des relations géographiques entre les pays, le joueur doit identifier les pays qui connectent le point de départ au point d\'arrivée.',
                       'Le joueur écrit le nom des pays pour former le chemin. Chaque pays doit être directement relié au pays précédent et au pays suivant dans la séquence.',
                       'L\'objectif est donc de relier les deux pays initiaux en un nombre d\'essai maximum.'];
    const travleEndText = 'Le jeu s\'arrête si le chemin est créé correctement (vitoire) ou si le nombre d\'essai maximum est atteint (défaite).';


    // light mode

    return {penduWords, penduGoalText, penduEndText, penduHowPrePhraseText, penduHow, penduWinText, penduLoseText,
            morpionGoalText, morpionHowPrePhraseText, morpionHow, morpionEndText,
            puissance4GoalText, puissance4HowPrePhraseText, puissance4How, puissance4EndText,
            demineurGoalText, demineurHow, demineurEndText, demineurOptions,
            travleGoalText, travleHow, travleEndText, 
            sudokuGoalText, sudokuHow, sudokuEndText, sudokuOptions, 
            sudokuEasyGrids, sudokuEasySolvedGrids, sudokuEasyGrid1Test, sudokuMediumGrids, sudokuMediumSolvedGrids, sudokuHardGrids, sudokuExpertGrids, sudokuMasterGrids};
}

export default texts;