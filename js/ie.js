const ver = navigator.userAgent; // 브라우저의 정보를 변수에 저장
console.log(ver);

const isIE = /tridient/i.test(ver); // 브라우저의 정보를 저장한 변수에 /탐색할 문자/가 포함되어 있는지 확인하여 있으면 true, 없으면 false를 변수에 저장 - 익스플로러 브라우저인지 확인
console.log(isIE);

if(isIE) { //true면
    alert("익스플로러 브라우저로 접속하셨네요. 이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해 주세요.");
}