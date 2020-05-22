#!/usr/bin/env node
// const fetch = require('node-fetch');

// const url="http://quotes.stormconsultancy.co.uk/random.json";

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(`"${data.quote}"`);
//     console.log(`- ${data.author}`);
//   });


var unirest = require("unirest");

var req = unirest("GET", "https://quotes21.p.rapidapi.com/quote");

req.headers({
	"x-rapidapi-host": "quotes21.p.rapidapi.com",
	"x-rapidapi-key": "7ed07217e3msh6a74043b505016fp13952ajsnecaa1e97b458",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});