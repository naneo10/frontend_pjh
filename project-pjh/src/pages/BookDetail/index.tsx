import React from 'react'
import { useParams } from 'react-router-dom'
import { userBookState } from '../../stores/book.store';

//책 상세페이지 컴포넌트
export default function Index() {

  //URL에서 bookId 매개변수 추출
  const { bookId } = useParams<{ bookId: string }>();

  //Zustand 스토어에서 책 목록을 가져오기
  const { books } = userBookState();

  //매개변수와 일치하는 책 찾기
  //url에 bookId가 존재하는 경우에만 해당 bookId 매개변수를 정수로 변환
  const bookIdNumber = bookId ? parseInt(bookId, 10) : null;

  //find(): bookId와 일치하는 id를 가진 책을 가져오기
  //parseInt(): URL에서 추출한 bookId(문자열)를 10진수 정수로 변환

  //정수로 변환된 매개변수와 일치하는 book을 찾아옴
  const book = bookIdNumber != null ? books.find(b => b.id == bookIdNumber) : null;
  console.log();

  //일치하는 책이 없으면 메시지 표시
  if(!book) {
    return <div>Book not found</div>
  }

  return(
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <p>{book.id}</p>
    </div>
  )
}