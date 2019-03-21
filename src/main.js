initialPage();
//login
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const btnIngresar = document.getElementById("login");

btnIngresar.addEventListener("click", loginUser, false);

//página inicio sesión y crear cuenta
function initialPage() {
    let divRoot = document.getElementById("root");
    divRoot.innerHTML = `
    <img src="images/logo.png" class="logo">
    <h4>Iniciar sesión</h4>
    <input id="email" type="text" placeholder="Email" >
    <input  id="password" type="text" placeholder="Contraseña">
    <button id="login"><p class="loginButton">Iniciar Sesión</p></button>
    <p>asesora@gmail.com - asesora </p>
    <br>
    <br>
    <p class="TyCText">Al aceptar indica que acepta los Términos y Condiciones</p>
    `
};

// página principal para usuarios logeados
function principalPage() {
    let divRoot = document.getElementById("root");
    divRoot.innerHTML = `
    <p>Página principal</p>
    <button onclick="logOut()">Log out</button>
    `
};

// const dbRef = firebase.database().ref(); // accede a la raíz de la base
