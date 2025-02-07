// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista de amigos
let listaDeAmigos = [];


function agregarAmigo() {
  let nombreDelAmigo = document.getElementById("amigo").value;
  if (nombreDelAmigo == "") {
    alert("Por favor, inserte un nombre.");
  } else {
    listaDeAmigos.push(nombreDelAmigo);
    document.getElementById("amigo").value = "";
  }
  console.log(listaDeAmigos);
}
