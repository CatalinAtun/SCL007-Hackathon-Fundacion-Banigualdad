

document.getElementById("personal").addEventListener("click", function () {

    document.getElementById('pantalla1').innerHTML = `

    <img id="fotoContacto" src="Ellipse.png">
    <p href="#"id="nombreContacto">Marian Alicia</p>
    <p id="hora">12:30</p>
    <img id="info" src="Ellipse2.png">
    <img id="uno" src="1.png">
    <hr id="linea">
    <img id="fotoContacto" src="fabiola.png">
    <p id="nombreContacto">Fabiola Barra</p>
    <p id="hora">8:30</p>
    <hr id="linea2">
    <img id="fotoContacto" src="cecilia.png">
    <p id="nombreContacto">Cecilia Valenzuela</p>
    <p id="hora">18:11</p>
    <hr id="linea2">
    <img id="fotoContacto" src="gloria.png">
    <p id="nombreContacto">Gloria Naranjo</p>
    <p id="hora">16:30</p>
    <hr id="linea2">
    
    `
})


document.getElementById("fotoContacto").addEventListener("click", function () {

    alert("holas")
})


document.getElementById("eventos").addEventListener("click", function () {

    alert("holas")
})
// CHAT 

const buttonChatBack = document.getElementById("buttonChatBack");
const nav = document.getElementById("mainMenu")

buttonChat.addEventListener("click", function () {
    mainMenu.innerHTML = `
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12" id="menumain">
          <img class="back" src="images/back.png">
          <p class="name">Martina Carvajal</p>
          <img class="add" src="images/add.png">
        </div>
      </div>
    </div>
  </header>
  <body>
  <div class="firstMessage">
  <p class="pMessage">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>
  <div class="secondMessage">
  <p class="pMessage">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
  <div class="firstMessage">
  <p class="pMessage">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div class="secondMessage">
  <p class="pMessage">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
  </div>
  </body>
  <footer>
  <div class="container">
      <div class="row">
        <div class="col-12" id="footer">
        <img class="image" src="images/imagen.png">
        <img class="archivo" src="images/archivo.png">
        <input placeholder="Type your message">
        <img class="arrowRight" src="images/arrow-right.png">
        </div>
      </div>
    </div>
  </footer>
    `
})

