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

    // Transformer les listes en listes interactives avec cases à cocher
    initInteractiveLists();

    // Ajouter les boutons de copie
    initCopyButtons();

    // Initialiser la recherche
    initSearch();

    // Vérifier l'état de connexion au chargement
    checkAuthState();

    // Gérer la navigation par hash au chargement
    handleHashNavigation();

    // Écouter les changements de hash (bouton retour, lien partagé)
    window.addEventListener('hashchange', handleHashNavigation);
});


// ========================
// AUTHENTIFICATION (Espace Enseignant)
// ========================
function toggleLoginModal() {
    var modal = document.getElementById('login-modal');
    if (modal) {
        modal.classList.toggle('hidden');
        if (!modal.classList.contains('hidden')) {
            document.getElementById('login-user').focus();
        }
    }
}

function handleLogin() {
    var user = document.getElementById('login-user').value;
    var pass = document.getElementById('login-pass').value;
    var error = document.getElementById('login-error');

    if (user === 'admin' && pass === 'admin') {
        sessionStorage.setItem('lfjp_auth', 'true');
        checkAuthState();
        toggleLoginModal();
        if (error) error.classList.add('hidden');
    } else {
        if (error) error.classList.remove('hidden');
    }
}

function handleLogout() {
    sessionStorage.removeItem('lfjp_auth');
    checkAuthState();
    // Revenir à l'onglet classe si on était sur discipline
    switchMainTab('classe');
    switchClassTab('6eme');
}

function checkAuthState() {
    var isAuth = sessionStorage.getItem('lfjp_auth') === 'true';
    var discTab = document.getElementById('mainTabBtn-discipline');
    var authBtn = document.getElementById('auth-btn');
    var authText = document.getElementById('auth-btn-text');

    if (isAuth) {
        if (discTab) discTab.classList.remove('hidden');
        if (authBtn) {
            authBtn.onclick = handleLogout;
            authBtn.classList.add('bg-red-50', 'border-red-200');
            if (authText) authText.innerText = 'Déconnexion';
        }
    } else {
        if (discTab) discTab.classList.add('hidden');
        if (authBtn) {
            authBtn.onclick = toggleLoginModal;
            authBtn.classList.remove('bg-red-50', 'border-red-200');
            if (authText) authText.innerText = 'Connexion';
        }
    }
}


// ========================
// NAVIGATION PAR HASH (liens partageables)
// ========================
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
    history.replaceState(null, '', '#' + hash);
}


// ========================
// ONGLETS PRINCIPAUX ET CLASSES
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

    updateHash('classe-' + className);
}

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
        if (contentEl) {
            contentEl.innerHTML = data.content;
            // On rend cette nouvelle liste dynamique interactive aussi
            initInteractiveLists(contentEl);
        }

        var largeRibbon = document.getElementById('discipline-large-ribbon');
        if (largeRibbon) {
            if (discId === 'lettres') {
                largeRibbon.innerHTML = 'En attente<br>des œuvres';
                largeRibbon.classList.remove('hidden');
            } else {
                largeRibbon.classList.add('hidden');
            }
        }

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

    updateHash('discipline-' + discId);
}


// ========================
// RECHERCHE DYNAMIQUE
// ========================
function initSearch() {
    var searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
        var query = e.target.value.toLowerCase().trim();
        
        // On ne filtre que sur la vue active (classe ou discipline)
        var activeMain = document.querySelector('.main-content.block');
        if (!activeMain) return;

        var cards = activeMain.querySelectorAll('.grid-cards > div');
        
        cards.forEach(function(card) {
            // Remise à zéro du surlignage
            var labels = card.querySelectorAll('label');
            labels.forEach(l => {
                // Ne garder que le texte pur en supprimant les spans de surlignage éventuels
                if (l.innerHTML.includes('<span class="highlight">')) {
                    l.innerHTML = l.textContent;
                }
            });

            if (query === '') {
                card.style.display = '';
                return;
            }

            var cardText = card.textContent.toLowerCase();
            if (cardText.includes(query)) {
                card.style.display = '';
                
                // Surligner les résultats dans les items
                labels.forEach(l => {
                    var text = l.textContent;
                    var lowerText = text.toLowerCase();
                    if (lowerText.includes(query)) {
                        var index = lowerText.indexOf(query);
                        var matchedText = text.substr(index, query.length);
                        l.innerHTML = text.substring(0, index) + '<span class="highlight">' + matchedText + '</span>' + text.substring(index + query.length);
                    }
                });
            } else {
                card.style.display = 'none';
            }
        });
    });
}


