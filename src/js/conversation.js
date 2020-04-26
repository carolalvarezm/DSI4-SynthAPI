class Conversation {
    constructor(text) {
        this.text = text;
    }

    sintetizar(texto, opcion, div, caja, p, img) {


        const msg = new SpeechSynthesisUtterance();

        msg.lang = texto["author"].lenguaje;
        msg.text = texto["text"];
        msg.rate = texto["author"].rate;
        msg.pitch = texto["author"].pitch;


        if (opcion === 's') {
            msg.onstart = () => {
                img.src = texto["author"].img
                div.className = "chat"
                caja.appendChild(div);
                div.appendChild(img)
                div.appendChild(p)
                this.frase(texto, div)

            };
        } else if (opcion === 'w') {

            msg.onstart = () => {
                div.className = "chat"
                img.src = texto["author"].img
                caja.appendChild(div);
                div.appendChild(img);
                div.appendChild(p);


            };
            msg.onboundary = (event) => {
                if (event.name === "word") {
                    const start = event.charIndex;
                    const end = start + event.charLength
                    let palabra = texto["text"].substring(start, end);
                    this.wordToWord(palabra, div, texto)

                }
            };
        } else if (opcion === 'l') {
            console.log("Letra")
            msg.onstart = () => {
                div.className = "chat"
                img.src = texto["author"].img
                caja.appendChild(div);
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
        }

        speechSynthesis.speak(msg);

    }
    frase(texto, div) {
        let p = div.childNodes[1]
        p.textContent = texto["author"].nombre + ": " + texto["text"];
        p.style = "color:" + texto["author"].color
        div.childNodes[1].data = p;
    }


    wordToWord(palabra, div, texto) {

        let p = div.childNodes[1];
        p.textContent = p.textContent + " " + palabra;
        p.style = "color:" + texto["author"].color;
        div.childNodes[1].data = p;

    }

    letterToLetter(palabra, div, texto) {

        let p = div.childNodes[1];
        p.style = "color:" + texto["author"].color;
        var j = 0;
        for (let i = 0; i < palabra.length; i++) {
            setTimeout(function() {
                p.textContent = p.textContent + palabra.charAt(i)
                div.childNodes[1].data = p;
            }, (25 * i))
        }
    }

    iniciar(opcion) {

        for (let i of this.text) {
            const div = document.createElement('div');
            const caja = document.querySelector("#box");
            const p = document.createElement('p');
            const img = document.createElement('img');
            this.sintetizar(i, opcion, div, caja, p, img)

        }
    }


}
export default Conversation;