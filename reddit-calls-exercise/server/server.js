const fs = require("fs");
const path = require("path");


const chirps = [
    {
        author: "dog",
        body: "woof"
    },
    {
        author: "cat",
        body: "meow"
    },
    {
        author: "cheetah",
        body: "roar"
    },
    {
        author: "bear",
        body: "rawr"
    },
    {
        author: "horse",
        body: "neigh"
    }
];

let filePath = path.join(__dirname, "../chirps.json");
console.log(filePath);

fs.appendFile(filePath, JSON.stringify(chirps, null, 1), (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Successfully wrote to ${filePath}`);
    }
})

fs.readFile(filePath, (err, contents) => {
    if (err) {
        console.error(err);
    } else {
        console.log(contents.toString());
    }
})