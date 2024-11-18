let prompt = require('prompt-sync')();

let num1 
let result


while(true){

    num1 =Number(prompt("값을 입력하세요:")) 
    if (num1 >= 0 && num1 <= 1000)
    {
        break
    }
    else
    {
        console.log("값을 범위에 맞게 입력하세요")
        continue
    }
}

let soltuion = (a) => {
    let sum = 0
    for (let i=1; i<=a; i++){
        if ((i%2) == 0){
           sum += i 
        }
        else {
            continue
        }
    }
    return sum
}
result = soltuion(num1)


console.log(`짝수의 합은 ${result} 입니다`)


