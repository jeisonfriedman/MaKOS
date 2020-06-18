// Declaraciones
const repUrl = 'https://raw.githubusercontent.com/jeisonfriedman/makos/master/controls.css';
// Al cargar página
document.addEventListener('DOMContentLoaded', () => {
    // Declaraciones
    const head = document.getElementsByTagName('head')[0];
    const table = document.getElementById('tablepucs');
    const div = document.createElement('div');
    // Si existe la tabla
    if (table) {
        // Creo y agrego link
        div.innerHTML = `<link href="${repUrl}" rel="stylesheet">`;
        head.appendChild(div.children[0]);
    }
})