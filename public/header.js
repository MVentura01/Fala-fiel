


const areaLogin = document.querySelector(".cadastro-login");

if (sessionStorage.user_id) {
    areaLogin.innerHTML = `<a id ="logout" class="login" href="#" onclick="sair()"><p>Logout</p></a>`;
}

function sair() {
    sessionStorage.clear();
    window.location = "/public/pagina-inicial.html";
}
