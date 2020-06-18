'use strict';
var test = 'test';
// Al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Declaraciones
    const style = '//raw.githubusercontent.com/jeisonfriedman/makos/master/controls.css';
    const head = document.querySelector('head');
    const table = document.getElementById('tablepucs');
    const div = document.createElement('div');
    // Si existe la tabla
    if (table) {
        // Creo y agrego link
        div.innerHTML = `<link href="${style}" type="text/css" rel="stylesheet">`;
        head.appendChild(div.children[0]);
    }
    console.log('table', table);
})
