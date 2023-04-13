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
// Créer un conteneur pour les "bullets"
const bulletContainer = document.createElement("div");
bulletContainer.classList.add("dots");
// Ajouter le conteneur des "bullets" au conteneur du carrousel
conteneur.appendChild(bulletContainer);

// Boucle à travers chaque slide pour créer un "bullet" correspondant et l'ajouter au conteneur
slides.forEach((slide, index) => {
  const bullet = document.createElement("div");
  bullet.classList.add("dot");

  // Ajouter la classe "dot_selected" pour le premier "bullet"
  if (index === 0) {
    bullet.classList.add("dot_selected");
  }
  // Ajouter le "bullet" au conteneur des "bullets"
  bulletContainer.appendChild(bullet);
  // Ajoute un écouteur d'événement pour le clic sur le "bullet"
  bullet.addEventListener("click", () => {
    afficherSlide(index);
  });
});

function afficherSlide(slideIndex) {
  // Mettre à jour la slide courante
  slideCourante = slideIndex;

  // Mettre à jour la classe .dot_selected sur le bullet correspondant
  const bullets = document.querySelectorAll(".dots .dot"); // Récupérer tous les éléments .dot dans la section des bullets
  bullets.forEach((bullet, index) => {
    // Pour chaque bullet, vérifier si l'index correspond à la slide en cours et mettre à jour la classe .dot_selected
    if (index === slideIndex) {
      // Si l'index correspond à la slide en cours
      bullet.classList.add("dot_selected"); // Ajouter la classe .dot_selected pour mettre en évidence le bullet sélectionné
    } else {
      bullet.classList.remove("dot_selected"); // Sinon, retirer la classe .dot_selected pour désélectionner le bullet
    }
  });

  // Mettre à jour l'image et le texte de la slide
  const image = document.querySelector(".banner-img"); // Sélectionne l'élément img ayant la classe "banner-img"
  image.src = slides[slideIndex].image; // Met à jour l'attribut src de l'image avec l'URL de l'image de la slide courante
  const tagLine = document.querySelector("#banner p"); // Sélectionne l'élément p ayant l'id "banner
  tagLine.innerHTML = slides[slideIndex].tagLine; // Met à jour le contenu HTML de l'élément p avec le texte de la tagLine de la slide courante
}
