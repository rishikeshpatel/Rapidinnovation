import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Card(param) {
  const { data } = param;

  return (
    <div className='book-container'>
      <div className='book'>
        <div className='book-title'>{data.volumeInfo.title}</div>
        <div className='book-subtitle'>{data.volumeInfo.subtitle}</div>
        <div className='book-publisher'>Published By -{data.volumeInfo.publisher}</div>
      </div>
    </div>
  );
}

function GoogleList() {
  const [books, setBooks] = useState([]);
  const [apiKey] = useState('AIzaSyAakDEFOJdtgURYVwfO_h3L_Bftc4savR4');
  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${apiKey}`).then((response) => {
      setBooks(response.data.items);
    });
  });

  return (
    <div className='list-container'>
      <h1>Books</h1>
      <div className='list'>
        {books.map((book) => {
          return <Card data={book} />;
        })}
      </div>
    </div>
  );
}

export default GoogleList;
