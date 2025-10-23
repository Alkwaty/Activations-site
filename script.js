const scrollconter = document.querySelector('.mayzats');
const right = document.querySelector('.chevron-right');
const left = document.querySelector('.chevron-left');
const Alonscroll = 200;

left.addEventListener('click', () => {
scrollconter.scrollBy({left: -Alonscroll, behavior: 'smooth'});
});


right.addEventListener('click', () => {
scrollconter.scrollBy({left: Alonscroll, behavior: 'smooth'});
});












