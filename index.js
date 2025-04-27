//import axios and readline
//readline is nodejs module that allows interact with user via command line

const axios = require('axios');
const readline = require('readline');

//then create interface for input and output of readline
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})