parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"XNUl":[function(require,module,exports) {
var n=document.querySelector("button");n.addEventListener("click",function(){console.log("order confirmed")});var e=function(){db.collection("clientsEvent").get().then(function(n){o(n.docs)})};e();var t=document.querySelector(".bookings"),o=function(n){var e="";n.forEach(function(n){var t=n.data(),o="\n        <div>\n        <ul>\n            <li>Name: ".concat(t.fullName,"</li>\n            <li>Date of birth: ").concat(t.dob,"</li>\n            <li>Email Id: ").concat(t.email,"</li>\n            <li>Date of event: ").concat(t.eventDate,"</li>\n            <li>Type of event: ").concat(t.eventType,"</li>\n            <li>Location of event: ").concat(t.eventLocation,"</li>\n            <li>Phone number: ").concat(t.phoneNumber,"</li>\n            <li>Special request: ").concat(t.eventDescription,"</li>\n        </ul> \n        </div>\n        <br/>\n        <button>Confirm order</button>\n        <br/>\n        ");e+=o}),t.innerHTML=e};
},{}]},{},["XNUl"], null)
//# sourceMappingURL=/eventBookings.596bcb27.js.map