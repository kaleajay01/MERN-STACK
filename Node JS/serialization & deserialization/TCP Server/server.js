const net = require("net");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const server = net.createServer((socket) => {

    console.log("Client connected");
    socket.on("data", (data) => {
        const message = data.toString();

        rl.question("Type reply to client: ", (answer) => {
            socket.write(answer + "\n");
        });

        console.log("\nClient says:", message);
        const reply = "Hello Client, \nServer Received: " + message;
        socket.write(reply);
    });

    socket.on("end", () => {
        console.log("Client disconnected");
    });
});

server.listen(5999, () => {
    console.log("Server started on port 5999");
});