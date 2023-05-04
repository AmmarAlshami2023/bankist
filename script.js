'use strict';

///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const section1 = document.querySelector("#section--1")
const allSection = document.querySelectorAll('.section')


const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
 
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};



document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
const header=document.querySelector('.header')
document.getElementsByClassName('btn')



const message= document.createElement('div')
message.classList.add('cookie-message')
message.innerHTML='we use cookie for improved <button class="btn btn--close__cookie"> Got it<button>';
header.append(message)

// this pece of code to remove cookie message
document.querySelector('.btn--close__cookie').addEventListener('click',function(){
  message.parentElement.removeChild(message);
})
message.style.backgroundColor='#37383d'
message.style.width="120%"
message.style.height = Number.parseFloat(getComputedStyle(message).height,10)+40+'px' 


//document.documentElement.style.setProperty('--color-primary','orangered')

const logo= document.querySelector('.nav__logo')
logo.setAttribute('company','Bankist')

// in this code do scroll to FEATURES 
const scrollTo=document.querySelector('.btn--scroll-to')


const scrollToFun=function(e){
  const s1coords=section1.getBoundingClientRect()

  e.target.getBoundingClientRect()

  section1.scrollIntoView({behavior:'smooth'})
//   window.scrollTo(s1coords.left+window.pageXOffset,s1coords.top+window.pageYOffset)
//   window.scrollTo({

//     left:s1coords.left+window.pageXOffset
//     ,top: s1coords.top+window.pageYOffset
//     ,behavior:'smooth'

// })
}
const nav= document.querySelector('.nav')
document.querySelectorAll('.nav__link')
.forEach(function(el){
el.addEventListener('click',function(e){
e.preventDefault
const id=this.getAttribute('href')
document.querySelector(id).scrollIntoView({behavior:'smooth'})
  })
})
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');



const tabsContainerfun=function(e){
const clicked=e.target.closest('.operations__tab')
if(!clicked) return
tabs.forEach(function(el){
  el.classList.remove('operations__tab--active')
})  
tabsContent.forEach(t=>t.classList.remove('operations__content--active'))
clicked.classList.add('operations__tab--active')
document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
}

const handleover=function(e){
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }

}
nav.addEventListener('mouseover',handleover.bind(0.5))
nav.addEventListener('mouseout',handleover.bind(1))

nav.classList.add('sticky')


const navHeight= nav.getBoundingClientRect().height

const stickyNav= function(entries){
const [entry]=entries
if(!entry.Intersecting)nav.classList.add('sticky')
else 
nav.classList.remove('sticky')
}
const headerObsarver=new IntersectionObserver(stickyNav,{
  root:null,
  threshold:0,
  rootMargin:`-${navHeight}px`
})
headerObsarver.observe(header)
const imgTargets= document.querySelectorAll('img[data-src]');
const loadImg= function(entries,observer){
const [entry]=entries
if(!entry.isIntersecting)return;
entry.target.src = entry.target.dataset.src;
entry.target.addEventListener('load', function () {
entry.target.classList.remove('lazy-img');
});
observer.unobserve(entry.target);
};
const imgObserver= new IntersectionObserver(loadImg,{
root:null,
threshold:0,
rootMargin:'200px'
})
imgTargets.forEach(img=> imgObserver.observe(img))

const slides=document.querySelectorAll('.slide')
const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')

const dotContainer=document.querySelector('.dots')


let curSlide=0
const maxSlide=slides.length;


const createDot=function(){
  slides.forEach((function(ـ,i){
     dotContainer.insertAdjacentHTML('beforeend',
     `<button class="dots__dot" data-slide="${i}"></button>`)
  }))
}
createDot()

const ActiveDot=document.querySelectorAll('.dots__dot');

const activatDot=function(slide){
ActiveDot.forEach(dot=> dot.classList.remove('dots__dot--active'))
document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')

}
activatDot(curSlide)

const goToSlide=function(slide){
  slides.forEach((s,i)=>s.style.transform=`translateX(${100 * (i - slide )}%)`)
}
goToSlide(curSlide);

const nextSlide=function(){

  if(curSlide === maxSlide-1){
    curSlide=0
  }else
  curSlide++
  goToSlide(curSlide);
  activatDot(curSlide)


}
const prevSlide=function(){
    if(curSlide === 0){
      curSlide=slides.length-1
    }else curSlide--;
    goToSlide(curSlide);
    activatDot(curSlide)

};
document.addEventListener('keydown',function(e){
  if(e.key==='ArrowLeft') prevSlide();
  else if(e.key==='ArrowRight') nextSlide()
})
dotContainer.addEventListener('click',function(e){
if(e.target.classList.contains('dots__dot')){
  goToSlide(e.target.getAttribute('data-slide'));
  activatDot(e.target.getAttribute('data-slide'))
}

})