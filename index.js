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