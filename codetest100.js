// 시저 암호
let prompt = require('prompt-sync')(); // prompt-sync 설치 필요

let num1 // 문자열
let num2 // n


while(true){
    num1 =prompt("값을 입력하세요:") 
    num2 =Number(prompt("값을 입력하세요:"))
    if (num2 >= 1 && num1.length >= 1 && num2 <= 25 && num1.length <=8000)
    {
        break
    }
    else
    {
        console.log("값을 범위에 맞게 입력하세요")
        continue
    }
}



function solution(num1, num2) {
  let result = '';

  for (let i = 0; i < num1.length; i++) {
      let char = num1[i];
      if (char >= 'A' && char <= 'Z') {
          let newChar = String.fromCharCode((char.charCodeAt(0) - 65 + num2) % 26 + 65);
          result += newChar;
      } else if (char >= 'a' && char <= 'z') {
          let newChar = String.fromCharCode((char.charCodeAt(0) - 97 + num2) % 26 + 97);
          result += newChar;
      } else {
          result += char;
      }
  }

  return result;
}

console.log(solution(num1,num2))