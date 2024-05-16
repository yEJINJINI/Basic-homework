//문제 3. 스크롤
window.addEventListener("scroll", () => {
  console.log(scrollY);
});

//문제 4.
for (let i = 1; i < 11; i++) {
  console.log(i);
}

//문제 5.
for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//문제 6.
setTimeout(() => {
  console.log("3초 후에 출력되는 텍스트입니다.");
}, 3000);
