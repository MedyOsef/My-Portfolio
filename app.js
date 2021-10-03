/* a simple function to change color number*/
function showTelegramNumber(){
  let telegramIcon = document.querySelector('.ri-telegram-line');
  let telegramNumber = document.querySelector('.number');
  telegramIcon.classList.toggle('active');
  telegramNumber.classList.toggle('active');
}

/* a simple fonction to on and off*/
function Nav(){
let mySidenav = document.getElementById("mySidenav");
let logo_link = document.querySelector('.logo-link');

if (mySidenav.style.width != "65%"){
  logo_link.style.visibility = "hidden";
  mySidenav.style.width = "65%";
  }
else if (mySidenav.style.width != "0"){
    mySidenav.style.width = "0";
    logo_link.style.visibility = "visible";
  }
}
/******************* green sukk*****************************/
const nameSpans = document.querySelectorAll('.n');
const contact_btn = document.querySelector('.contact-btn');
const logo = document.querySelector('h2');
const social_medias = document.querySelectorAll('.media-icon');
const h3 = document.querySelector('h3');
const description = document.querySelector('.description');
const link_btn = document.querySelectorAll('.link-btn');
const address = document.querySelectorAll('.number-and-mail-address p')

window.addEventListener('load', () => {
  const TL = gsap.timeline({paused: true});
  TL
  .staggerFrom(link_btn, 1, {opacity: 0, ease: "power2.out"}, 0.3)
  .staggerFrom(nameSpans, 1.2, {top: -45, opacity: 0, ease: "power2.out"}, 0.3, '-=1')
  .staggerFrom(h3, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
  .staggerFrom(description, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
  .staggerFrom(address, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
  .from(logo, 1, {transform: "scale(0)", ease: "power2.out"}, 0.3, '-=2')
  .from(contact_btn, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
  .staggerFrom(social_medias, .9, {left: -200, ease: "power2.out"}, 0.3, '-=1');


  TL.play();
})
/****************** swap to close menu***************** */
const mySidenav = document.getElementById("mySidenav");
const toggle = document.querySelector('.nav-toggle');

let touchStart, touchEnd;
let logo_link = document.querySelector('.logo-link');

// TouchStart
mySidenav.addEventListener('touchstart', e => {
  touchStart = e.targetTouches[0].clientX;
});

// TouchMove
mySidenav.addEventListener('touchmove', e => {
  touchEnd = e.targetTouches[0].clientX;
});

// Distance ?
mySidenav.addEventListener('touchend', e => {
  if(touchStart - touchEnd > 65){
    mySidenav.style.width = "0";
    logo_link.style.visibility = "visible";
  }
});