var echo_websocket;
var output;

function init() {
    output = document.getElementById("output")
};

function send_echo() {
    var wsUri = "ws://localhost:8080/socketecho/echo";
    writeToScreen("Connecting to " + wsUri);
    echo_websocket = new WebSocket(wsUri);
    echo_websocket.onopen = function (evt) {
        writeToScreen("Connected!");
        var textID = document.getElementById("textID");
        doSend(textID.value);
    };

    echo_websocket.onmessage = function (ev) {
        writeToScreen("Received message: " + ev.data);
        echo_websocket.close();
    };

    echo_websocket.onerror = function (ev) {
      writeToScreen('<span style="color: red;"> ERROR: </span>' + ev.data);
      echo_websocket.close();
    };
};

function doSend(message) {
    echo_websocket.send(message);
    writeToScreen(message);
};

function writeToScreen(message) {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
};

window.addEventListener("load", init, false);