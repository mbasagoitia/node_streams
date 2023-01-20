const fs = require("fs");
const { createServer } = require("http");
const path = require("path");
const fetch = require("isomorphic-fetch");

//part 1

createServer((req, res) => {
  let status = 404;
  let file = "not-found.html";

  if (req.url == "/" && req.method == "GET") {
    status = 200;
    file = "index.html";
  } 

  res.writeHead(status, { "content-type": "text/html" });
  let readSrc = fs.createReadStream(path.join(__dirname, file));
  readSrc.pipe(res);

}).listen(3000, () => {
  console.log("Server listening on port 3000");
});

//part 2

let wStream = fs.createWriteStream(path.join(__dirname, "writeStream.json"));

fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
.then((res) => res.text())
.then((data) => wStream.write(data))
.catch((err) => console.error(err));

