import Profile from "./profile.js";
import Conversation from "./conversation.js";

const Frase = document.querySelector("#Frase")
const Palabra = document.querySelector("#Palabra")
var manzProfile = new Profile("Manz", {
    lang: "es",
    rate: 2.0,
    pitch: 1.0,
    color: "#ff0000",
});
var robotProfile = new Profile("Robot", {
    lang: "en",
    rate: 1.0,
    pitch: 1.0,
    color: "blue",
});
var breadmanProfile = new Profile("Breadman", {
    lang: "es",
    rate: 2.0,
    pitch: 3.0,
    color: "green",
});
var ejemplo2 = new Conversation([
    { author: manzProfile, text: "¡Hola a todos! ¿Qué tal están?" },
    { author: robotProfile, text: "Muy bien, ¡gracias!" },
    { author: breadmanProfile, text: "Yo también muy bien" },
    {
        author: manzProfile,
        text: "El robot habla con un acento un tanto raro...",
    },
    { author: robotProfile, text: "Es que soy del norte" },
]);
Frase.onclick = () => {

    ejemplo2.iniciar("s");
}

Palabra.onclick = () => {

    ejemplo2.iniciar("w");
}