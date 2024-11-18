let prompt = require('prompt-sync')();

let num1 
let num2 


while(true){

    num1 =Number(prompt("값을 입력하세요:")) 
    num2 =Number(prompt("값을 입력하세요:"))
    if (num2 >= -50000 && num1 >= -50000 && num2 <= 50000 && num1 <= 50000)
    {
        break
    }
    else
    {
        console.log("값을 범위에 맞게 입력하세요")
        continue
    }
}

let soltuion = (a,b) => {
    let result = a+b
    return (`${a}+${b}=${result}`)
}

console.log(soltuion(num1,num2))

