class Conversation {
    constructor(text) {
        this.text = text;
    }

    sintetizar(texto) {
        const msg = new SpeechSynthesisUtterance();

        msg.lang = texto["author"]["lang"];
        msg.text = texto["author"].nombre + " " + texto["text"];
        msg.rate = texto["author"].parametros["rate"];
        msg.pitch = texto["author"].parametros["pitch"];

        msg.onstart = () => { this.frase(texto) };
        speechSynthesis.speak(msg);
    }
    frase(texto) {
        const caja = document.querySelector("#box");
        var p = document.createElement('p');
        p.textContent = texto["author"].nombre + ": " + texto["text"];
        p.style = "color:" + texto["author"].parametros["color"]

        console.log(texto["text"]);
        caja.appendChild(p);
    }
    wordToWord(texto) {

    }
    letterToLetter(texto) {

    }

    iniciar() {
        for (let i of this.text) {
            this.sintetizar(i)
        }
    }

}
export default Conversation;