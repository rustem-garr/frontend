let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 6000); // Change image every 6 seconds
}


// var i = 0;
// var images = [];
// var slideTime = 3000; // 3 seconds

// images[0] = '../images/banner1.jpg';
// images[1] = '../images/banner2.jpg';
// images[2] = '../images/banner3.jpg';

// function changePicture() {
//   var w = window.innerWidth;
//   if (w >= 750) {
//     var img = document.getElementById('cont-img')
//     img.style.backgroundImage="url(" + images[i] + ")";
//   }
//   else {
//     var img=document.getElementById('banner-img')
//   }

//     img.style.backgroundImage = "url(" + images[i] + ")";

//     if (i < images.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }
//     setTimeout(changePicture, slideTime);
// }

// window.onload = changePicture;
