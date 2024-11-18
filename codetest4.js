let prompt = require('prompt-sync')();

let age  
let year = Number(new Date().getFullYear())


while(true){

    age = Number(prompt("값을 입력하세요:")) 
    if (age >= 0 && age <=100)
    {
        break
    }
    else
    {
        console.log("값을 범위에 맞게 입력하세요")
        continue
    }
}

let soltuion = (age , year) =>{ 
    let result = year - age
    console.log(`${year}년 기준 ${age} 이므로 ${result}년 생입니다`)
}

console.log(soltuion(age,year))
