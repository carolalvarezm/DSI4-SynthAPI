parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qlIE":[function(require,module,exports) {
module.exports="/dsi-p3-synth-alu0100944723/Breadman.ed0ce87e.png";
},{}],"jq0k":[function(require,module,exports) {
module.exports="/dsi-p3-synth-alu0100944723/Manz.2683b87d.png";
},{}],"ePAF":[function(require,module,exports) {
module.exports="/dsi-p3-synth-alu0100944723/Robot.1f2fde41.png";
},{}],"HBCd":[function(require,module,exports) {
module.exports={Breadman:require("./Breadman.png"),Manz:require("./Manz.png"),Robot:require("./Robot.png")};
},{"./Breadman.png":"qlIE","./Manz.png":"jq0k","./Robot.png":"ePAF"}],"JCXk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../assets/*.png"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=function e(s,i){r(this,e),this.nombre=s,this.lenguaje=i.lang,this.pitch=i.pitch,this.rate=i.rate,this.color=i.color,this.img=t.default[s]},i=s;exports.default=i;
},{"../assets/*.png":"HBCd"}],"ftND":[function(require,module,exports) {
"use strict";function t(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=e(t))){var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,c=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==o.return||o.return()}finally{if(c)throw a}}}}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(){function e(t){r(this,e),this.text=t}return a(e,[{key:"sintetizar",value:function(t,e,n,r,o,a){var i=this,c=new SpeechSynthesisUtterance;c.lang=t.author.lenguaje,c.text=t.text,c.rate=t.author.rate,c.pitch=t.author.pitch,"s"==e?c.onstart=function(){a.src=t.author.img,n.className="chat",r.appendChild(n),n.appendChild(a),n.appendChild(o),i.frase(t,n)}:"w"==e?(c.onstart=function(){n.className="chat",a.src=t.author.img,r.appendChild(n),n.appendChild(a),n.appendChild(o)},c.onboundary=function(e){if("word"===e.name){var r=e.charIndex,o=r+e.charLength,a=c.text.substring(r,o);i.wordToWord(a,n,t)}}):"l"==e&&(c.onstart=function(){n.className="chat",a.src=t.author.img,r.appendChild(n),n.appendChild(a),n.appendChild(o)},c.onboundary=function(e){if("word"===e.name){var r=e.charIndex,o=r+e.charLength,a=c.text.substring(r,o)+" ";i.letterToLetter(a,n,t)}}),speechSynthesis.speak(c)}},{key:"frase",value:function(t,e){var n=e.childNodes[1];n.textContent=t.author.nombre+": "+t.text,n.style="color:"+t.author.color,e.childNodes[1].data=n}},{key:"wordToWord",value:function(t,e,n){var r=e.childNodes[1];r.textContent=r.textContent+" "+t,r.style="color:"+n.author.color,e.childNodes[1].data=t}},{key:"letterToLetter",value:function(t,e,n){var r=e.childNodes[1];r.style="color:"+n.author.color;for(var o=0;o<t.length;o++)r.textContent=r.textContent+t.charAt(o),setTimeout(25*o);e.childNodes[1].data=r}},{key:"iniciar",value:function(e){var n,r=t(this.text);try{for(r.s();!(n=r.n()).done;){var o=n.value,a=document.createElement("div"),i=document.querySelector("#box"),c=document.createElement("p"),u=document.createElement("img");this.sintetizar(o,e,a,i,c,u)}}catch(l){r.e(l)}finally{r.f()}}}]),e}(),c=i;exports.default=c;
},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=o(require("./profile.js")),t=o(require("./conversation.js"));function o(e){return e&&e.__esModule?e:{default:e}}var a=document.querySelector("#Frase"),n=document.querySelector("#Palabra"),r=document.querySelector("#Letra"),u=new e.default("Manz",{lang:"es",rate:1,pitch:1,color:"#ff0000"}),c=new e.default("Robot",{lang:"en",rate:1,pitch:4,color:"blue"}),i=new e.default("Breadman",{lang:"es",rate:1,pitch:3,color:"green"}),l=new t.default([{author:u,text:"¡Hola a todos! ¿Qué tal están?"},{author:c,text:"Muy bien, ¡gracias!"},{author:i,text:"Yo también muy bien"},{author:u,text:"El robot habla con un acento un tanto raro..."},{author:c,text:"Es que soy del norte"}]);a.onclick=function(){l.iniciar("s")},n.onclick=function(){l.iniciar("w")},r.onclick=function(){l.iniciar("l")};
},{"./profile.js":"JCXk","./conversation.js":"ftND"}]},{},["QvaY"], null)
//# sourceMappingURL=/dsi-p3-synth-alu0100944723/js.e1a404b9.js.map