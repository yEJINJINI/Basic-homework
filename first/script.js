//문제1.
const clickedBox = document.querySelectorAll(".box");

document.querySelector("#container").addEventListener("click", (event) => {
  for (let i = 0; i < 3; i++) {
    if (event.target === clickedBox[i]) {
      clickedBox[i].classList.add("clicked");
    }
  }
});

//문제2.
function getSquare(number) {
  // number의 제곱을 계산하여 반환하는 함수를 작성하세요.
  return number ** 2;
}
const result = getSquare(5);
console.log(result); // 25 출력 (5의 제곱)
