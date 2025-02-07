//vamos criar um servidor tcp para um chat.
//carregaremos o modulo net.
var net = require('net');
//contador para teste
var count = 1;
//Listener do servidor tcp quando algum cliente conectar.
var server= net.createServer(function (socket){
    //mensagem de log quando algum cliente conectar
    console.log("Cliente conectou do IP: " + socket.remoteAddress);
    //escreve a resposta e termina a conexão do cliente.
    socket.end("Hello world TCP: "+(count++) + "\n");

});
//inicia o servidor
server.listen(3000, "127.0.0.1");
//mensagem ao iniciar o servidor.
console.log("Servidor TCP iniciado...");

//como o protocolo tcp é de baixo nível, a gente precisa pegar e escrever um código cliente quee se conecte nesse socket.
//socket é um ponto de comunicação entre dois dispositivos.
