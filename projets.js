// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('projets.json');
const projets = await reponse.json();

function genererProjets(projets){
    for (let i = 0; i < projets.length; i++) {

        const article = projets[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".fiches");
        // Création d’une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.titre;
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
        const lienElement = document.createElement("a");
        lienElement.innerText = article.lien;
        
        sectionFiches.appendChild(pieceElement);
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(lienElement);
     }
}

genererProjets(projets);
