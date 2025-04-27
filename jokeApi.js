//this file is using jokeApi to generator joke generator app

const axios = require('axios');
const readline = require('readline');

//build interface
const rl = readline.createInterface({
    input:process.stdin,
    input:process.stdout
})

// function to fetch data
async function getJoke() {
    const url = 'https://v2.jokeapi.dev/joke/Any';
    
   try{
     
    const response = await axios.get(url);

    if(response.data.type=== "single"){
        console.log(`Joke:${response.data.joke}`);
    }
    else if(response.data.type=== "twopart"){
        console.log(`Joke:${response.data.setup}`);
        console.log(`Delivery:${response.data.delivery}`);
    }
   }
   catch(error){
    console.log('There is error fetching data from jokeApi', error);
   }
}

rl.question("Would you like to hear a joke? (yes/no): ", (answer)=>{
    if(answer.toLocaleLowerCase=== "yes"){
        getJoke();
    }
    else{
        console.log('Okay, maybe next time!');
    }
    rl.close();
})