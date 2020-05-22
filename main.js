#!/usr/bin/env node
const fetch = require('node-fetch');

const url="http://quotes.stormconsultancy.co.uk/random.json";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(`"${data.quote}"`);
    console.log(`- ${data.author}`);
  });


