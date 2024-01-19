//html, js 파일
//html id 속성이 myButton
//<button id="myButton">Click me</button>

//let myButtonElement = document.getElementById("myButton");

//myButtonElement.addEventLister("click", btn)

function btn() {
  console.log("버튼이 클릭되었습니다.");
  myButtonElement.classList.add("on");
  myButtonElement.classList.remove("on");
}
