
let clock = document.querySelector("#clock");

setInterval(function() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000); //fetches the time every 1000 ms (1 s)

