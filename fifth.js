//fourth 폴더의
//문제8)
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};
//1.2.
localStorage.setItem("user", JSON.stringify(user));
const currentUser = JSON.parse(localStorage.getItem("user"));
console.log("localStorage=> ", currentUser);

//3.
localStorage.setItem("user", JSON.stringify({ ...user, 나이: 30 }));
const modifyAge = JSON.parse(localStorage.getItem("user"));
console.log(modifyAge);
//4.
localStorage.removeItem("user");
console.log(localStorage.getItem("user"));

//문제1)
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => console.log(data));
