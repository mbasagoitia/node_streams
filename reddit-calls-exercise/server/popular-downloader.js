const fetch = require("isomorphic-fetch");
const fs = require("fs");
const path = require("path");
const { title } = require("process");


fetch("https://reddit.com/r/programmingHumor.json")
.then((res) => res.text())
.then((data) => {
    JSON.parse(data).data.children.forEach((child) => {
        if (child.data.url.endsWith("jpg") || child.data.url.endsWith("gif") || child.data.url.endsWith("png")) {
            fs.writeFile(`${path.join(__dirname, "../downloads")}/${child.data.id}.json`, JSON.stringify({
                author: child.data.author,
                title: child.data.title,
                url: child.data.url
            }, null, 1), (err) => {
                if (err) {
                    console.error(err);
                }
            })
        } 
    })
})