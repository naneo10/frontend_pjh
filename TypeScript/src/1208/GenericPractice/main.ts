//타입 속성 정의
//:Task 타입 정의
//:제네릭 타입 T를 사용하여 지정
type Task<T> = {
  id: number;
  content: T;
};

//TaskManager 클래스 정의
//:T타입의 할 일을 관리
class TaskManager<T> {
  //?맴버 변수 지정 : private 설정
  //할 일 목록을 지정하는 배열(tasks)
  //다음 할 일의 고유 ID(nextId)
  //?생성자
  //초기 할 일 목록은 비어 있음
  //ID는 1부터 시작
  //?할 일 추가 함수(push)
  //?할 일 제거 함수(filter)
  //?할 일 목록을 화면에 렌더링하는 함수(forEach)
}

//웹 페이지가 로드될 때 실행되는 함수
