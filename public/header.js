const areaLogin = document.querySelector(".cadastro-login");

if (sessionStorage.user_id) {
    areaLogin.innerHTML = `<a class="login" href="#" onclick="sair()"><p>Sair</p></a>`;
}

function sair() {
    sessionStorage.clear();
    window.location = "/public/pagina-inicial.html";
}