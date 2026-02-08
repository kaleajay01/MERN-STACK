const net = require("net");
const client = new net.Socket();
client.connect(5999, "localhost", () => {
    console.log("Connected to server");
    client.write("I'm client");
});
client.on("data", (data) => {
    console.log("Server says:", data.toString());
    client.end();
});
client.on("close", () => {
    console.log("Connection closed");
});