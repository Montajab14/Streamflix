// ===================================
// EXERCICE 1 : Afficher/masquer sections
// ===================================


const sections = document.querySelectorAll('main section');

sections.forEach(section => {
   
    const btn = document.createElement('button');
    btn.textContent = 'Masquer';
    btn.classList.add('btn', 'btn-outline-light', 'mb-2');

    
    section.parentNode.insertBefore(btn, section);

    
    btn.addEventListener('click', () => {
        section.classList.toggle('hidden');
        btn.textContent = section.classList.contains('hidden') ? 'Afficher' : 'Masquer';
    });
});

// ===================================
// EXERCICE 2 : Compteur de films
// ===================================

const articles = document.querySelectorAll('article');
const footer = document.querySelector('footer');

const counter = document.createElement('p');
counter.textContent = `Catalogue : ${articles.length} films disponibles`;
footer.appendChild(counter);

// ===================================
// EXERCICE 3 : Films vus
// ===================================

articles.forEach(article => {
    article.addEventListener('click', () => {
        article.classList.toggle('watched');
    });
});

// ===================================
// EXERCICE 4 : Recherche simple
// ===================================

const searchInput = document.querySelector('#search'); 

if (searchInput) {
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        let anyVisible = false;

        articles.forEach(article => {
            const title = article.querySelector('h5, h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                article.style.display = 'block';
                anyVisible = true;
            } else {
                article.style.display = 'none';
            }
        });

        let noResult = document.querySelector('#no-result');
        if (!anyVisible) {
            if (!noResult) {
                noResult = document.createElement('p');
                noResult.id = 'no-result';
                noResult.textContent = 'Aucun résultat';
                noResult.style.color = 'red';
                searchInput.parentNode.appendChild(noResult);
            }
        } else {
            if (noResult) noResult.remove();
        }
    });
}

// ===================================
// EXERCICE 5 : Modal simple
// ===================================


function openModal(title) {
    const modal = document.querySelector('#modal');
    const modalBody = document.querySelector('#modal-body');

    modalBody.innerHTML = `<h2>${title}</h2>`;
    modal.style.display = 'block';
}


function closeModal() {
    const modal = document.querySelector('#modal');
    modal.style.display = 'none';
}


articles.forEach(article => {
    article.addEventListener('dblclick', (e) => {
        const title = article.querySelector('h5, h3').textContent;
        openModal(title);
    });
});


const closeBtn = document.querySelector('.close');
if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

// ===================================
// EXERCICE 6 : Changement de thème
// ===================================

const themeBtn = document.createElement('button');
themeBtn.textContent = 'Mode sombre';
themeBtn.classList.add('btn', 'btn-secondary', 'ms-2');

const navbar = document.querySelector('header .container');
if (navbar) navbar.appendChild(themeBtn);

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.textContent = document.body.classList.contains('dark-theme') ? 'Mode clair' : 'Mode sombre';
});
