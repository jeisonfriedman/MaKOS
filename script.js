// ==UserScript==
// @name         MaKOS Cloud Fixes
// @namespace    https://app.makos.com.co/
// @version      0.3
// @description  Ajustes de MaKOS Cloud
// @author       Jeison Friedman
// @match        https://app.makos.com.co/*
// @grant        none
// @updateURL    https://jeisonfriedman.github.io/MaKOS/script.js
// @downloadURL  https://jeisonfriedman.github.io/MaKOS/script.js
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {
        const url = '//jeisonfriedman.github.io/MaKOS';
        const div = document.createElement('div');
        div.innerHTML = `<script src="${url}/jsn.js" type="text/javascript"></script>`;
        document.querySelector('head').appendChild(div.children[0]);
    })
})();