// Obtener elementos del DOM
const inputText = document.getElementById('inputText');
const resultCard = document.getElementById('resultCard');
const resultImage = document.getElementById('resultImage'); // Agregado para la imagen
const displayText = document.getElementById('displayText');
const copyButton = document.getElementById('copyButton');
const h2Element = document.querySelector('.card h2'); // Agregado para el título h2
const pElement = document.querySelector('.card p'); // Agregado para el párrafo p

// Función para actualizar contenido al escribir en el textarea
function actualizarContenido() {
    const texto = inputText.value.trim();
    if (texto === '' || texto.toLowerCase() === 'ingrese el texto aquí') {
        ocultarBotonCopiar();
        mostrarContenidoEstatico();
    } else {
        mostrarBotonCopiar();
        ocultarContenidoEstatico();
        mostrarTextoSuperior(texto); // Mostrar texto en la parte superior de la tarjeta
        mostrarTextoInferior(); // Mostrar el botón en la parte inferior de la tarjeta
    }
}

// Función para mostrar el texto en la parte superior de la tarjeta
function mostrarTextoSuperior(texto) {
    // Puedes personalizar el estilo según sea necesario
    h2Element.style.display = 'none'; // Ocultar el título h2
    pElement.style.display = 'none'; // Ocultar el párrafo p
    resultCard.innerHTML = `<p style="font-family: 'Inter', sans-serif; text-align: center;">${texto}</p>`;
}

// Función para mostrar el texto en la parte inferior de la tarjeta
function mostrarTextoInferior() {
    displayText.style.display = 'block';
    copyButton.style.display = 'block';
}

// Función para encriptar texto (por ahora muestra contenido estático en la tarjeta)
function encriptarTexto() {
    const texto = inputText.value.trim();
    if (texto === '' || texto.toLowerCase() === 'ingrese el texto aquí') {
        ocultarBotonCopiar();
        mostrarContenidoEstatico();
    } else {
        mostrarResultado();
    }
}

// Función para desencriptar texto (por ahora muestra contenido estático en la tarjeta)
function desencriptarTexto() {
    const texto = inputText.value.trim();
    if (texto === '' || texto.toLowerCase() === 'ingrese el texto aquí') {
        ocultarBotonCopiar();
        mostrarContenidoEstatico();
    } else {
        mostrarResultado();
    }
}

// Función para copiar texto al portapapeles
function copiarTexto() {
    const texto = displayText.innerText;
    if (texto !== '') {
        navigator.clipboard.writeText(texto);
        alert('Texto copiado al portapapeles.');
    }
}

// Función para mostrar el resultado en la tarjeta
function mostrarResultado() {
    const texto = inputText.value.trim();
    resultCard.style.opacity = '1';
    resultImage.style.display = 'none';
    displayText.style.display = 'block';
    displayText.innerText = texto;
    copyButton.style.display = 'block';
}

// Funciones para mostrar y ocultar contenido estático
function mostrarContenidoEstatico() {
    resultCard.style.opacity = '1';
    resultImage.style.display = 'block';
    h2Element.style.display = 'block'; // Mostrar el título h2
    pElement.style.display = 'block'; // Mostrar el párrafo p
    displayText.style.display = 'none';
    copyButton.style.display = 'none';
}

// Funciones para mostrar y ocultar el botón de copiar
function mostrarBotonCopiar() {
    copyButton.style.display = 'block';
}

function ocultarBotonCopiar() {
    copyButton.style.display = 'none';
}

// Llamada inicial para configurar el estado inicial
actualizarContenido();
