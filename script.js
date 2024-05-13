// 문제2)
document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".title").textContent = "제목아니다";
});

// 문제3)
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(1, 5));

// 문제4)
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "짝수입니다.";
  } else {
    return "홀수입니다.";
  }
}
console.log(isEvenOrOdd(1));
console.log(isEvenOrOdd(2));

//문제5)
let name = "병수";
let age = 20;
console.log("이름: " + name);
console.log("나이: " + age);
