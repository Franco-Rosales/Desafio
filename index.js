const inputText = document.getElementById('inputText');
const resultCard = document.getElementById('resultCard');
const resultImage = document.getElementById('resultImage'); // Agregado para la imagen
const displayText = document.getElementById('displayText');
const copyButton = document.getElementById('copyButton');
const h2Element = document.querySelector('.card h2'); // Agregado para el título h2
const h4Element = document.querySelector('.card h4');

let textoActual = '';
let banderaTexto = false;

function actualizarContenido() {
    textoActual = inputText.value.trim();
    if (textoActual === '' || textoActual.toLowerCase() === 'ingrese el texto aquí') {
        mostrarContenidoEstatico();
        banderaTexto = false;
    } else {
        ocultarContenidoEstatico();
        banderaTexto = true;
    }
}
function encriptarTexto() {
    actualizarContenido();
    if (banderaTexto === true) {
        let textoEncriptado = encriptarConReglas(textoActual);
        displayText.innerText = textoEncriptado;
        displayText.style.display = 'block';
        copyButton.style.display = 'block';
        console.log(textoEncriptado);
    }else{
        console.log('No hay texto');
        actualizarContenido();
    }
}

function desencriptarTexto() {
    actualizarContenido();
    if (banderaTexto === true) {
        let textoDesencriptado = desencriptarConReglas(textoActual);
        displayText.innerText = textoDesencriptado;
        displayText.style.display = 'block';
        copyButton.style.display = 'block';
        console.log(textoDesencriptado);
    } else {
        console.log('No hay texto');
        actualizarContenido();
    }
}



function mostrarContenidoEstatico() {
    resultImage.style.display = 'block';
    h2Element.style.display = 'block';
    h4Element.style.display = 'block';
    displayText.style.display = 'none';
    copyButton.style.display = 'none';
}
function ocultarContenidoEstatico() {
    resultImage.style.display = 'none'; // Ocultar la imagen
    h2Element.style.display = 'none'; // Ocultar el título h2
    h4Element.style.display = 'none'; // Ocultar el párrafo h2
}
function encriptarConReglas(texto) {
    // Definir las reglas de encriptación
    const reglas = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Separar el texto en partes que coincidan con las claves del objeto y las que no
    const partes = texto.split(/(e|i|a|o|u)/);

    // Encriptar solo las partes que coincidan con las claves del objeto
    const partesEncriptadas = partes.map(parte => reglas[parte] || parte);

    // Introducir letras adicionales entre las partes encriptadas
    const textoEncriptado = partesEncriptadas.join('');

    return textoEncriptado;
}

function desencriptarConReglas(textoEncriptado) {
    // Definir las reglas de desencriptación (invertir las reglas)
    const reglasDesencriptacion = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    // Separar el texto encriptado en partes que coincidan con las claves del objeto y las que no
    const partes = textoEncriptado.split(/(enter|imes|ai|ober|ufat)/);

    // Desencriptar solo las partes que coinciden con las claves del objeto
    const partesDesencriptadas = partes.map(parte => reglasDesencriptacion[parte] || parte);

    // Unir las partes desencriptadas y devolver el resultado
    const textoDesencriptado = partesDesencriptadas.join('');

    return textoDesencriptado;
}

function copiarTexto() {
    // Obtener el contenido del div
    const contenido = document.getElementById('displayText').innerText;

    // Crear un elemento textarea temporal
    const textarea = document.createElement('textarea');
    textarea.value = contenido;

    // Añadir el textarea al DOM
    document.body.appendChild(textarea);

    // Seleccionar y copiar el contenido
    textarea.select();
    document.execCommand('copy');

    // Eliminar el textarea temporal
    document.body.removeChild(textarea);

    // Puedes mostrar un mensaje o realizar otras acciones después de copiar
    console.log('Texto copiado al portapapeles:', contenido);
}


/*



// Función para actualizar contenido al escribir en el textarea




// Función para encriptar texto (por ahora muestra contenido estático en la tarjeta)

// Función para copiar texto al portapapeles
function copiarTexto() {
    const texto = displayText.innerText;
    if (texto !== '') {
        navigator.clipboard.writeText(texto);
        alert('Texto copiado al portapapeles.');
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



*/