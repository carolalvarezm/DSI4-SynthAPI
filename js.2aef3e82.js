parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qlIE":[function(require,module,exports) {
module.exports="/dsi-p3-synth-alu0100944723/Breadman.ed0ce87e.png";
},{}],"jq0k":[function(require,module,exports) {
module.exports="/dsi-p3-synth-alu0100944723/Manz.2683b87d.png";
},{}],"ePAF":[function(require,module,exports) {
module.exports="/dsi-p3-synth-alu0100944723/Robot.1f2fde41.png";
},{}],"HBCd":[function(require,module,exports) {
module.exports={Breadman:require("./Breadman.png"),Manz:require("./Manz.png"),Robot:require("./Robot.png")};
},{"./Breadman.png":"qlIE","./Manz.png":"jq0k","./Robot.png":"ePAF"}],"JCXk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../assets/*.png"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function t(s,a){r(this,t),this.nombre=s,this.parametros=a,this.img=e.default[s]},a=s;exports.default=a;
},{"../assets/*.png":"HBCd"}],"ftND":[function(require,module,exports) {
"use strict";function t(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=e(t))){var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,u=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==o.return||o.return()}finally{if(u)throw a}}}}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(){function e(t){r(this,e),this.text=t}return a(e,[{key:"sintetizar",value:function(t,e,n,r,o){var a=this,i=new SpeechSynthesisUtterance;if(i.lang=t.author.lang,i.text=t.text,i.rate=t.author.parametros.rate,i.pitch=t.author.parametros.pitch,"s"==e)i.onstart=function(){a.frase(t)};else if("w"==e){var u=0;i.onboundary=function(e){a.wordToWord(t,u,n,r,o),u++},i.onstart=function(){o.src=t.author.img,r.appendChild(o),r.appendChild(n)}}speechSynthesis.speak(i)}},{key:"frase",value:function(t){var e=document.querySelector("#box"),n=document.createElement("div");n.className="chat";var r=document.createElement("p"),o=document.createElement("img");r.textContent=t.author.nombre+": "+t.text,r.style="color:"+t.author.parametros.color,o.src=t.author.img,e.appendChild(n),n.appendChild(o),n.appendChild(r)}},{key:"wordToWord",value:function(t,e,n,r,o){var a=t.text.split(" ");console.log(a[e]),n.textContent=n.textContent+" "+a[e],n.style="color:"+t.author.parametros.color,r.childNodes[1].data=n}},{key:"letterToLetter",value:function(t){}},{key:"iniciar",value:function(e){var n,r=t(this.text);try{for(r.s();!(n=r.n()).done;){var o=n.value,a=document.createElement("div"),i=document.querySelector("#box");a.className="chat";var u=document.createElement("p"),c=document.createElement("img");i.appendChild(a),this.sintetizar(o,e,u,a,c)}}catch(l){r.e(l)}finally{r.f()}}}]),e}(),u=i;exports.default=u;
},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=a(require("./profile.js")),t=a(require("./conversation.js"));function a(e){return e&&e.__esModule?e:{default:e}}var o=document.querySelector("#Frase"),r=document.querySelector("#Palabra"),n=new e.default("Manz",{lang:"es",rate:2,pitch:1,color:"#ff0000"}),u=new e.default("Robot",{lang:"en",rate:1,pitch:1,color:"blue"}),c=new e.default("Breadman",{lang:"es",rate:2,pitch:3,color:"green"}),l=new t.default([{author:n,text:"¡Hola a todos! ¿Qué tal están?"},{author:u,text:"Muy bien, ¡gracias!"},{author:c,text:"Yo también muy bien"},{author:n,text:"El robot habla con un acento un tanto raro..."},{author:u,text:"Es que soy del norte"}]);o.onclick=function(){l.iniciar("s")},r.onclick=function(){l.iniciar("w")};
},{"./profile.js":"JCXk","./conversation.js":"ftND"}]},{},["QvaY"], null)
//# sourceMappingURL=/dsi-p3-synth-alu0100944723/js.2aef3e82.js.map