// DATOS ESTUDIANTE
var nombre_estudiante = document.getElementById("nombre-estudiante");
var curso_estudiante = document.getElementById("curso-estudiante");

var nombre = prompt("Ingresa tu nombre");
var curso = prompt("Ingresa tu curso");

nombre_estudiante.innerHTML = nombre;
curso_estudiante.innerHTML = curso;


// HTML
var html1 = document.querySelector(".html-1");
var html2 = document.querySelector(".html-2");
var html3 = document.querySelector(".html-3");
var htmlPromedio = document.querySelector(".html-promedio");

var nota1html = Number(prompt("Ingresa la nota 1 de HTML"));
var nota2html = Number(prompt("Ingresa la nota 2 de HTML"));
var nota3html = Number(prompt("Ingresa la nota 3 de HTML"));
var promedioHtml = (nota1html + nota2html + nota3html) / 3

html1.innerHTML = nota1html;
html2.innerHTML = nota2html;
html3.innerHTML = nota3html;
htmlPromedio.innerHTML = promedioHtml.toFixed(2);


// CSS
var css1 = document.querySelector(".css-1");
var css2 = document.querySelector(".css-2");
var css3 = document.querySelector(".css-3");
var cssPromedio = document.querySelector(".css-promedio");

var nota1css = Number(prompt("Ingresa la nota 1 de CSS"));
var nota2css = Number(prompt("Ingresa la nota 2 de CSS"));
var nota3css = Number(prompt("Ingresa la nota 3 de CSS"));
var promedioCss = (nota1css + nota2css + nota3css) / 3

css1.innerHTML = nota1css;
css2.innerHTML = nota2css;
css3.innerHTML = nota3css;
cssPromedio.innerHTML = promedioCss.toFixed(2);


// JS
var js1 = document.querySelector(".js-1");
var js2 = document.querySelector(".js-2");
var js3 = document.querySelector(".js-3");
var jsPromedio = document.querySelector(".js-promedio");

var nota1js = Number(prompt("Ingresa la nota 1 de JS"));
var nota2js = Number(prompt("Ingresa la nota 2 de JS"));
var nota3js = Number(prompt("Ingresa la nota 3 de JS"));
var promedioJs = (nota1js + nota2js + nota3js) / 3

js1.innerHTML = nota1js;
js2.innerHTML = nota2js;
js3.innerHTML = nota3js;
jsPromedio.innerHTML = promedioJs.toFixed(2);


// PROMEDIOS FINALES
var promedio_estudiante = document.getElementById("promedio-estudiante");
var promedio = (promedioJs + promedioCss + promedioHtml) / 3;
console.log(promedio)
promedio_estudiante.innerHTML = promedio.toFixed(2);






