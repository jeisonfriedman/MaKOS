// ==UserScript==
// @grant        none
// ==/UserScript==
'use strict';
// Clase
class Jsn {
    constructor() {
        // Propiedades
        this.url = '//jeisonfriedman.github.io/MaKOS/';
        // Al cargar la página
        document.addEventListener('DOMContentLoaded', function() {
            // Aplico estilos
            this.applyStyles();
            // Ajusto ortografía
            // correctSpelling();
        })
    }

    // Aplica estilos
    applyStyles() {
        // Declaraciones
        const div = document.createElement('div');
        const head = document.querySelector('head');
        const table = document.getElementById('tablepucs');
        // Si existe la tabla
        if (table) {
            // Creo y agrego link        
            div.innerHTML = `<link href="${this.url}/controls.css" type="text/css" rel="stylesheet">`;
            head.appendChild(div.children[0]);
        }
    }

    // Corrijo ortografía
    correctSpelling() {
        // Declaraciones
        const item = document.querySelector('#main-menu-navigation > li:nth-child(5) > a > span');
        // Menú principal
        if (item.innerHTML === 'Tesoreria') item.innerHTML = 'Tesorería';
    }
}
// Instancio clase
const jsn = new Jsn();