//팀 프로젝트 리포지토리 연결

//팀원 A, B명
//A가 리포지토리 개설하고
//B가 이미 만들어진 리포지토리 연결

//!1.B가 A의 리포지토리에 접근
//-A가 B(다른 팀원)의 GitHub 사용자 이름(user.name)
//-A가 리포지토리의 Settings에 이동 > 왼쪽 사이드바 Collaborators > Manage access 옵션을 선택
//-'Invited a collaborator' 버튼을 클릭 > B(다른 팀원)을 초대
//-B(다른 팀원)가 이메일로 받은 초대를 수락

//!B(다른 팀원)가 리포지토리 복제
//-해당 리포지토리 페이지 이동 > 'Code'버튼 클릭 > HTTPS url 복사
//-각자의 컴퓨터에서 Git Bash를 사용하여 리포지토리 복제
//git clone 복사한 URL

//-각자의 로컬(개인 컴퓨터) 리포지토리에서 작업을 진행

//!3.각자 브랜치 개설
//git branch pjh(이니셜)
//git checkout pjh(이니셜)

//!작업 후 GitHub 업로드 과정
//git status
//git pull origin main

//연습용 파일 example.txt 파일 > 깃 연결

//git add .
//git commit -m "20240116 pjh(이니셜)"

//git pull origin main
//:업데이트 된 코드는 main 브랜치에서 가져오기

//git push origin pjh(이니셜)
//:업데이트 할 코드는 개인 브랜치에서 보내기

//----------

//기존 파일
//src > views > login 6번 째 줄

//A 작업
//src > views > login 작업
//const a; -- 7번째 줄

//B 작업
//src > view > login 작업
//const b; -- 8번째 줄

//!절대 같은 파일 여러명이 작업 금지
