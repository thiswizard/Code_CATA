import readlinesync from "readline-sync"

// 제일 작은 수 제거하기


let arr
while(true){
arr = readlinesync.question("원하는 숫자를 넣으세요:").split(",").map(value=> Number(value))
if(arr.length>=1){
    console.log("값이 올바르게 입력 되었습니다")
    break
  }
  else 
  {
    console.log("값이 올바르지 않습니다.")
    continue
  }
}
console.log(arr)

let MIN
function solution() {
    if(arr.length == 1 ){
        return -1
    }
    else{
    MIN = Math.min(...arr)
    return MIN
    }
}

let number = solution()

console.log(number)


