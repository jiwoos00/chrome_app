const images=[
   "1.jpg",
   "2.jpg",
   "3.jpg",
   "4.jpg",
   "5.jpg",
   "6.jpg",
   "7.jpg"
];

const chosenImage=images[Math.floor(Math.random()*images.length)];
const bgImage=document.getElementById("movie_img");
bgImage.src=`img/${chosenImage}`;


