import avg from './some.js';
import ScrollBooster from 'scrollbooster'

let viewport = document.querySelector('#partners');
let content = viewport.querySelector('#partners-carrousel');
const firstDot = document.querySelector('#first-dot');
const secondDot = document.querySelector('#second-dot');
const thirdDot = document.querySelector('#third-dot');
const carussel = document.getElementById('partners-carrousel')


let sb = new ScrollBooster({
viewport, // this parameter is required
content, // scrollable element
mode: 'x', // scroll only in horizontal dimension
onUpdate: (data)=> {
// your scroll logic goes here
content.style.transform = `translateX(${-data.position.x}px)`;
if(data.position.x < 600){
document.querySelector('.active').classList.remove("active");
firstDot.className = 'active';
}else if(data.position.x > 600 && data.position.x < 1200){
document.querySelector('.active').classList.remove("active");
secondDot.className = 'active';
}else if(data.position.x > 1200){
document.querySelector('.active').classList.remove("active");
thirdDot.className = 'active';

}
}
});

// function positionOne(){carussel.style.transform = 'translateX(-10px)'; console.log('click');};
// firstDot.onclick = positionOne;
// secondDot.onclick = () => {content.style.transform = 'translateX(-610px)';console.log('click')}
// thirdDot.onclick = () => content.style.transform = 'translateX(-1210px)';
const phoneNumber = document.getElementById('tlf').value;
const name = document.getElementById('userName').value;
const message = `${name}: ${phoneNumber}`;
const email = 'dimagnat@ukr.net';
const subject = 'js email';
document.getElementById('btn').onclick = (function() {

const mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + message;

const win = window.open(mailto_link, 'emailWindow');
if (win && win.open && !win.closed) win.close();

});






console.log(avg(1,3,5,7,9));

//import './css/style.css';s