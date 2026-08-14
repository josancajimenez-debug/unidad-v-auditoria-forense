"use strict";

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.PORT || 4173);

http.createServer((request, response) => {
  const requestPath = request.url === "/" ? "index.html" : decodeURIComponent(request.url.slice(1));
  const filePath = path.resolve(root, requestPath);

  if (!filePath.startsWith(`${root}${path.sep}`) && filePath !== path.join(root, "index.html")) {
    response.writeHead(403).end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404).end("Not found");
      return;
    }
    response.setHeader(
      "Content-Type",
      filePath.endsWith(".html") ? "text/html; charset=utf-8" : "text/plain; charset=utf-8"
    );
    response.end(data);
  });
}).listen(port, "127.0.0.1", () => {
  process.stdout.write(`Servidor de prueba: http://127.0.0.1:${port}\n`);
});
