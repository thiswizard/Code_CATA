import readlinesync from "readline-sync"

// 없는 숫자 더하기



let absolutes
while(true){
absolutes = readlinesync.question("원하는 숫자를 넣으세요:").split(",").map(value=> Number(value))
if (absolutes.length>=1 && absolutes.length<=9 
    && absolutes.every(value => value>=0 && value<=9)){
    console.log("값이 올바르게 입력 되었습니다")
    absolutes = [...new Set(absolutes)]
    break
  }
  else 
  {
    console.log("값이 올바르지 않습니다.")
    continue
  }
}

console.log(absolutes)

let hard = new Set([...Array(10).keys()]) // [0~9]
let reuslt = 0

function solution() {
    for(let i=0; i<absolutes.length; i++){
        if(!hard.has(absolutes[i])){
            reuslt += absolutes[i]
        }
    }
    return reuslt
}

let number = solution()
console.log(number)

