/*
Add this import to app.component.ts
import '../app/app.js';
*/

let parallax = document.getElementById("parallax");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    this.parallax.style.backgroundPositionY = offset * 0.7 + "px";
})