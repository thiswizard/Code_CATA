let prompt = require('prompt-sync')();

let num1 
let num2 


while(true){

    num1 =Number(prompt("값을 입력하세요:")) 
    num2 =Number(prompt("값을 입력하세요:"))
    if (num2 >= 0 && num1 >= 0 && num2 <= 10000 && num1 <=10000)
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
    if (a == b)
        {return 1}
    else
        {return -1} 
}

console.log(soltuion(num1,num2))

// 두 개의 값이 같으면 1 다르면 -1 return