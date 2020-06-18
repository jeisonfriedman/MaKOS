'use strict';
// Al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Declaraciones
    const style = '//raw.githubusercontent.com/jeisonfriedman/makos/master/control.css';
    const head = document.querySelector('head');
    const table = document.getElementById('tablepucs');
    const div = document.createElement('div');
    // Si existe la tabla
    if (table) {
        // Creo y agrego link
        div.innerHTML = `<link href="${style}" rel="stylesheet">`;
        head.appendChild(div.children[0]);
    }
    console.log(table);
})
