const path = require("path");
const fs = require("fs");
const fetch = require("isomorphic-fetch");

const filePath = path.join(__dirname, "popular-articles.json");

fetch("https://reddit.com/r/programmingHumor.json")
.then((res) => res.text())
.then((data) => {
    const items = [];
    JSON.parse(data).data.children.forEach((child) => {
        items.push({
            author: child.data.author,
            title: child.data.title,
            url: child.data.url
        });
    });
        fs.writeFile(filePath, JSON.stringify(items, null, 1), (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`Successfully wrote to ${filePath}`);
            }
    });
})
