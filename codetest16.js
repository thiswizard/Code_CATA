// 정수 제곱근 판별 
let prompt = require('prompt-sync')(); // prompt-sync 설치 필요

let n


while(true){
  n = Number(prompt("값을 입력하세요:"))
  if ( n>=1 && n<=50000000000000 ){
    console.log("값이 올바르게 입력 되었습니다")
    break
  }
  else 
  {
    console.log("값이 올바르지 않습니다.")
    continue
  }
}

let make = (n) => {
for (let i=1; i<n; i++){
    if(Math.pow(i,2) == n){
        return Math.pow(i+1,2)
    }
}
return -1
}

console.log(make(n))

