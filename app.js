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
    imprimeLista();
  }
  console.log(listaDeAmigos);
}

function imprimeLista() {
    let lista = document.getElementById("listaAmigos");
    //Limpia la lista a mostrar
    lista.innerHTML = "";
    //Recorre el arreglo de la lista de amigos a mostrar
    listaDeAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}