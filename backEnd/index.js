import { createServer } from "http";
import { sortUsers } from "./parteA/ParteA.js";



const server = createServer(async (req, res) => {
    
    const data = await sortUsers();
    const headers = {
        'Content-Type': 'application-json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Max-Age': 2592000,
      };    

    res.writeHead(200, headers);
    res.end(JSON.stringify(data));
});

server.listen("8020", "127.0.0.1", () => console.log("Server running"));