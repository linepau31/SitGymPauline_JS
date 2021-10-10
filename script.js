// Section Équipements, bouton x rouge
const btns = document.querySelectorAll('.btn-modale'); // all pour prendres tous les éléments et les retourner dans un tableau
const modaleEquipement = document.querySelector('.bloc-modale');
const imgIndex = document.querySelector('.bloc-modale img');

if(window.matchMedia("(min-width: 850px)").matches){ // au dessus de 850px (true) donc on peut ouvrir les images, en dessous de 850px (false) JavaScript ne fonctionne plus/ js responsive
	btns.forEach(btn => { // pour chaque btn 
	btn.addEventListener('click', (e) => {

		imgIndex.src = `ressources/img${e.target.getAttribute('data-index')}-equip.jpg`;
		modaleEquipement.classList.add('active-modale'); // ouvre/active l'image au clic

	})
	})

	modaleEquipement.addEventListener('click', () => {
	modaleEquipement.classList.remove('active-modale'); // ferme l'image n'importe ou sur l'écran
	})
}	

// Animation NavBar

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => { // dés que ça scroll l'animation de la NavBar demarre

    if(window.scrollY > 30) { // scroller depuis le top + de 30px
        nav.classList.add('anim-nav');
    } else {
        nav.classList.remove('anim-nav');
    }

})