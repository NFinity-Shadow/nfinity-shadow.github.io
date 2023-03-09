// Ajoute une animation de survol pour les liens de la navigation
const navLinks = document.querySelectorAll('nav li');
navLinks.forEach(link => {
	link.addEventListener('mouseover', () => {
        link.style.transform = 'translateY(-5px)';
        link.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        link.style.transition = 'all 0.3s ease-in-out';
	});
	
	link.addEventListener('mouseout', () => {
        link.style.transform = 'translateY(0)';
        link.style.boxShadow = '0 0px 0px rgba(0,0,0,0.0)';
        link.style.transition = 'all 0.3s ease-in-out';
	});
});

function genererPageAccueil(){
        const presentation = document.querySelector(".presentation");

        const presentationInfo = document.createElement("div");
        presentationInfo.classList.add("presentation-info");

        const descriptionPresentation = document.createElement("p");
        descriptionPresentation.classList.add("presentation-description");
        descriptionPresentation.innerText = "Je suis un ...";

        const conteneur_telechargerCV = document.createElement("div");
        conteneur_telechargerCV.classList.add("dl-CV");

        presentation.appendChild(presentationInfo);
        presentation.appendChild(descriptionPresentation);
        presentation.appendChild(conteneur_telechargerCV);

        const titrePresentation = document.createElement("h1");
        titrePresentation.innerText = "Jeffrey Badin";

        const imageCV = document.createElement("img");
        imageCV.classList.add("circular");
        imageCV.src = "images/jeffrey.jpg";

        presentationInfo.appendChild(imageCV);
        presentationInfo.appendChild(titrePresentation);

        const telechargerCV = document.createElement("a");
        telechargerCV.classList.add('fa', 'fa-download');
        telechargerCV.setAttribute("href", "downloads/CV.pdf");
        telechargerCV.setAttribute("download", "CV.pdf");
        telechargerCV.innerText = "Télécharger mon CV";
        
        conteneur_telechargerCV.appendChild(telechargerCV);
}

genererPageAccueil();

// Récupération les projets depuis le fichier JSON
const reponse = await fetch('projets.json');
const projets = await reponse.json();

// Générer les projets à partir des données récupérées dans la page HTML
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

// Générer la page contact dans la section formulaire-container du HTML
function genererPageContact(){
        const sectionContact = document.querySelector(".formulaire-container");

        const titreContact = document.createElement("h1");
        titreContact.innerText = "Contact";

        const formulaire = document.createElement("form");
        formulaire.setAttribute("method", "post");
        formulaire.setAttribute("action", "contact.php");

        const nom = document.createElement("input");
        nom.setAttribute("type", "text");
        nom.setAttribute("name", "nom");
        nom.setAttribute("placeholder", "Nom");

        const prenom = document.createElement("input");
        prenom.setAttribute("type", "text");
        prenom.setAttribute("name", "prenom");
        prenom.setAttribute("placeholder", "Prénom");

        const email = document.createElement("input");
        email.setAttribute("type", "email");
        email.setAttribute("name", "email");
        email.setAttribute("placeholder", "Email");

        const sujet = document.createElement("input");
        sujet.setAttribute("type", "text");
        sujet.setAttribute("name", "sujet");
        sujet.setAttribute("placeholder", "Sujet");

        const message = document.createElement("textarea");
        message.setAttribute("name", "message");
        message.setAttribute("placeholder", "Message");

        const bouton = document.createElement("input");
        bouton.setAttribute("type", "submit");
        bouton.setAttribute("value", "Envoyer");

        sectionContact.appendChild(titreContact);
        sectionContact.appendChild(formulaire);
        formulaire.appendChild(nom);
        formulaire.appendChild(prenom);
        formulaire.appendChild(email);
        formulaire.appendChild(sujet);
        formulaire.appendChild(message);
        formulaire.appendChild(bouton);
}

function effacerPages(){
        const presentation = document.querySelector(".presentation");
        const projets = document.querySelector(".projets");
        const contact = document.querySelector(".formulaire-container"); 
        presentation.innerHTML = "";
        projets.innerHTML = "";
        contact.innerHTML = "";
}

const boutonNavContact = document.querySelector(".navigation-contact");
boutonNavContact.addEventListener('click', () => {
        //Ajouter le contenu de la page contact en supprimant le contenu de la page présente
        effacerPages();
        genererPageContact();
});

const boutonNavProjet = document.querySelector(".navigation-projet");
        boutonNavProjet.addEventListener('click', () => {
        effacerPages();
        genererProjets(projets);
});

const boutonNavAccueil = document.querySelector(".navigation-accueil");
        boutonNavAccueil.addEventListener('click', () => {
        effacerPages();
        genererPageAccueil();
});