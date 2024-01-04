import React from 'react'
import { useInput } from '../hooks/UseInput'
import { Button, ButtonGroup, Card, Container, IconButton, List, ListItem, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

//!MUI 컴포넌트
//버튼, 텍스트 필드, 카드 등 React에서 사용되는 컴포넌트
//레이아웃 및 그리드 시스템
export default function Framework() {
  return(
    <div style={{ 
      margin: '10px', padding: '10px'
      }}>
      <hr />
      <button>버튼</button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <hr />
      <TextField label="텍스트필드"/>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <hr />
      <Card style={{padding: '20px'}}>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Card>
      <hr />
      <Container>
        <h1>Todos</h1>
        <TextField 
          label="add new Todo"
          variant='outlined'
          fullWidth
          {...useInput}
        />
        <Button
          variant='contained'
          color='primary'
        >Add</Button>
        <List>
          <ListItem>
            <>
              <IconButton>
                <DeleteIcon></DeleteIcon>
              </IconButton>
            </>
          </ListItem>
        </List>
      </Container>
    </div>
  )
}