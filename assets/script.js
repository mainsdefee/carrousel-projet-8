const slides = [
  //Tableau  avec  les images et les légendes des slides//
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
const conteneur = document.querySelector("#banner"); //on récupére et Sélectionne le conteneur du carrousel
const flecheDroite = document.querySelector(".arrow.arrow_right"); // on récupére et  Sélectionne la flèche droite
const flecheGauche = document.querySelector(".arrow.arrow_left"); // on récupére et  Sélectionne la flèche gauche

let slideCourante = 0; // Initialise la slide courante
const slidesCount = slides.length; // Compte le nombre total de slides

// Ajouter un événement clic sur la flèche droite
flecheDroite.addEventListener("click", () => {
  console.log("Clic sur la flèche droite"); // Afficher un message dans la console
});

// Ajouter un événement clic sur la flèche gauche
flecheGauche.addEventListener("click", () => {
  console.log("Clic sur la flèche gauche"); // Afficher un message dans la console
  //
});