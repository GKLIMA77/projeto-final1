document.getElementById("formContato").addEventListener("submit", function(event){

event.preventDefault();

document.getElementById("mensagemSucesso").innerHTML =
"Mensagem enviada com sucesso! Agradeço por sua mensagem!!";

});
