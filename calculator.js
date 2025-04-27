//this is basic functionality using function to calculate based operation system
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output:process.stdout
})

 function calculate(num1, num2, op){
    switch(op){
        case "+":
            return num1 + num2;
          
        case "-":
            return num1 - num2
        case "*":
            return num1* num2
        case "/":
            return   num2 !==0 ? num1/num2 :"cannt divide by zero"
        case "%":
            return num1 % num2
        default :
         return "Invalid numbers"
             
    }
}

rl.question("Enter first number: ",(firstNumber)=>{
    rl.question("Enter operator: ",(operator)=>{
        rl.question("Enter second number: ", (secondNumber)=>{
            const numb1 = parseInt(firstNumber);
            const numb2 = parseInt(secondNumber)

            if(isNaN(numb1) || isNaN(numb2)){
                console.log("invalid numbers");
       
            }
            else{
                const result = calculate(numb1,numb2,operator)
                console.log("the result of two numbers is", result)
            }
            rl.close();
        })
    })
})