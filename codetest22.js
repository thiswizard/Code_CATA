import readlinesync from "readline-sync"

// 음양 더하기



let absolutes
let signs
while(true){
absolutes = readlinesync.question("원하는 숫자를 넣으세요:").split(",").map(value=> Number(value))
signs = readlinesync.question("원하는 불리언 배열을 입력하세요:").split(",")
if (absolutes.length>=1 && absolutes.length<=1000 && 
    absolutes.every(value => value>=1 && value<=1000)
    && signs.length == absolutes.length){
    console.log("값이 올바르게 입력 되었습니다")
    break
  }
  else 
  {
    console.log("값이 올바르지 않습니다.")
    continue
  }
}

let result = 0
function solution(){
for(let i=0;i<absolutes.length;i++){
     if(signs[i] == "true"){
        absolutes[i] = +absolutes[i]   
     }
     else{
        absolutes[i] = -absolutes[i]
     }
result += absolutes[i]
}
return result
}


let number = solution()
console.log(number)



