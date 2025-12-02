const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');


let i = 0;

right.addEventListener('click', () => {
	i++;
	if (i > slides.length - 1) {
  i = 0;
}
 	updateSlide();  // ← Ajoutez cette ligne
	console.log(i);
});

left.addEventListener('click', () => {
	i--;
if (i < 0) {
  i = slides.length - 1;
}
 	updateSlide();  // ← Ajoutez cette ligne
	console.log(i);
});


const dots = document.querySelectorAll('.dot');
dots[0].classList.add('dot_selected');




function updateSlide() {
  bannerImg.src = "./assets/images/slideshow/" + slides[i].image;
  bannerText.innerHTML = slides[i].tagLine;
  
  for (let j = 0; j < dots.length; j++) {
    dots[j].classList.remove('dot_selected');
  }
  dots[i].classList.add('dot_selected');
}
