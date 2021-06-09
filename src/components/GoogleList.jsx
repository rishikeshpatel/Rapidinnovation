import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookCard(param) {
  const { book } = param;
  return (
    <div className='book-container'>
      <div className='book'>
        <div className='book-title'>{book.volumeInfo.title}</div>
        <div className='book-subtitle'>{book.volumeInfo.subtitle}</div>
        <div className='book-publisher'>Published By -{book.volumeInfo.publisher}</div>
      </div>
    </div>
  );
}

function GoogleList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAakDEFOJdtgURYVwfO_h3L_Bftc4savR4'
      )
      .then((response) => {
        console.log(response);
        setBooks(response.data.items);
      });
  }, []);

  return (
    <div className='list-container'>
      <h1>Books</h1>
      <div className='list'>
        {books.map((book) => {
          return <BookCard book={book} />;
        })}
      </div>
    </div>
  );
}

export default GoogleList;
