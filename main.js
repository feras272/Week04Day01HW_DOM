console.log('Week 1 - Day 1')

console.log('Tuwaiq Academy   JS')

// JavaScript DOM

console.log('-------------------- Paragraph (1) --------------------')
let paragraph1 = document.querySelector('#paragraph1');
console.log(paragraph1.innerHTML);

console.log('-------------------- Paragraph (2) --------------------')
let paragraph2 = document.querySelector('#paragraph2');
console.log(paragraph2.innerHTML);

console.log('-------------------- Paragraph (3) --------------------')
let paragraph3 = document.querySelector('#paragraph3');
console.log(paragraph3.innerHTML);

console.log('-------------------- Paragraph (4) --------------------')
let paragraph4 = document.querySelector('#paragraph4');
console.log(paragraph4.innerHTML);

console.log('-------------------- Paragraph (5) --------------------')
let paragraph5 = document.querySelector('#paragraph5');
console.log(paragraph5.innerHTML);

console.log('-------------------- Span (1) --------------------')
let span1 = document.querySelector('#span1');
console.log(span1.innerHTML);

console.log('-------------------- Span (2) --------------------')
let span2 = document.querySelector('#span2');
console.log(span2.innerHTML);

console.log('-------------------- Span Paragraph (1) --------------------')
let spanPar1 = document.querySelector('#spanPar1');
console.log(spanPar1.innerHTML);

// Changing paragraph font size
paragraph1.style.fontSize = "20px"
paragraph2.style.fontSize = "30px"
paragraph3.style.fontSize = "25px"
paragraph4.style.fontSize = "25pxpx"
paragraph5.style.fontSize = "15px"

// Changing span font size
span1.style.fontSize = "20px"
span2.style.fontSize = "25px"
spanPar1.style.fontSize = "22px"

// changing text color in tag 1 and tag 3
paragraph1.style.color = "meganight"
paragraph3.style.color = "lightblue"

// changing font style in tag 2 and tag 4
paragraph2.style.fontFamily = "Times New Roman"
paragraph4.style.fontFamily = "Serif"

// Changing font size in tag 5 and tag 7 
paragraph5.style.fontSize = "24px"
span2.style.fontSize = "15px"

