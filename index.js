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
    h4Element.style.display = 'none'; // Ocultar el párrafo p
    resultCard.innerHTML = `<p style="font-family: 'Inter', sans-serif; text-align: center;">${texto}</p>`;
}

// Función para mostrar el texto en la parte inferior de la tarjeta
function mostrarTextoInferior() {
    displayText.style.display = 'block';
    copyButton.style.display = 'block';
}

// Función para encriptar texto (por ahora muestra contenido estático en la tarjeta)

// Función para copiar texto al portapapeles
function copiarTexto() {
    const texto = displayText.innerText;
    if (texto !== '') {
        navigator.clipboard.writeText(texto);
        alert('Texto copiado al portapapeles.');
    }
}

// Función para mostrar el resultado en la tarjeta
function mostrarContenidoEstatico() {
    resultCard.style.opacity = '1';
    resultImage.style.display = 'block';
    h2Element.style.display = 'block'; // Mostrar el título h2
    h4Element.style.display = 'block'; // Mostrar el párrafo p
    displayText.style.display = 'none';
    copyButton.style.display = 'none';
}

// Funciones para mostrar y ocultar contenido estático

function ocultarContenidoEstatico() {
    resultImage.style.display = 'none'; // Ocultar la imagen
    h2Element.style.display = 'none'; // Ocultar el título h2
    h4Element.style.display = 'none'; // Ocultar el párrafo p
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
// Función para encriptar texto según las reglas dadas
function encriptarTexto() {
    alert('Texto encriptado: ');
    const texto = inputText.value.trim().toLowerCase();

    if (texto === '' || texto === 'ingrese el texto aquí') {
        ocultarBotonCopiar();
        mostrarContenidoEstatico();
    } else {
        alert('Texto encriptado: soy el segundo');
        const textoEncriptado = encriptarConReglas(texto);
        mostrarTextoEncriptado(textoEncriptado);

        // Agregar clase de movimiento al botón
        document.querySelector('.dark-blue-button').classList.add('button-clicked');

        // Eliminar la clase después de 300 ms
        setTimeout(() => {
            document.querySelector('.dark-blue-button').classList.remove('button-clicked');
        }, 300);
    }
}

// Función para desencriptar texto (con movimiento)
function desencriptarTexto() {
    const texto = inputText.value.trim().toLowerCase();

    if (texto === '' || texto === 'ingrese el texto aquí') {
        ocultarBotonCopiar();
        mostrarContenidoEstatico();
    } else {
        mostrarResultado();

        // Agregar clase de movimiento al botón
        document.querySelector('.light-blue-button').classList.add('button-clicked');

        // Eliminar la clase después de 300 ms
        setTimeout(() => {
            document.querySelector('.light-blue-button').classList.remove('button-clicked');
        }, 300);
    }
}

// Función para encriptar el texto según las reglas dadas
function encriptarConReglas(texto) {
    // Definir las reglas de encriptación
    const reglas = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Aplicar las reglas a cada letra del texto
    const textoEncriptado = texto.split('').map(letra => reglas[letra] || letra).join('');

    return textoEncriptado;
}

// Función para mostrar el texto encriptado en la tarjeta
function mostrarTextoEncriptado(textoEncriptado) {
    resultCard.style.opacity = '1';
    resultImage.style.display = 'none';

    // Ocultar otros elementos
    h2Element.style.display = 'none';
    h4Element.style.display = 'none';

    // Utiliza innerHTML para asignar el texto encriptado
    resultCard.innerHTML = `<p style="font-family: 'Inter', sans-serif; text-align: center;">${textoEncriptado}</p>`;
    
    // Mostrar la tarjeta después de asignar el contenido
    resultCard.style.display = 'flex';

    // Ocultar otros elementos innecesarios
    displayText.style.display = 'none';
    copyButton.style.display = 'block';
}




// Llamada inicial para configurar el estado inicial
actualizarContenido();

