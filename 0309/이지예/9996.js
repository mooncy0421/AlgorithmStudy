const fs = require('fs');//파일을 읽어들이는데,
//숫자 n, 검사할 패턴, 그리고 배열을 하나의 배열로 묶어서 생성할거다.
//toString : 문자타입으로 변경
//trim : 문자열 양 끝의 공백 제거
const [n,pattern, ...arr] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
//검사할 패턴을 *을 기준으로 양 옆을 나눈다.
const [head, tail] = pattern.split('*');


const answer = [];
//검사할 배열을 하나씩 for문 돌린다.
arr.forEach(v=>{
    //현재 문자열을 *왼쪽 길이만큼 잘라서 front 변수로 초기화한다.
    const front = v.substring(0,head.length);
    //전체 길이에서 *기준 오른쪽 문자열의 길이만큼 뺀 인덱스부터 마지막까지 문자열을 잘라서 back변수로 초기화한다.
    const back = v.substring(v.length - tail.length);
    //문자열의 길이가 패턴보다 짧으면 안된다.
    if(v.length<head.length+tail.length){
        answer.push('NE');
    //검사할 문자열에서 잘라낸 front랑 back이 패턴이랑 같은 경우
    }else if(head == front&&tail==back){
        answer.push('DA');
    //검사할 문자열이 패턴보다는 길지만 front나 back이 패턴과 다른 경우
    }else{
        answer.push('NE');
    }
})

console.log(answer.join('\n'));