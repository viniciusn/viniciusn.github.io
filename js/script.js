function notificar(a,b){"use strict";var c={body:b,icon:"images/VN icon-black.png"},d=new Notification(a,c);d.onclose=function(){console.log("notificação fechada pelo usuário")},d.onclick=function(){alert("Obrigado por ler nossas notificações")}}!function(){"use strict";function a(){var a=prompt("Digite o título"),b=prompt("Digite a mensagem");""!==a&&null!==a&&""!==b&&null!==b&&notificar(a,b)}navigator.geolocation&&console.log("true"),navigator.serviceWorker&&console.log("true"),window.Notification?"granted"===Notification.permission?Notification.requestPermission(function(a){"granted"===a&&console.log("permission granted")}):"denied"===Notification.permission?console.log("notificação negada"):"default"===Notification.permission&&Notification.requestPermission(function(a){console.log(Notification.permission)}):console.log("false");var b=document.querySelector(".button");b.addEventListener("click",a,!1)}();