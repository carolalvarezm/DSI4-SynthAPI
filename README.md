# Práctica 9 : Synth API

## Synth API
* Para esta práctica he incluido en el html 3 botones que cuando se pulse en uno de ellos aparecerá el diálogo y se activará el sintetizador de voz, dependiendo de cuál pulsemos irá letra a letra, palabra a palabra o frase a frase.
```html

``` 
* Dentro de nuestro index.js buscamos los botones de html y se los asignamos a una variable:
```javascript

const Frase = document.querySelector("#Frase")
const Palabra = document.querySelector("#Palabra")
const Letra = document.querySelector("#Letra")
```
* Además instanciaremos los perfiles y la conversacion:
```javascript
var CanelaProfile = new Profile("Canela", {
    lang: "es",
    rate: 1.0,
    pitch: 1.0,
    color: "#ff0000",
});
var TomNookProfile = new Profile("TomNook", {
    lang: "es",
    rate: 1.0,
    pitch: 2.0,
    color: "blue",
});
var AldeanoProfile = new Profile("Aldeano", {
    lang: "es",
    rate: 1.0,
    pitch: 3.5,
    color: "green",
});
var conversacion = new Conversation([
    { author: TomNookProfile, text: "¡Hola a todos! ¿Qué tal están?" },
    { author: CanelaProfile, text: "Muy bien, ¡gracias!" },
    { author: AldeanoProfile, text: "Yo también muy bien" },
    { author: TomNookProfile, text: "Bueno, yo venía a hablarles del precio del alquiler" },
    { author: CanelaProfile, text: "Uy, acabo de recordar que tengo algo que hacer" },
    { author: AldeanoProfile, text: "Yo también me voy yendo ya mejor" },
]);
```
* Por último colocamos listeners a los botones para iniciar la conversación cuando se pulse sobre ellos con la opción elegida:
```javascript
Frase.onclick = () => {

    conversacion.iniciar("s");
}

Palabra.onclick = () => {

    conversacion.iniciar("w");
}

Letra.onclick = () => {

    conversacion.iniciar("l");
}
```
##  Clase Profile
* En esta clase crearemos los perfiles para los personajes.
* En primer lugar importamos las imágenes de la carpeta assets para poder asignarselas:
```javascript
import imagenes from "../assets/*.png";
```
* A continuación en el constructor de la clase simplemente inicializamos los parámetros y a el atributo img le asignamos la ruta de la imagen que tiene el mismo nombre que el perfil:
```javascript
import imagenes from "../assets/*.png";
class Profile {
    constructor(nombre, parametros) {
        this.nombre = nombre;
        this.lenguaje = parametros["lang"];
        this.pitch = parametros["pitch"];
        this.rate = parametros["rate"];
        this.color = parametros["color"];
        this.img = imagenes[nombre];
    }

}
export default Profile;
```

