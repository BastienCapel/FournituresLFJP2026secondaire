/**
 * app.js — Logique de navigation et interactions
 * Fournitures scolaires LFJP 2026-2027
 */

// ========================
// INITIALISATION
// ========================
document.addEventListener('DOMContentLoaded', function() {
    // Injecter les fournitures générales dans tous les placeholders
    document.querySelectorAll('.general-supplies-placeholder').forEach(function(el) {
        el.innerHTML = generalSuppliesHTML;
    });

    // Gérer la navigation par hash au chargement
    handleHashNavigation();

    // Écouter les changements de hash (bouton retour, lien partagé)
    window.addEventListener('hashchange', handleHashNavigation);
});


// ========================
// NAVIGATION PAR HASH (liens partageables)
// ========================
// Formats supportés :
//   #classe-6eme, #classe-5eme, etc.
//   #discipline-anglais, #discipline-maths, etc.

function handleHashNavigation() {
    var hash = window.location.hash.replace('#', '');
    if (!hash) {
        // Par défaut : vue par classe, 6ème
        switchMainTab('classe');
        switchClassTab('6eme');
        return;
    }

    if (hash.startsWith('classe-')) {
        var className = hash.replace('classe-', '');
        switchMainTab('classe');
        switchClassTab(className);
    } else if (hash.startsWith('discipline-')) {
        var discId = hash.replace('discipline-', '');
        showDiscipline(discId);
    }
}

function updateHash(hash) {
    // Mettre à jour l'URL sans déclencher un scroll
    history.replaceState(null, '', '#' + hash);
}


// ========================
// ONGLETS PRINCIPAUX (Classe / Discipline)
// ========================
function switchMainTab(tab) {
    var mainContents = document.querySelectorAll('.main-content');
    mainContents.forEach(function(el) {
        el.classList.add('hidden');
        el.classList.remove('block');
    });

    var mainBtns = document.querySelectorAll('.main-tab-btn');
    mainBtns.forEach(function(el) {
        el.classList.remove('border-blue-900', 'text-blue-900');
        el.classList.add('border-transparent', 'text-gray-500');
    });

    var activeContent = document.getElementById('main-content-' + tab);
    if (activeContent) {
        activeContent.classList.remove('hidden');
        activeContent.classList.add('block');
    }

    var activeBtn = document.getElementById('mainTabBtn-' + tab);
    if (activeBtn) {
        activeBtn.classList.remove('border-transparent', 'text-gray-500');
        activeBtn.classList.add('border-blue-900', 'text-blue-900');
    }
}


// ========================
// ONGLETS PAR CLASSE
// ========================
function switchClassTab(className) {
    var classContents = document.querySelectorAll('.class-content');
    classContents.forEach(function(el) {
        el.classList.add('hidden');
        el.classList.remove('block');
    });

    var classBtns = document.querySelectorAll('.class-btn');
    classBtns.forEach(function(el) {
        el.classList.remove('bg-white', 'text-blue-900', 'shadow');
        el.classList.add('text-gray-700');
    });

    var targetContent = document.getElementById('class-content-' + className);
    if (targetContent) {
        targetContent.classList.remove('hidden');
        targetContent.classList.add('block');
    }

    var targetBtn = document.getElementById('classBtn-' + className);
    if (targetBtn) {
        targetBtn.classList.remove('text-gray-700');
        targetBtn.classList.add('bg-white', 'text-blue-900', 'shadow');
    }

    // Mettre à jour le hash pour partage
    updateHash('classe-' + className);
}


// ========================
// VUE PAR DISCIPLINE
// ========================
function showDiscipline(discId) {
    switchMainTab('discipline');

    var discBtns = document.querySelectorAll('.disc-btn');
    discBtns.forEach(function(el) {
        el.classList.remove('bg-white', 'text-blue-900', 'shadow');
        el.classList.add('text-gray-700');
    });

    var activeBtn = document.getElementById('discBtn-' + discId);
    if (activeBtn) {
        activeBtn.classList.remove('text-gray-700');
        activeBtn.classList.add('bg-white', 'text-blue-900', 'shadow');
    }

    var data = disciplinesData[discId];
    if (data) {
        var titleEl = document.getElementById('discipline-title');
        if (titleEl) titleEl.innerText = 'Discipline : ' + data.title;

        var nameEl = document.getElementById('discipline-name');
        if (nameEl) nameEl.innerText = data.title;

        var contentEl = document.getElementById('discipline-dynamic-content');
        if (contentEl) contentEl.innerHTML = data.content;

        // Gérer l'affichage du bandeau rouge large sur l'attestation par discipline
        var largeRibbon = document.getElementById('discipline-large-ribbon');
        if (largeRibbon) {
            if (discId === 'anglais') {
                largeRibbon.innerHTML = 'En attente de décision<br>sur la sixième';
                largeRibbon.classList.remove('hidden');
            } else if (discId === 'lettres') {
                largeRibbon.innerHTML = 'En attente<br>des œuvres';
                largeRibbon.classList.remove('hidden');
            } else if (discId === 'physique') {
                largeRibbon.innerHTML = 'À confirmer<br>lundi 11 mai';
                largeRibbon.classList.remove('hidden');
            } else {
                largeRibbon.classList.add('hidden');
            }
        }

        // Générer les signatures
        var sigContainer = document.getElementById('discipline-signature-container');
        if (sigContainer) {
            var teachers = data.teachers && data.teachers.length > 0 ? data.teachers : [''];

            var sigHTML = '<div class="w-full text-right text-sm mb-4"><p>Fait à Saly, le .......................................</p></div><div class="flex justify-center md:justify-end gap-x-8 gap-y-8 w-full flex-wrap">';

            teachers.forEach(function(teacherName) {
                var displayName = teacherName ? teacherName : '.......................................';
                sigHTML += '<div class="text-center text-sm mt-4">' +
                    '<p class="font-bold mb-10">Signature de l\'enseignant(e) :</p>' +
                    '<div class="pt-2 border-t border-gray-400 w-48 mx-auto text-gray-800 font-bold">' + displayName + '</div>' +
                    '</div>';
            });
            sigHTML += '</div>';
            sigContainer.innerHTML = sigHTML;
        }
    }

    // Mettre à jour le hash pour partage
    updateHash('discipline-' + discId);
}
