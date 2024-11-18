// 약수의 합 
let prompt = require('prompt-sync')(); // prompt-sync 설치 필요

let n

while(true){
  n = Number(prompt("값을 입력하세요:"))
  if ( n>=0 && n<=3000 ){
    console.log("값이 올바르게 입력 되었습니다")
    break
  }
  else 
  {
    console.log("값이 올바르지 않습니다.")
    continue
  }
}

let sum = 0 
let make = (a) => {
    for(let i = 1 ; i<=a ; i++){
        if(a%i == 0){
            sum += i
        }
        else
        {
            continue
        }
    }
    return sum
}
let reuslt = make(n)

console.log(`약수의 모든값은 ${reuslt}`)