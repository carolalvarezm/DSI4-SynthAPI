import Profile from "./Profile.js";
import Conversation from "./Conversation.js";

const Frase = document.querySelector("#Frase")
const Palabra = document.querySelector("#Palabra")
const Letra = document.querySelector("#Letra")
var CanelaProfile = new Profile("Canela", {
    lang: "es",
    rate: 2.0,
    pitch: 2.0,
    color: "#ff0000",
});
var TomNookProfile = new Profile("TomNook", {
    lang: "es",
    rate: 2.0,
    pitch: 1.0,
    color: "blue",
});
var AldeanoProfile = new Profile("Aldeano", {
    lang: "es",
    rate: 2.0,
    pitch: 3.5,
    color: "green",
});
var conversacion = new Conversation([
    { author: TomNookProfile, text: "¡Hola a  todos! ¿Qué tal están?" },
    { author: CanelaProfile, text: "Muy bien, ¡gracias!" },
    { author: AldeanoProfile, text: "Yo también muy bien" },
    { author: TomNookProfile, text: "Bueno, necesito que me ayudeis con algo" },
    { author: CanelaProfile, text: "Uy, acabo de recordar que tengo algo que hacer" },
    { author: AldeanoProfile, text: "Yo también me voy yendo ya" },
]);
Frase.onclick = () => {

    conversacion.iniciar("s");
}

Palabra.onclick = () => {

    conversacion.iniciar("w");
}

Letra.onclick = () => {

    conversacion.iniciar("l");
}