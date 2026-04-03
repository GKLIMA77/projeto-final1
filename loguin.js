function login(){

let usuarioDigitado = document.getElementById("usuario").value
let senhaDigitada = document.getElementById("senha").value

let usuarioSalvo = localStorage.getItem("usuario")
let senhaSalva = localStorage.getItem("senha")

if(usuarioDigitado === usuarioSalvo && senhaDigitada === senhaSalva){

alert("Login realizado!")

window.location.href = "site.html"

}else{

document.getElementById("msg").innerText = "Usuário ou senha incorretos"

}

}
localStorage.setItem("usuario","admin")
localStorage.setItem("senha","123")