// ========================
// LISTE DE COURSES INTERACTIVE
// ========================
function initInteractiveLists(container = document) {
    // Cibler uniquement les ul dans les grilles de cartes
    var uls = container.querySelectorAll('.grid-cards ul, .general-supplies ul');
    
    uls.forEach(function(ul) {
        // Ajouter la classe interactive
        if (!ul.classList.contains('interactive-list')) {
            ul.classList.add('interactive-list');
            ul.classList.remove('list-disc', 'list-inside'); // Retirer les anciens styles de liste
        }

        var lis = ul.querySelectorAll('li');
        lis.forEach(function(li) {
            // Si c'est déjà un item interactif, ignorer
            if (li.querySelector('input[type="checkbox"]')) return;

            // Extraire le texte HTML
            var content = li.innerHTML;
            
            // Créer l'identifiant unique basé sur le texte pur
            var rawText = li.textContent.trim();
            var storageId = 'lfjp_item_' + btoa(encodeURIComponent(rawText)).substring(0, 30); // Base64 du texte pour éviter les caractères spéciaux

            // Vider le li et recréer la structure
            li.innerHTML = '';
            
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = storageId + '_' + Math.random().toString(36).substr(2, 9); // ID unique par page
            
            var label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.innerHTML = content;

            li.appendChild(checkbox);
            li.appendChild(label);

            // Restaurer l'état
            if (localStorage.getItem(storageId) === 'true') {
                checkbox.checked = true;
                li.classList.add('item-checked');
            }

            // Écouter les changements
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    li.classList.add('item-checked');
                    localStorage.setItem(storageId, 'true');
                } else {
                    li.classList.remove('item-checked');
                    localStorage.removeItem(storageId);
                }
            });
        });
    });
}


// ========================
// BOUTON COPIER
// ========================
function initCopyButtons() {
    var classHeaders = document.querySelectorAll('.class-content .text-center.border-b-2');
    
    classHeaders.forEach(function(header) {
        header.classList.add('relative');
        
        var copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn print-hidden absolute top-0 right-0 sm:top-2 sm:right-2';
        copyBtn.innerHTML = '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> Copier la liste';
        
        copyBtn.addEventListener('click', function() {
            var classContent = header.closest('.class-content');
            var className = header.querySelector('h2').textContent;
            copyClassList(classContent, className);
        });

        header.appendChild(copyBtn);
    });
}

function copyClassList(container, className) {
    var textToCopy = "📚 Fournitures LFJP 2026-2027 - " + className + "\n\n";
    
    // Fournitures Générales
    textToCopy += "🎒 FOURNITURES GÉNÉRALES :\n";
    var genItems = container.querySelectorAll('.general-supplies li label');
    genItems.forEach(function(item) {
        textToCopy += "▫️ " + item.textContent + "\n";
    });

    // Spécifiques
    textToCopy += "\n📘 MATIÈRES SPÉCIFIQUES :\n";
    var cards = container.querySelectorAll('.grid-cards > div');
    cards.forEach(function(card) {
        var subject = card.querySelector('h4').textContent;
        textToCopy += "\n🔹 " + subject.toUpperCase() + " :\n";
        
        var items = card.querySelectorAll('li label');
        items.forEach(function(item) {
            textToCopy += "   - " + item.textContent + "\n";
        });
    });

    navigator.clipboard.writeText(textToCopy).then(function() {
        showToast();
    }).catch(function(err) {
        console.error('Erreur lors de la copie : ', err);
        alert("Impossible de copier automatiquement. Veuillez sélectionner le texte manuellement.");
    });
}

function showToast() {
    var toast = document.getElementById('toast-notification');
    if (toast) {
        toast.classList.add('show');
        setTimeout(function() {
            toast.classList.remove('show');
        }, 3000);
    }
}

