import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
// 노드반영이라 경로 지정 안해도 됨
import '../css/app.css';
//import '../scss/style.scss';
import 'animate.css';
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox-plus-jquery.js';
import WOW from 'wow.js';
import {add, subtract, multiply, divide} from './modules/script.js';

console.log(add(10,5));
console.log(subtract(10,5));
console.log(multiply(10,5));
console.log(divide(10,5));

export {wow} from './modules/wowAnimate.js';

