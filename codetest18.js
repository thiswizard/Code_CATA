// 하샤드 수
let prompt = require('prompt-sync')(); // prompt-sync 설치 필요

let n


while(true){
  n = Number(prompt("값을 입력하세요:"))
  if ( n>=1 && n<=10000){
    console.log("값이 올바르게 입력 되었습니다")
    break
  }
  else 
  {
    console.log("값이 올바르지 않습니다.")
    continue
  }
}


let change = n.toString().split("").map(num => Number(num)) // [1,8]
let allsum = change.reduce((a,b) => a+b , 0);

let solution = (n,allsum) => {
    if(n % allsum == 0 ) {
        console.log(`${n}값은 하샤드 수 입니다`)
        console.log("true")
    }
    else{
        console.log(`${n}값은 하샤드 수 가 아닙니다`)
        console.log("flase")
    }
}


console.log(solution(n,allsum))


