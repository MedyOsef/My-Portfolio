/* a simple function to change color number*/
function showTelegramNumber(){
  let telegramIcon = document.querySelector('.ri-telegram-line');
  let telegramNumber = document.querySelector('.number');
  telegramIcon.classList.toggle('active');
  telegramNumber.classList.toggle('active');
}

/* a simple fonction to on and off*/
function Nav(){
  const mySidenav = document.querySelector("#mySidenav");
  if (mySidenav.style.visibility == "visible"){
    mySidenav.style.visibility ="hidden"
    }else{
    mySidenav.style.visibility ="visible"
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