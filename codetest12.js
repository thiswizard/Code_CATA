// 나머지가 1이 되는 수 찾기
let prompt = require('prompt-sync')(); // prompt-sync 설치 필요

let n

while(true){
  n = Number(prompt("값을 입력하세요:"))
  if ( n>=3 && n<=1000000 ){
    console.log("값이 올바르게 입력 되었습니다")
    break
  }
  else 
  {
    console.log("값이 올바르지 않습니다.")
    continue
  }
}

let x = 0
let make  = (a) => {
    for(let i =0 ; i<a ; i++){
        if(a%i == 1){
            x = i
            break
        }
        else {
            continue
        }
    }
    return x
}

console.log(`나머지가 1이 되는 수는 ${make(n)}`)