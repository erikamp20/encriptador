const traducciones = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat'
};

const encriptar = (textarea) => {
  return textarea.split('').map((letra) => {
    if (traducciones[letra]) {
      return traducciones[letra];
    }
    return letra;
  }).join('');
};

const desencriptar = (textarea) => {
  if (!textarea.includes(' ')) {
    const regex = new RegExp(Object.values(traducciones).join('|'), 'g');
    return textarea.replace(regex, (match) => {
      return Object.keys(traducciones).find(key => traducciones[key] === match);
    });
  } else {
    const palabras = textarea.split(' ');
    return palabras.map(palabra => {
      const regex = new RegExp(Object.values(traducciones).join('|'), 'g');
      return palabra.replace(regex, (match) => {
        return Object.keys(traducciones).find(key => traducciones[key] === match);
      });
    }).join(' ');
  }
};

const textareaInput = document.getElementById('textarea');
const textarea2Input = document.getElementById('textarea2');
const encriptarBtn = document.getElementById('encriptar');
const desencriptarBtn = document.getElementById('desencriptar');
const copiarBtn = document.getElementById('copiar');
const imagen = document.querySelector('searching');
const area2 = document.querySelector('textarea2');

encriptarBtn.addEventListener('click', () => {
  const textarea = textareaInput.value.toLowerCase().replace(/[^a-z\s]/g, '');
  if (textarea !== textareaInput.value) {
    mostrarPopup();
   /* alert('El texto ingresado debe contener solo letras minúsculas y espacios');*/
    return;
  }
  textarea2Input.value = encriptar(textarea);


  if (imagen.style.display === 'none') {
    imagen.style.display = 'block'; 
    area2.style.display = 'none';
  } else {
    imagen.style.display = 'none';
    area2.style.display = 'block';
  }


});

desencriptarBtn.addEventListener('click', () => {
  const textarea = textareaInput.value.toLowerCase().replace(/[^a-z\s]/g, '');
  if (textarea !== textareaInput.value && !textarea.includes(' ')) {
    mostrarPopup();
   /* alert('El texto ingresado debe contener solo letras minúsculas y espacios y estar encriptado');*/
    return;
  }
  textarea2Input.value = desencriptar(textarea);
});



const searching = document.getElementById('searching');
const textarea2 = document.getElementById('textarea2');
const caption = document.getElementById('h2');

encriptarBtn.addEventListener('click', () => {
searching.style.display = 'none';
textarea2.style.display = 'block';
copiarBtn.style.display = 'block';
caption.style.display = 'none';
});


copiarBtn.addEventListener('click', () => {
  textarea2Input.select();
  document.execCommand('copy');
});


var botonCerrar = document.getElementById("cerrar-popup");
var popup = document.getElementById("mi-popup");

function mostrarPopup() {
  popup.style.display = "block";
}


function cerrarPopup() {
  popup.style.display = "none";
}
botonCerrar.addEventListener("click", cerrarPopup);











