import React, { ChangeEvent, useState } from 'react'

//!화살표 함수
const MyFunction = (...args: string[]) => {
  console.log(args);
}

//!구조 분해 할당 & 스프레드 연산자

type User = {
  name: string;
  age: number;
  email: string;
}

//*arguments가 지원이 되지 않음
//rest 파라미터(...args)
//:여러 개의 인자를 배열로 전달 받는 방법
export default function ReactGrammer() {
//?불변성
//:상태를 직접 수정 x
//:상태 변화가 피요할 때 새로운 상태를 생성하여 반환
  const [user, setUser] = useState<User>({
    name: 'las',
    age: 27,
    email: 'qwert@naver.com'
  });

  const { name, age, email } = user;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setUser({...user, [속성명]: 속성값});
    setUser({...user, [e.target.name]: e.target.value});
  }

  return(
    <>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <p>이메일: {email}</p>
      <input 
        type="text" 
        name="name" 
        value={name} 
        onChange={handleChange}
      />
      <input 
        type="text" 
        name="age" 
        value={age} 
        onChange={handleChange}
      />
      <input 
        type="text" 
        name="email" 
        value={email} 
        onChange={handleChange}
      />
    </>
  )
}