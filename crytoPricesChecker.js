// this is using CoinGecko API to change cyto prices


// importing axios and readline module
const axios = require('axios');
const readline = require('readline');

// making interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});


async function getCyto(price) {
    const apikey ='CG-y6sG52uhR8FDvwEXLq4aioNp';
    const url = `https://pro-api.coingecko.com/api/v3/ping?${price}key=${apikey}`;
    
}
