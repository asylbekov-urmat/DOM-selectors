//<<<<<<<<<<<<<< ИЗМЕНЯЕМ ЧЕРЕЗ JAVASCRIPT >>>>>>>>>>>>

// Выберите при помощи селекторов DOM
//1 — все HTML-элементы strong и окрасьте их в зеленый цвет
//2 — найдите все HTML-элементы em и добавьте им класс .selected
//3 — Найдите все элементы mark, которые находятся в div с классом row и задайте им
// класс .selected
//4 — Найдите все гиперссылки и удалите у них подчеркивания

// 6— Переключите элементы strong с классом some в состояние без этого класса, а
// тем элементам (strong), у которых небыло этого класса — добавьте.
//7 — среди набора элементов с классом .row удалите класс у второго элемента
//8 — прочитайте CSS-свойство color у второй гиперсылки в тексте

//1
let strong = document.querySelectorAll('strong');
for(let i = 0; i < strong.length; i++){
    strong[i].style.color = 'green';
    strong[i].style.background = 'red';
}
//2
let em = document.querySelectorAll('em');
for(let i = 0; i < em.length; i++){
    em[i].className =" selected";
}
//3
let mark = document.querySelectorAll('.row mark');
for(let i = 0; i < mark.length; i++){
    mark[i].className =" selected";
}
//4
let a = document.getElementsByTagName('a');
for(let i = 0; i < a.length; i++){
    a[i].style.textDecoration = 'none';
}
//5
//No
//6
for(let i = 0; i < strong.length; i++){
    strong[i].classList.toggle('some')
}
//7
let row = document.getElementsByClassName('.row');
for(let i = 0; i < row.length; i++){
    row[1].classList.toggle('row')  
}
//8
let eigth = document.getElementsByTagName('a');
let aName = window.getComputedStyle(eigth[1]);
console.log(aName.color);









