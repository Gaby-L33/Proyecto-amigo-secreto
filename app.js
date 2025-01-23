/*
En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos
 en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". 
Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" 
seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán 
a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista 
y se mostrará en la página.
*/

// Lista para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim(); // Elimina espacios en blanco

    if (nombre === "") {
        alert("Error, escribe un nombre válido.");
        return;
    }

    // Agrega el nombre a la lista y limpia el campo de entrada
    listaAmigos.push(nombre);
    inputAmigo.value = "";
    
    actualizarLista();
}

// Función para actualizar la lista visible en la página
function actualizarLista() {
    const ulListaAmigos = document.getElementById("listaAmigos");
    ulListaAmigos.innerHTML = ""; // Limpia la lista anterior

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        ulListaAmigos.appendChild(li);
    });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre antes de realizar el sorteo.");
        return;
    }

    // Genera un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];

    // Muestra el resultado del sorteo
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ""; // Limpia cualquier resultado anterior

    const liResultado = document.createElement("li");
    liResultado.textContent = `¡El amigo secreto es: ${amigoSeleccionado}!`;
    ulResultado.appendChild(liResultado);
}
