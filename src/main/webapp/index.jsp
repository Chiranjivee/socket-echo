<html>
<head>
    <title>Web socket JavaScript Echo Client</title>
</head>
<body>
    <h1>Echo Server</h1>
    <div>
        <form action="">
            <input onclick="send_echo()" value="Press to send" type="button">
            <input id="textID" name="message" value="Hello web sockets" type="text">
            <br />
        </form>
    </div>
    <div id="output"></div>
    <script src="script.js"></script>
</body>
</html>
