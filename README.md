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
* Una vez hecho esto añadimos un manejador de evento para que cuanto empiece el sintetizador a reproducirse aparezcan en el html la frase:
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
* La función frase simplemente añade el nombre del perfil y el texto. Además añadimos el color, añadiendo estilo desde javascript, que estaba en el perfil. Finalmente lo añadimos en el html.
```javascript
    frase(texto, div) {
        let p = div.childNodes[1]
        p.textContent = texto["author"].nombre + ": " + texto["text"];
        p.style = "color:" + texto["author"].color
        div.childNodes[1].data = p;
    }
```
![Frase a Frase]()
### Palabra a palabra
### Letra a Letra
