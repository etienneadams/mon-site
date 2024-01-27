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


    // light mode

    return {penduWords, penduGoalText, penduEndText, penduHowPrePhraseText, penduHow, penduWinText, penduLoseText,
            morpionGoalText, morpionHowPrePhraseText, morpionHow, morpionEndText};
}

export default texts;