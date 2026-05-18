const homeslideshows = document.getElementById("homeslideshows");

const homePhotos = [
  "images/slideshows/home/slide1.jpg",
  "images/slideshows/home/slide2.jpg",
  "images/slideshows/home/slide3.jpg",
  "images/slideshows/home/slide4.jpg",
  "images/slideshows/home/slide5.jpg",
  "images/slideshows/home/slide6.jpg",
  "images/slideshows/home/slide7.jpg",
  "images/slideshows/home/slide8.jpg",
  "images/slideshows/home/slide9.jpg",
  "images/slideshows/home/slide10.jpg",
  "images/slideshows/home/slide11.jpg",
  "images/slideshows/home/slide12.jpg",
  "images/slideshows/home/slide13.jpg"
];

let currentHomePhoto = 0;

if (homeslideshows) {
  homeslideshows.src = homePhotos[currentHomePhoto];

  setInterval(() => {
    homeslideshows.style.opacity = "0";

    setTimeout(() => {
      currentHomePhoto = (currentHomePhoto + 1) % homePhotos.length;
      homeslideshows.src = homePhotos[currentHomePhoto];
      homeslideshows.style.opacity = "1";
    }, 800);
  }, 3000);
}