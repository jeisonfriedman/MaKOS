'use strict';
// Declaraciones
const url = '//jeisonfriedman.github.io/MaKOS/';
// Al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Declaraciones
    const head = document.querySelector('head');
    const table = document.getElementById('tablepucs');
    const div = document.createElement('div');
    // Si existe la tabla
    if (table) {
        // Creo y agrego link        
        div.innerHTML = `<link href="${url}/controls.css" type="text/css" rel="stylesheet">`;
        head.appendChild(div.children[0]);
    }
    console.log(url);
})