## Clase Conversation
* En la clase Conversation Lo primero que tenemos es un iniciar, que recorre el objeto que le hemos pasado con los perfiles y los textos a leer creando los elementos del DOM para añadirlos y llamando a la función sintetizar:
```javascript
    iniciar(opcion) {

        for (let i of this.text) {
            const caja = document.querySelector("#box");
            const div = document.createElement('div');
            caja.appendChild(div);
            this.sintetizar(i, opcion, div)

        }
    }

```
* La función Sintetizar lo primero que hace es instanciar un ```SpeechSynthesisUtterance();``` y darle las propiedades guardadas en el perfil:
```javascript
const msg = new SpeechSynthesisUtterance();

        msg.lang = texto["author"].lenguaje;
        msg.text = texto["text"];
        msg.rate = texto["author"].rate;
        msg.pitch = texto["author"].pitch;

```
* Después de eso según la opción que le hayamos puesto va frase a frase, palabra a palabra o letra a letra.
* Finalmente después de eso llamamos al sintetizador para que empiece con:
```javascript
 speechSynthesis.speak(msg);
``` 
### Frase a Frase
* Para que aparezca frase a frase en la pantalla lo primero que hacemos es ver si la opción utilizada es la 's'(de sentence).
* Una vez hecho esto añadimos un manejador de evento para que cuanto empiece el sintetizador a reproducirse aparezcan en el html la frase. Añadimos también la imagen del perfil y le añadimos la clase *chat* al div, con la que le daremos formato en el css:
```javascript
 if (opcion === 's') {
            msg.onstart = () => {
                img.src = texto["author"].img
                div.className = "chat"
                div.appendChild(img);
                div.appendChild(p);
                this.frase(texto, div)

            };
        }
```
* El método frase simplemente añade el nombre del perfil y el texto. Además añadimos el color, añadiendo estilo desde javascript, que estaba en el perfil. Finalmente lo añadimos en el html.
```javascript
    frase(texto, div) {
        let p = div.childNodes[1]
        p.textContent = texto["author"].nombre + ": " + texto["text"];
        p.style = "color:" + texto["author"].color
        div.childNodes[1].data = p;
    }
```
![Frase a Frase](https://github.com/ULL-ESIT-DSI-1920/dsi-p3-synth-alu0100944723/blob/master/src/assets/Capturas_Readme/FraseAFrase.gif)
### Palabra a palabra
* Para el palabra a palabra como en el anterior lo primero que hacemos es utilizar el evento onstart para cuando empiece a ejecutarse el sintetizador añadir la imagen y la clase *chat* al div:
```javascript
else if (opcion === 'w') {

            msg.onstart = () => {
                div.className = "chat"
                img.src = texto["author"].img
                div.appendChild(img);
                div.appendChild(p);
            };

        }
```
* Lo otro que hacemos es añadir otro evento, este ejecutará nuestra función en los límites de frase/palabra. Por tanto cuando el evento se ejecute al final de una palabra, ```if (event.name === "word") {```, cogemos el índice donde se encuentra en la frase y la longitud de la palabra para coger una subcadena que contenga la palabra. Esta palabra se la pasamos al método wordToWord que la incluirá en el html:
```javascript
            msg.onboundary = (event) => {
                if (event.name === "word") {
                    const start = event.charIndex;
                    const end = start + event.charLength
                    let palabra = texto["text"].substring(start, end);
                    this.wordToWord(palabra, div, texto)

                }
            };
```
* El método wordToWord hace casi lo mismo que el anterior de frase sólo añadiendo los espacios entre las palabras:
```javascript
    wordToWord(palabra, div, texto) {

        let p = div.childNodes[1];
        p.textContent = p.textContent + " " + palabra;
        p.style = "color:" + texto["author"].color;
        div.childNodes[1].data = p;

    }
```

![Palabra a Palabra](https://github.com/ULL-ESIT-DSI-1920/dsi-p3-synth-alu0100944723/blob/master/src/assets/Capturas_Readme/PalabraAPalabra.gif)
### Letra a Letra
* Para el método de letra a letra en primer lugar hacemos como en el anterior el evento onstart para cuando empiece a ejecutarse el reproducirse añadir la imagen y la clase *chat* al div:
```javascript
else if (opcion === 'l') {
            console.log("Letra")
            msg.onstart = () => {
                div.className = "chat"
                img.src = texto["author"].img
                div.appendChild(img);
                div.appendChild(p);
            };
            msg.onboundary = (event) => {
                if (event.name === "word") {
                    const start = event.charIndex;
                    const end = start + event.charLength
                    let palabra = texto["text"].substring(start, end) + " ";
                    this.letterToLetter(palabra, div, texto)
                }

            };
```
* También añadimos un evento onboundary() en el que hacemos exactamente lo mismo que en el anterior como podemos ver.
* Finalmente el método letterToLetter lo que hacemos es como en los anteriores al principio añadir el color del perfil como estilo.
* Después hacemos para cada letra de la palabra que nos han pasado un ```setTimeout()''' en el que actualizamos el contenido del párrafo letra a letra añadiendolo al html:
```javascript
    letterToLetter(palabra, div, texto) {

        let p = div.childNodes[1];
        p.style = "color:" + texto["author"].color;
        for (let i = 0; i < palabra.length; i++) {
            console.log(palabra.charAt(i))
            let time = setTimeout(function() {
                p.textContent = p.textContent + palabra.charAt(i)
                div.childNodes[1].data = p;
            }, (palabra.length * i))
        }
        clearTimeout(time)
    }

```

![Letra a Letra](https://github.com/ULL-ESIT-DSI-1920/dsi-p3-synth-alu0100944723/blob/master/src/assets/Capturas_Readme/LetraALetra.gif)

## CSS
* El CSS que he utilizado en esta práctica es mínimo y se muestra a continuación:
```css
.chat {
    display: flex;
    width: 1200px;
    background-color: black;
}

#box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

img {
    width: 100px;
    height: 100px;
    background-color: white;
}
```
* Para ver el resultado de esta práctica la he desplegado en gh-pages y puede verse en la siguiente [url](https://ull-esit-dsi-1920.github.io/dsi-p3-synth-alu0100944723/)