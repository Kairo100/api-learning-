// this is using CoinGecko API to change cyto prices


// importing axios and readline module
const axios = require('axios');
const readline = require('readline');


const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})



async function getCyto(price) {
    // const apikey ='CG-y6sG52uhR8FDvwEXLq4aioNp';  in the free version i dont need one api key for coingecko
    // const url = `https://pro-api.coingecko.com/api/v3/ping?${price}key=${apikey}`;
    
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${price}&vs_currencies=usd`;


    try{
        const response = await axios.get(url);
        const cypto = response.data[price].usd;
        //charAt retrives the first charcter of bitcoin
        //.slice returing the rest of strings starting from second character
        console.log(`${price.charAt(0).toUpperCase()+ price.slice(1)} Price: $${cypto}`)
    }
    catch(error){
            console.log("error fetching cryptocurrency price ", error);
    }
}

rl.question("Enter the cryptocurrency name (e.g., bitcoin, ethereum):", (price)=>{
    getCyto(price);
    rl.close();
})