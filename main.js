#!/usr/bin/env node
const fetch = require('node-fetch');


// var fs = require('fs');
// var path = require('path');

// fs.readFile(path.resolve(__dirname, 'quotes.txt'), function (err, data) {
//   var quotes = data.toString().split('\n');
//   var quote = quotes[Math.floor(Math.random() * quotes.length)];
//   console.log(quote);
// });
url="http://quotes.stormconsultancy.co.uk/random.json"

console.log('hey');


() => {};

fetch(url) // Call the fetch function passing the url of the API as a parameter
.then(function(response) {
    // Your code for handling the data you get from the API
    console.log(response.url)
    return response.json;
})
.then(function(data) {
  console.log(data);
})
.catch(function() {
    // This is where you run code if the server returns any errors
});

console.log('test');

const test = 5;