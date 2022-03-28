burger=document.querySelector('.burger') 
navbar=document.querySelector('.navbar') 
navList=document.querySelector('.nav-list')
rightNav=document.querySelector('.rightNav') 
  

burger.addEventListener('click',()=>{
rightNav.classList.toggle('v-class-resp')
navList.classList.toggle('v-class-resp')
navbar.classList.toggle('h-nav-resp')
})
let harekrishna1stline=document.querySelector('#harekrishna1stline');
let harekrishna2ndline=document.querySelector('#harekrishna2ndline');
let harekrishna3rdline=document.querySelector('#harekrishna3rdline');
let harekrishna4thline=document.querySelector('#harekrishna4thline');
 harekrishna1stline.style.display='none';
let count=0;
setInterval(() => {
    count++
}, 1000);
setInterval(() => {
    if (count%4==0) {
        harekrishna1stline.style.display='block';
    } else {
        harekrishna1stline.style.display='none';
    }
}, 1000);
setInterval(() => {
    if (count%4==1) {
        harekrishna2ndline.style.display='block';
    } else {
        harekrishna2ndline.style.display='none';
    }
}, 1000);
setInterval(() => {
    if (count%4==2) {
        harekrishna3rdline.style.display='block';
    } else {
        harekrishna3rdline.style.display='none';
    }
}, 1000);
setInterval(() => {
    if (count%4==3) {
        harekrishna4thline.style.display='block';
    } else {
        harekrishna4thline.style.display='none';
    }
}, 1000);
//  a
