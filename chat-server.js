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
    //when client leaves
    socket.on('end', function(){
        var message =  clientName + ' left this chat\n';
//log it to the server output
process.stdout.write(message);
//Remove client from socket array
removeSocket(socket);
//notify all clients
broadcast(clientName, message);
    });
    //when socket gets errors 
    socket.on('error',function(error){
        console.log('Socket got problems: ', error.message);
    });




});

//broadcast to others, excluding the sender
function broadcast(from, message){
    //if there are no sockets, then don't broadcast any messages
    
}

//essa função net.createServer(function(socket){...}) cria um servidor tcp
//e chama a função de callback toda vez que um cliente se conecta.
//o parâmetro socket é um objeto que representa essa conexão específica entre o servidor e um cliente.
