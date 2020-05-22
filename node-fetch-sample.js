#!/usr/bin/env node
const fetch = require('node-fetch');

// TODO: Insert url
const url="";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(`"${data.quote}"`);
    console.log(`- ${data.author}`);
  });
