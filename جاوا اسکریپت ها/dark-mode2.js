function toggleDarkLight(){
document.documentElement.classList.toggle("dark-mode");
}
toggleDarkLight();
const isDarkmode = window.matchMedia("(prefers-color-scheme:dark)");
isDarkmode.addListener((evt)=>toggleDarkMode(evt.matches));
/*
In css add class Dark theme to name dark-mode
dark-mode{}
dark-mode html {}
dark-mode .class{}
dark-mode #id{}
*/
