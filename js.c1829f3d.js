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
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=t(e))){var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,u=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==o.return||o.return()}finally{if(u)throw a}}}}function t(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(){function t(e){n(this,t),this.text=e}return a(t,[{key:"sintetizar",value:function(e,t){var r=this,n=new SpeechSynthesisUtterance;n.lang=e.author.lang,n.text=e.text,n.rate=e.author.parametros.rate,n.pitch=e.author.parametros.pitch;var o=document.createElement("p"),a=document.createElement("div"),i=document.createElement("img");if("s"==t)n.onstart=function(){r.frase(e)};else if("w"==t){var u=0;n.onboundary=function(t){r.wordToWord(e,u,o,a,i),u++}}speechSynthesis.speak(n)}},{key:"frase",value:function(e){var t=document.querySelector("#box"),r=document.createElement("div");r.className="chat";var n=document.createElement("p"),o=document.createElement("img");n.textContent=e.author.nombre+": "+e.text,n.style="color:"+e.author.parametros.color,o.src=e.author.img,t.appendChild(r),r.appendChild(o),r.appendChild(n)}},{key:"wordToWord",value:function(e,t,r,n,o){var a=e.text.split(" "),i=document.querySelector("#box");n.className="chat",r.textContent=r.textContent+" "+a[t],r.style="color:"+e.author.parametros.color,o.src=e.author.img,i.appendChild(n),n.appendChild(o),n.appendChild(r)}},{key:"letterToLetter",value:function(e){}},{key:"iniciar",value:function(t){var r,n=e(this.text);try{for(n.s();!(r=n.n()).done;){var o=r.value;this.sintetizar(o,t)}}catch(a){n.e(a)}finally{n.f()}}}]),t}(),u=i;exports.default=u;
},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=a(require("./profile.js")),t=a(require("./conversation.js"));function a(e){return e&&e.__esModule?e:{default:e}}var o=document.querySelector("#Frase"),r=document.querySelector("#Palabra"),n=new e.default("Manz",{lang:"es",rate:2,pitch:1,color:"#ff0000"}),u=new e.default("Robot",{lang:"en",rate:1,pitch:1,color:"blue"}),c=new e.default("Breadman",{lang:"es",rate:2,pitch:3,color:"green"}),l=new t.default([{author:n,text:"¡Hola a todos! ¿Qué tal están?"},{author:u,text:"Muy bien, ¡gracias!"},{author:c,text:"Yo también muy bien"},{author:n,text:"El robot habla con un acento un tanto raro..."},{author:u,text:"Es que soy del norte"}]);o.onclick=function(){l.iniciar("s")},r.onclick=function(){l.iniciar("w")};
},{"./profile.js":"JCXk","./conversation.js":"ftND"}]},{},["QvaY"], null)
//# sourceMappingURL=/dsi-p3-synth-alu0100944723/js.c1829f3d.js.map