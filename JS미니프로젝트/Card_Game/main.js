document.addEventListener("DOMContentLoaded", () => {
  //!HTMl 요소를 선택
  const cardContainer = document.getElementById("card-container");
  const startButton = document.getElementById("start-button");
  const resetButton = document.getElementById("reset-button");
  const completedButton = document.getElementById("completed-button");

  //!색상 배열을 정의
  const colors = ["black", "red", "yellow", "pink", "orange", "brown"];

  //!colors 배열의 색상들을 복제하여 새로운 배열 cardColors를 생성
  //:...연산자를 사용하여 모든 요소를 새 배열에 두 배 포함되도록 복사
  let cardColors = [...colors, ...colors];

  //!게임을 초기화하는 함수 정의
  function initializeGame() {
    //?cardColors 배열을 섞기
    shuffle(cardColors);

    //?cardContainer의 내부 HTML을 비움
    cardContainer.innerHTML = "";

    //?12개의 카드를 생성하는 for 반복문
    for (let i = 0; i < 12; i++) {
      //cardContainer에 HTML 추가(12개의 카드)
      cardContainer.innerHTML += `
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <img src="./images/dog-3389729_640.jpg" alt="카드의 앞면" />
            </div>
            <divc class="card-back" style="background-color: ${cardColors[i]}"></div>
          </div>
        </div>
      `;
    }
    //카드에 이벤트 리스너를 추가하는 함수 호출
    //:카드를 클릭했을 때 동작을 정의
    addCardEventListeners();
  }

  //!모든 카드 요소에 클릭 이벤트 리스너를 추가하는 함수
  function addCardEventlistener() {}
  initializeGame();
});

//배열의 요소를 무작위로 섞는 커스텀 함수
function shuffle() {}
