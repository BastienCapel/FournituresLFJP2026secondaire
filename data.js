const generalSuppliesHTML = `
    <div class="general-supplies">
        <h3 class="font-bold text-blue-900 mb-2 uppercase text-sm">Fournitures Générales (à avoir en permanence) :</h3>
        <div class="grid grid-cols-2 gap-2 text-xs text-gray-700">
            <ul class="list-disc list-inside">
                <li>Cartable, agenda, trousse complète</li>
                <li>Gourde, mouchoirs, ciseaux (adaptés si gaucher)</li>
                <li>Crayon papier HB, gomme, colle, taille-crayons</li>
                <li>2 stylos 4 couleurs, règle fer (30cm)</li>
            </ul>
            <ul class="list-disc list-inside">
                <li>Feutres (12) et crayons de couleur (12)</li>
                <li>1 pochette rabats verte A4 (évaluations)</li>
                <li>1 pochette rabats rouge A4 (feuilles simples et doubles Seyès)</li>
                <li>Clé USB</li>
            </ul>
        </div>
    </div>
`;
// Données complètes pour la vue "Par Discipline"
const disciplinesData = {
    'anglais': { 
        title: 'Anglais', 
        teachers: ['M. FAYE', 'Mme JAÏT', 'Mme PORTER'], 
        content: `
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3 ribbon-container"><div class="ribbon-small">En attente de décision<br>sur la sixième</div><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 6ème</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier Seyès 24X32 96p rouge</li><li>Way to go 6ème, Lelivrescolaire (ISBN : 9791040007685)</li><li>Way to go : Workbook 6ème, Lelivrescolaire (ISBN : 9791040007692)</li><li><em>(Uniquement pour M. Faye. Dr. Porter n'utilise pas ces manuels)</em></li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 5ème</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier Seyès 24X32 96p</li><li>1 cahier de brouillon (utilisable dans les autres matières)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 4ème</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier Seyès 24X32 96p rouge</li><li>Stylo bleu ou noir et stylo rouge</li><li>Feutres ou crayons de couleur</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 3ème</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier Seyès 24X32 96p rouge</li><li>Piece of Cake (manuel cycle 4), Lelivrescolaire 2017 (ISBN : 9791090910898)</li><li>Piece of cake : Workbook 3eme, Lelivrescolaire 2017 (ISBN : 978-2377600038)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Seconde (2nde)</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier Seyès 24X32 96p rouge</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Première (1ère)</h3><ul class="list-disc ml-4 text-sm"><li><strong>Tronc Commun :</strong> 1 cahier Seyès 24X32 96p rouge, feutres couleurs, stylos.</li><li><strong>Spé AMC :</strong> 1 cahier Seyès 24X32 96p rouge, 1 porte-vues rouge 60 vues ou pochette bleue. Shine Bright 1ere/Term, Nathan 2021 (ISBN : 9782091781778)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Terminale</h3><ul class="list-disc ml-4 text-sm"><li><strong>Tronc Commun :</strong> 1 cahier Seyès 24X32 96p rouge, feutres couleurs, stylos.</li><li><strong>Spé AMC :</strong> 1 cahier Seyès 24X32 96p rouge, 1 porte-vues rouge 60 vues. Let's Meet up!, Hatier 2021 (ISBN : 978-2-401-07728-7)</li></ul></div>` 
    },
    'arts': { 
        title: 'Arts Plastiques', 
        teachers: ['Mme CAPEL'],
        content: `
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 6ème</h3><ul class="list-disc ml-4 text-sm"><li>1 porte-vues 50 pochettes A4</li><li>Feuilles dessin blanches 180g (A4 ou A3) et couleurs 160g 24X32</li><li>1 pochette calques 70g A4</li><li>Trousse dédiée : feutre noir Flair, 5 tubes gouache 10ml, 12 feutres, 12 crayons couleur, scotch.</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classes de 5ème, 4ème et 3ème</h3><ul class="list-disc ml-4 text-sm"><li>Feuilles dessin blanches 180g (A4 ou A3)</li><li>Trousse dédiée : feutre noir Flair, 12 feutres, 12 crayons couleur, scotch.</li><li><strong>Nouveaux élèves :</strong> 1 porte-vues 50 pochettes A4, feuilles dessin couleurs 160/180g (A3 ou 24x32), calques 70g A4.</li><li><strong>Anciens élèves :</strong> vous êtes invités à garder le même lutin que l'année précédente.</li></ul></div>` 
    },
    'ens_sci': { 
        title: 'Enseignement Scientifique', 
        teachers: [],
        content: `
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Première (1ère)</h3><ul class="list-disc ml-4 text-sm"><li>1 classeur bleu A4, 6 intercalaires, lot de pochettes plastifiées A4</li><li>Enseignement scientifique 1ère Lelivrescolaire (Manuel en ligne)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Terminale</h3><ul class="list-disc ml-4 text-sm"><li>1 classeur bleu A4, 6 intercalaires, lot de pochettes plastifiées A4</li><li>Enseignement scientifique Tle Lelivrescolaire (Manuel en ligne)</li></ul></div>` 
    },
    'eps': { 
        title: 'Éducation Physique et Sportive (EPS)', 
        teachers: ['Mme DRAME', 'M. NDIAYE'],
        content: `
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">De la 6ème à la Terminale</h3><ul class="list-disc ml-4 text-sm"><li>1 pantalon ou short de sport noir ou bleu marine</li><li>1 T-Shirt orange</li><li>Chaussures de sport attachées</li><li>Gourde (déjà dans fournitures générales)</li><li>Cheveux attachés, chaussettes propres, casquette pour l'extérieur.</li></ul></div>` 
    },
    'espagnol': { 
        title: 'Espagnol', 
        teachers: ['Mme GIBUS', 'M. PIAGGIO'],
        content: `
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 6ème</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier Seyès 24X32 96p jaune</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 5ème</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier Seyès 24X32 96p jaune</li><li>Cahier d'activités Hispamundo 5e, Lelivrescolaire 2026 (ISBN : 9791040008682)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 4ème</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier Seyès 24X32 96p jaune</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 3ème</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier Seyès 24X32 96p jaune</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Seconde (2nde)</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier Seyès 24X32 96p jaune</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Première (1ère)</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier Seyès 24X32 96p jaune</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Terminale</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier Seyès 24X32 96p jaune</li></ul></div>` 
    },
    'hggsp': { 
        title: 'HGGSP', 
        teachers: ['Mme BOSSU', 'Mme MICHON GUILLAUME', 'M. THOMAS'],
        content: `
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Première (1ère)</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier Seyès 24X32 96p vert (à renouveler si nécessaire)</li><li>Une dizaine de pochettes plastifiées transparentes A4</li><li>Histoire-Géo Géopolitique Sciences Pol. 1re, Hachette Édition 2023 (ISBN : 9782016281055)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Terminale</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier Seyès 24X32 192p vert (à renouveler si nécessaire)</li><li>Une dizaine de pochettes plastifiées transparentes A4</li><li>Histoire-Géo Géopolitique Sciences Pol. Tle, Hachette Édition 2024 (ISBN : 9782017257097)</li></ul></div>` 
    },
    'histgeo': { 
        title: 'Histoire-Géographie & EMC', 
        teachers: ['Mme BOSSU', 'Mme MICHON GUILLAUME', 'M. THOMAS'],
        content: `
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 6ème</h3><ul class="list-disc ml-4 text-sm"><li>2 cahiers Seyès 24X32 96p bleu</li><li>Histoire Géographie EMC 6ème Bimanuel, Magnard 2016 (ISBN : 9782210105676)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 5ème</h3><ul class="list-disc ml-4 text-sm"><li>2 cahiers Seyès 24X32 96p bleu</li><li>Histoire Géographie EMC 5ème Bimanuel, Magnard 2016 (ISBN : 9782210105669)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 4ème</h3><ul class="list-disc ml-4 text-sm"><li>2 cahiers Seyès 24X32 96p (1 bleu, 1 orange)</li><li>Histoire Géographie EMC 4ème Bimanuel, Magnard 2016 (ISBN : 9782210105973)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 3ème</h3><ul class="list-disc ml-4 text-sm"><li>2 cahiers Seyès 24X32 96p (1 bleu, 1 orange)</li><li>1 cahier Seyès 24X32 48p (bleu ou orange au choix)</li><li>Gaïa 3e, Magnard 2021 (ISBN : 9782210114951)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Seconde (2nde)</h3><ul class="list-disc ml-4 text-sm"><li>2 cahiers Seyès 24X32 96p (1 bleu, 1 orange)</li><li>Histoire Géographie 2nde Bimanuel, Belin 2024 (ISBN : 9791035833107)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Première (1ère)</h3><ul class="list-disc ml-4 text-sm"><li>2 cahiers Seyès 24X32 96p (1 bleu, 1 orange)</li><li>Histoire Géographie 1ère Bimanuel, Belin 2025 (ISBN : 9791035841232)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Terminale</h3><ul class="list-disc ml-4 text-sm"><li>2 cahiers Seyès 24X32 96p (1 bleu, 1 orange)</li><li>Histoire Géographie Terminale Bimanuel, Belin 2026 (ISBN : 9791035846107)</li></ul></div>` 
    },
    'lettres': { 
        title: 'Lettres Modernes', 
        teachers: ['M. BARITOU', 'Mme FALL', 'Mme MOURAIN DIOP'],
        content: `
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3 ribbon-container"><div class="ribbon-small">En attente<br>des œuvres</div><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 6ème</h3><ul class="list-disc ml-4 text-sm"><li>2 cahiers Seyès 24X32 96p (1 rose, 1 violet)</li><li>1 cahier Seyès 17X22 96p</li><li>Fleurs d'encre 6e, Hachette Édition 2025 (ISBN : 9782017291497)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3 ribbon-container"><div class="ribbon-small">En attente<br>des œuvres</div><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 5ème</h3><ul class="list-disc ml-4 text-sm"><li>2 cahiers Seyès 24X32 96p roses</li><li>Terre des Lettres 5e, Nathan Édition 2026 (EAN : 9782095059392)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3 ribbon-container"><div class="ribbon-small">En attente<br>des œuvres</div><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 4ème</h3><ul class="list-disc ml-4 text-sm"><li>2 cahiers Seyès 24X32 96p (1 rose, 1 violet)</li><li>1 cahier Seyès 17X22 96p</li><li>Colibris 4e, Hatier Édition 2017 (ISBN : 978-2-401-00069-8)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3 ribbon-container"><div class="ribbon-small">En attente<br>des œuvres</div><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 3ème</h3><ul class="list-disc ml-4 text-sm"><li>2 cahiers Seyès 24X32 96p (1 rose, 1 violet)</li><li>1 cahier Seyès 17X22 96p</li><li>Colibris 3e, Hatier Édition 2017 (ISBN : 978-2-401-00072-8)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3 ribbon-container"><div class="ribbon-small">En attente<br>des œuvres</div><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classes de 2nde et 1ère</h3><ul class="list-disc ml-4 text-sm"><li>1 classeur A4 rouge à couverture rigide, 6 intercalaires</li><li>Lot de pochettes plastifiées transparentes A4</li></ul></div>` 
    },
    'maths': { 
        title: 'Mathématiques', 
        teachers: ['Mme CHABERT', 'Mme DUFAY', 'M. NDOYE', 'M. SERVATE'],
        content: `
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 6ème</h3><ul class="list-disc ml-4 text-sm"><li>2 cahiers Seyès 24X32 96p (1 transparent, 1 gris)</li><li>Equerre, rapporteur, compas, calculatrice Casio fx 92+</li><li>Manuel numérique Myriade, Bordas Édition 2025 (ISBN : 9782047408698)<br><em class="text-blue-800 mt-1 block">Le manuel est acheté et mis à disposition par l'établissement et refacturé via EDUKA aux familles.</em></li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 5ème</h3><ul class="list-disc ml-4 text-sm"><li>2 cahiers Seyès 24X32 96p (1 transparent, 1 gris)</li><li>Equerre, rapporteur, compas, calculatrice Casio fx 92+</li><li>Math 5e, Lelivrescolaire Édition 2026 (ISBN num : 9791040008897)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classes de 4ème et 3ème</h3><ul class="list-disc ml-4 text-sm"><li>2 cahiers Seyès 24X32 96p (1 transparent, 1 gris)</li><li>Equerre, rapporteur, compas, calculatrice Casio fx 92+</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Seconde (2nde)</h3><ul class="list-disc ml-4 text-sm"><li>2 cahiers Seyès 24X32 96p (1 transparent, 1 gris)</li><li>Equerre, rapporteur, compas</li><li>Calculatrice NumWorks Python</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Première (1ère)</h3><ul class="list-disc ml-4 text-sm"><li class="font-semibold text-blue-900 mt-1">Tronc Commun :</li><li>2 cahiers Seyès 24x32 96p (transparent, gris)</li><li>Equerre, rapporteur, compas</li><li>Calculatrice Casio fx 92+ OU NumWorks Python</li><li class="font-semibold text-blue-900 mt-2">Spécialité :</li><li>2 cahiers Seyès 24x32 96p (transparent, gris)</li><li>Equerre, rapporteur, compas</li><li>Calculatrice NumWorks Python</li><li>Manuel Barbazo, Hachette 2019 (ISBN : 9782013954860)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Terminale</h3><ul class="list-disc ml-4 text-sm"><li class="font-semibold text-blue-900 mt-1">Spécialité :</li><li>2 cahiers Seyès 24x32 96p (transparent, gris)</li><li>Equerre, rapporteur, compas</li><li>Calculatrice NumWorks Python</li><li>Manuel Barbazo, Hachette 2020 (ISBN : 9782017866190)</li></ul></div>` 
    },
    'musique': { 
        title: 'Éducation Musicale', 
        teachers: ['M. DIANDY'],
        content: `
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">De la 6ème à la 3ème</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier de musique et chants grands carreaux et portées, agrafé, 24x32 cm, 48 pages</li></ul></div>` 
    },
    'philo': { 
        title: 'Philosophie', 
        teachers: ['M. GOMIS'],
        content: `
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Seconde (2nde)</h3><ul class="list-disc ml-4 text-sm"><li>La philosophie de A à Z, Hatier (ISBN : 978-2-401-07365-4)</li><li>Support de prise de cours au choix.</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Première (1ère)</h3><ul class="list-disc ml-4 text-sm"><li>La philosophie de A à Z, Hatier (ISBN : 978-2-401-07365-4)</li><li>Philosophie Tle voie générale, Hatier 2020 (ISBN : 978-2-401-06159-0)</li><li>Support de prise de cours au choix.</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Terminale</h3><ul class="list-disc ml-4 text-sm"><li>La philosophie de A à Z, Hatier (ISBN : 978-2-401-07365-4)</li><li>Philosophie Tle voie générale, Hatier 2020 (ISBN : 978-2-401-06159-0)</li><li>Lettre à Ménécée d’Epicure, Hatier (ISBN : 978-2-218-99139-4)</li><li>Support de prise de cours au choix.</li></ul></div>` 
    },
    'physique': { 
        title: 'Physique-Chimie', 
        teachers: ['M. FALL', 'M. NDAW'],
        content: `
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3 ribbon-container"><div class="ribbon-small">À confirmer<br>lundi 11 mai</div><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 6ème</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier Seyès 24X32 96p orange</li><li>1 blouse blanche en coton à manches longues</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3 ribbon-container"><div class="ribbon-small">À confirmer<br>lundi 11 mai</div><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 5ème et 4ème</h3><ul class="list-disc ml-4 text-sm"><li>1 classeur A4 bleu (commun avec Techno), 6 à 8 intercalaires, pochettes plastifiées A4</li><li>1 blouse blanche en coton à manches longues</li><li>Physique Chimie Cycle 4, Lelivrescolaire 2017 (ISBN : 979-10-90910-591)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3 ribbon-container"><div class="ribbon-small">À confirmer<br>lundi 11 mai</div><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 3ème</h3><ul class="list-disc ml-4 text-sm"><li>1 classeur A4 bleu (commun Techno/Phys), 6 intercalaires, pochettes A4</li><li>1 blouse blanche en coton à manches longues</li><li>Physique Chimie Cycle 4, Lelivrescolaire 2017 (ISBN : 979-10-90910-591)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3 ribbon-container"><div class="ribbon-small">À confirmer<br>lundi 11 mai</div><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Seconde (2nde)</h3><ul class="list-disc ml-4 text-sm"><li>1 classeur A4 bleu (commun SVT, Phy, Techno), 10 intercalaires, pochettes A4</li><li>1 blouse blanche en coton à manches longues</li><li>Physique Chimie 2nde, Lelivrescolaire 2019 (ISBN : 9782377601431)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3 ribbon-container"><div class="ribbon-small">À confirmer<br>lundi 11 mai</div><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Première (1ère) - Spécialité</h3><ul class="list-disc ml-4 text-sm"><li>1 classeur A4 bleu (commun SVT/Tech), 10 intercalaires, pochettes A4</li><li>1 blouse blanche en coton à manches longues</li><li>Physique/Chimie 1ère, Lelivrescolaire 2019 (ISBN : 9782377601448)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3 ribbon-container"><div class="ribbon-small">À confirmer<br>lundi 11 mai</div><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Terminale - Spécialité</h3><ul class="list-disc ml-4 text-sm"><li>1 classeur jaune A4, 6 intercalaires, pochettes A4</li><li>1 blouse blanche en coton à manches longues</li><li>Manuel Physique Chimie Tle, Hatier 2020 (ISBN : 978-2-401-06179-8)</li></ul></div>` 
    },
    'svt': { 
        title: 'Sciences de la Vie et de la Terre (SVT)', 
        teachers: ['M. DAVID', 'Mme MBOUP'],
        content: `
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 6ème</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier Seyès 24X32 96p vert</li><li>Cahier Sciences & technologie 6e, Hachette 2023 (ISBN : 9782017875383)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 5ème</h3><ul class="list-disc ml-4 text-sm"><li>1 classeur A4 vert, 6 intercalaires, lot de pochettes plastifiées transparentes A4 pour classeur</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 4ème</h3><ul class="list-disc ml-4 text-sm"><li>1 classeur A4 vert, 6 intercalaires, lot de pochettes plastifiées transparentes A4 pour classeur</li><li>SVT Cycle 4, Lelivrescolaire 2017 (ISBN : 9791090910904)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 3ème</h3><ul class="list-disc ml-4 text-sm"><li>1 classeur A4 vert, 6 intercalaires, lot de pochettes plastifiées transparentes A4 pour classeur</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Seconde (2nde)</h3><ul class="list-disc ml-4 text-sm"><li>1 classeur A4 bleu (commun SVT, Phy, Techno), 10 intercalaires, lot de pochettes plastifiées transparentes A4 pour classeur</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Première (1ère)</h3><ul class="list-disc ml-4 text-sm"><li>1 classeur jaune A4, 6 intercalaires, lot de pochettes plastifiées transparentes A4 pour classeur</li><li>Blouse blanche en coton à manches longues</li><li>SVT 1ere Spécialité, Belin Édition 2019</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Terminale</h3><ul class="list-disc ml-4 text-sm"><li>1 classeur vert A4, 6 intercalaires, lot de pochettes plastifiées transparentes A4 pour classeur</li><li>Blouse blanche en coton à manches longues</li><li>SVT Tle enseignement de spécialité, Belin 2020 (ISBN : 9791035810146)</li></ul></div>` 
    },
    'ses': { 
        title: 'Sciences Économiques et Sociales (SES)', 
        teachers: ['M. ANE'],
        content: `
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Seconde (2nde)</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier Seyès 24x32cm, 192 pages, violet</li><li>SES Seconde, Hachette Édition 2022 (EAN : 9782016280775)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Première (1ère)</h3><ul class="list-disc ml-4 text-sm"><li>2 cahiers Seyès 24x32cm, 96 pages (1 rose, 1 violet)</li><li>1 cahier Seyès 17X22cm, 96 pages violet</li><li>SES 1ère, Hachette Édition 2023 (EAN : 9782016281031)</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Terminale</h3><ul class="list-disc ml-4 text-sm"><li>1 cahier Seyès 24x32cm, 192 pages violet</li><li>1 cahier Seyès 17X22cm, 96 pages violet</li><li>1 porte vue A4 bleu</li><li>SES Terminale, Hachette Édition 2024 (EAN : 9782017257066)</li></ul></div>` 
    },
    'techno': { 
        title: 'Technologie & SNT', 
        teachers: ['M. FRAYON'],
        content: `
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 5ème (Technologie)</h3><ul class="list-disc ml-4 text-sm"><li>1 classeur A4 bleu (commun Techno/Phys), 8 intercalaires, pochettes A4</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 4ème (Technologie)</h3><ul class="list-disc ml-4 text-sm"><li>1 classeur A4 bleu (commun Techno/Phys), 6 intercalaires, pochettes A4</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de 3ème (Technologie)</h3><ul class="list-disc ml-4 text-sm"><li>1 classeur A4 bleu (commun Techno/Phys), 6 intercalaires, pochettes A4</li></ul></div>
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3"><h3 class="font-bold text-blue-800 mb-2 border-b pb-1">Classe de Seconde - 2nde (SNT)</h3><ul class="list-disc ml-4 text-sm"><li>1 classeur A4 bleu pour les 3 disciplines (SVT, Phy, Techno), 10 intercalaires, pochettes A4</li></ul></div>` 
    }
};
