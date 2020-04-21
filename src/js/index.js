import Profile from "./profile.js";
import Conversation from "./conversation.js";

const boton = document.querySelector("#boton")
boton.onclick = () => {
    var manzProfile = new Profile("Manz", {
        lang: "es",
        rate: 2.0,
        pitch: 1.0,
        color: "#ff0000",
    });
    var ejemplo2 = new Conversation([
        { author: manzProfile, text: "¡Hola a todos! ¿Qué tal están?" },
        {
            author: manzProfile,
            text: "El robot habla con un acento un tanto raro...",
        },
    ]);
    ejemplo2.iniciar();
}