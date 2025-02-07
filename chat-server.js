//aqui eu irei criar um servidor de chat com o tcp.
var net = require('net');
var sockets = [];
var port = 8080;
var guestId = 0; //guest é hóspede.
var server = net.createServer(function (socket) {
    //increment
    guestId++;
    socket.nickname = "Guest" + guestId;
    var clientName = socket.nickname;
    sockets.push(socket);
    //log it to the server output //significa basicamente registrando-o na saída do servidor.
    console.log(clientName + ' joined this chat.');
    //Welcome user to the socket
    socket.write("Welcome to telnet chat!\n");
    //Broadcast to others excluding this socket
    //broadcast significa que ele vai mandar esses dados para todos os usuários que estão usando o servidor.
    broadcast(clientName, clientName + ' joined this chat.\n');
    //When client sends data
    socket.on('data', function (data) {
        var message = clientName + '>' + data.toString();
        broadcast(clientName, message);
        //log it to the server output
        // registre-o na saída do servidor
        process.stdout.write(message);
    });
    



})