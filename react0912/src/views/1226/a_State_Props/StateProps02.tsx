import React, { useState } from 'react'
import ChildPorps02 from './ChildProps02'

//!자식 컴포넌트의 이벤트를 부모 컴포넌트에게 전달
//:자식 컴포넌트에서 발생한 이벤트를
//:부모 컴포넌트의 함수를 통해 처리

type UserType = {
  name: string;
  height: number;
}

const initialValue: UserType = {
  name: 'lee seung ah',
  height: 169
}

//^부모 컴포넌트
export default function StateProps02() {
  const [userInfo, setuserInfo] = useState<UserType>(initialValue);

  const handleUpdate = ( newInfo: UserType ) => {
    setuserInfo( newInfo );
  }

  return(
    <div>
      <ChildPorps02 userInfo={userInfo} onUpdate={handleUpdate} />
    </div>
  )
}