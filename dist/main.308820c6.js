parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),a="\n/*你好，我叫林铮\n*接下来我整一个太极\n*先设置一个外观\n*/\n#div1{\n    width:200px;\n    height:200px;\n    box-shadow:0 0 3px rgba(0,0,0,0.5);\n    border-radius:50%\n}\n/*设置圆形的背景*/\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/*设置2个阴阳*/\n#div1::after{\n    width:100px;\n    height:100px;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n    top:0;\n    transform:translateX(50%);\n    border-radius:50%;\n}\n#div1::before{\n    width:100px;\n    height:100px;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,252,252,1) 100%);\n    bottom:0;\n    transform:translateX(50%);\n    border-radius:50%;\n}\n",e="",t=0,i=function i(){setTimeout(function(){"\n"===a[t]?e+="<br>":" "===a[t]?e+="&nbsp;":e+=a[t],n.innerHTML=e,r.innerHTML=a.substring(0,t),window.scroll(0,9999),n.scroll(0,9999),t<a.length-1&&(t+=1,i())},0)};i();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.308820c6.js.map