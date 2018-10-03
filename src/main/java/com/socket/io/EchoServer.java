package com.socket.io;

import javax.websocket.OnMessage;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/echo")
public class EchoServer {
    @OnMessage
    public String echo(String echoMessage) {
        return "I got your message '" + echoMessage + "' " +
                ". So, I am sending it back.";
    }
}
