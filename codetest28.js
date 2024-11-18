import readlinesync from "readline-sync"

// 내적

let a
let b
while(true){
a = readlinesync.question("원하는 숫자를 넣으세요:").split(",").map(value=> Number(value))
b = readlinesync.question("원하는 숫자를 넣으세요:").split(",").map(value=> Number(value))
if (a.length>=1 && b.length>=1 && a.length<=1000 && b.length<=1000 
    && a.every(value=> value>=-1000 && value<=1000) && b.every(value=> value>=-1000 && value<=1000)
){
    console.log("값이 올바르게 입력 되었습니다")
    break
  }
  else 
  {
    console.log("값이 올바르지 않습니다.")
    continue
  }
}

console.log(a)
console.log(b)

let result = 0
function solution() {
    for(let i=0; i<a.length; i++){
        result += a[i]*b[i]
    }
return result
}

let num = solution()
console.log(num)