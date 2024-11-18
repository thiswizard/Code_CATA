let prompt = require('prompt-sync')();

let num1 
let num2 


while(true){

    num1 =Number(prompt("값을 입력하세요:")) 
    num2 =Number(prompt("값을 입력하세요:"))
    if (num2 >= 0 && num1 >= 0 && num2 <= 100 && num1 <=100)
    {
        break
    }
    else
    {
        console.log("값을 범위에 맞게 입력하세요")
        continue
    }
}

let soltuion = (a,b) => a*b

console.log(soltuion(num1,num2))