class Conversation {
    constructor(text) {
        this.text = text;
    }

    sintetizar(texto, opcion) {
        const msg = new SpeechSynthesisUtterance();

        msg.lang = texto["author"]["lang"];
        msg.text = texto["text"];
        msg.rate = texto["author"].parametros["rate"];
        msg.pitch = texto["author"].parametros["pitch"];
        console.log(opcion)
        if (opcion == 's') {
            msg.onstart = () => { this.frase(texto) };
        } else if (opcion == 'w') {
            msg.onboundary = (event) => {
                console.log(event.utterance.text)
            };
        }
        speechSynthesis.speak(msg);
    }
    frase(texto) {
        const caja = document.querySelector("#box");
        var div = document.createElement('div');
        div.className = "chat"
        var p = document.createElement('p');
        var img = document.createElement('img');
        p.textContent = texto["author"].nombre + ": " + texto["text"];
        p.style = "color:" + texto["author"].parametros["color"]
        img.src = texto["author"].img

        console.log(texto["text"]);
        caja.appendChild(div);
        div.appendChild(img)
        div.appendChild(p)

    }
    wordToWord(texto) {

    }
    letterToLetter(texto) {

    }

    iniciar(opcion) {
        for (let i of this.text) {
            this.sintetizar(i, opcion)
        }
    }

}
export default Conversation;