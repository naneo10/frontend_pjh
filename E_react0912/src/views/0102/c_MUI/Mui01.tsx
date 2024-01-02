import { Typography } from '@mui/material'
import React from 'react'

//!MUI(Material-UI)
//:리액트에서 사용하는 UI 라이브러리
//(디자인 컴포넌트)

//?MUI 사용방법
//1.설치
//npm install @mui/material @emotion/react @emotion/styled

//

export default function Mui01() {
  return(
    <>
      <Typography variant="h3" gutterBottom>
          h3. Heading
      </Typography>
    </>
  )
}