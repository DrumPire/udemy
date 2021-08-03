'use strict';

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function() {
//     console.log('hello');
//   }
// };
// const john = Object.create(soldier);
// // const john = {
// //   health: 100
// // };
// // john.__proto__ = soldier;
// Object.setPrototypeOf(john, soldier);
// // console.log(john.armor);
// john.sayHello();

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastElementChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement.parentElement);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) {
  
  if(node.nodeName === '#text') {
    continue;
  }
  
  console.log(node);
}