// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('projets.json');
const projets = await reponse.json();

function genererProjets(projets){
    for (let i = 0; i < projets.length; i++) {

        const article = projets[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".projets");
        // Création d’une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.titre;
        //nomElement.innerHTML = `<a href="article.lien">${article.titre}</a>`;
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
        
        sectionFiches.appendChild(pieceElement);
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(descriptionElement);

        pieceElement.addEventListener('mouseover', () => {
            pieceElement.style.transform = 'translateY(-5px)';
            pieceElement.style.backgroundColor = '#333';
	    	pieceElement.style.color = '#fff';
            pieceElement.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
            pieceElement.style.transition = 'all 0.3s ease-in-out';
        });
        
        pieceElement.addEventListener('mouseout', () => {
            pieceElement.style.transform = 'translateY(0)';
            pieceElement.style.backgroundColor = '#fff';
		    pieceElement.style.color = '#333';
            pieceElement.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            pieceElement.style.transition = 'all 0.3s ease-in-out';
        });

        pieceElement.addEventListener('click', () => {
            window.open(article.lien);
        });
    }
}

genererProjets(projets);


