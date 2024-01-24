import { Button, Card, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Index() {
  return(
    <>
      <hr />
      {/* 기본 버튼 */}
      <Button variant='contained'>
        Default
      </Button>
      {/* 색상 변경 버튼 */}
      <Button variant='contained' color='primary'>
        Default
      </Button>
      {/* 비활성화 버튼 */}
      <Button variant='contained' disabled>
        Disabled
      </Button>
      {/* 링크 버튼 */}
      <Button variant='contained' href='#text-buttons'>
        Link
      </Button>
      <hr />
      {/*
        텍스트 필드
        :사용자로부터 입력을 받기 위한 요소
      */}
      <TextField
        label="Standard"
        variant="standard"
      />
      <TextField
        label="Multiline"
        multiline
        rows={4}
        defaultValue='Default Value'
      />
      <TextField
        label="Password"
        type='password'
      />

      {/* 카드: 정보를 보여주는 컨테이너 */}
      <Card variant='outlined'>
        <CardMedia
          component='img'
          height='140'
          image=''
          alt='카드 이미지'
        />
        <CardContent>
          <Typography variant='h5' component='h2'>Card Title</Typography>
          <Typography variant='body2' component='p'>Card content</Typography>
        </CardContent>
      </Card>
      <>
        
      </>
    </>
  )
}