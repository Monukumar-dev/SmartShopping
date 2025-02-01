// All required imports goes in here
const path = require('path');
const express = require('express');

const app = express();

const env = process.env.NODE_ENV;
const port = (env === 'dev') ? 3000 : 80;

console.log("Server running in " + env);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, 'build', 'index.html'),{env:env});
});


app.listen(port);
console.log("server started on port " + port);