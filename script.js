const btnSombre = document.getElementById('btn-sombre');
const btnClair = document.getElementById('btn-clair');
const themeActuel = document.getElementById('theme-actuel');



btnSombre.onclick = function (){
    btnSombre.textContent = '🌙 Activé !';
    document.body.classList.toggle ('theme-sombre');
    document.body.classList.remove ('theme-clair');
    themeActuel.textContent = 'Sombre';
    btnClair.textContent = '☀️ Thème Clair';
}

btnClair.addEventListener ('click', function () {
    btnClair.textContent = '☀️Activé';
    document.body.classList.add ('theme-clair');
    document.body.classList.remove ('theme-sombre');
    themeActuel.textContent = 'Clair';
    btnSombre.textContent = '🌙 Thème Sombre';
})

